# HTML Mesh

## Introduction
The HTML Mesh is a [BabylonJS](https://babylonjs.com) mesh that displays a webpage (or DOM element) 
in the scene, meaning that it can occlude other meshes and be occluded by other meshs. 

[Online Demo](https://codesandbox.io/p/sandbox/babylon-html-mesh-demo-862gh5)

[BabylonJS Playground](https://www.babylonjs-playground.com/full.html#Y2LIXI#14).  Note the currently only works in fullscreen.  There is an issue with getting the wrong canvas size initially.

The following uses cases are supported by the HtmlMesh
* Add instructional content/video to a 3D scene.
* Allow users in a 3D scene to fill out a form or respond to a poll.
* Display an in-app browser so a user can take some action, e.g. sign up for an account, purchase something, join an email list without leaving the experience.
* Create a rich UI that can leverage all of the capabilities of CSS and can be driven through a CMS

Note that the use of HtmlMesh requires that the experience be accessed through a browser so in it's
current form, this will not work in native apps or in XR.  If constructed outside of a browser context, the
HtmlMesh instances will not have any geometry and will be disabled.  In the future, it might make sense to 
have them appear with placeholder content of perhaps even an option to view the raw HTML in a popup UI.

## How to Run Locally

First, clone the Babylon.js extensions repository:

```shell
git clone https://github.com/BabylonJS/Extensions.git
```

Once the repository has been cloned, open a command prompt in the HtmlMesh folder.

Then, type the following commands:

```shell
npm install
npm run dev
```

Then point your browser at localhost:5173 (or whereever Vite says it is hosted).

## How it works
The HTML Mesh leverages CSS transforms to make DOM content appear as though it has a location and orientation relative to the camera in the scene.  If the DOM content was rendered on top of the scene, then the DOM content would always occlude anything in the scene behind it.  To allow DOM content to be occluded by meshes in the scene, we instead place the DOM content behind the canvas and then use a depth mask mesh with a material that writes to the depth buffer, but not the color buffer.  This make effectively becomes a proxy for the DOM content and determines whether the renderer renders another mesh, the scene clear color, or nothing (which allows the DOM content to be seen).

Interaction with the DOM content is complicated by the fact that if the canvas is receiving pointer events, then the DOM content is not and vice versa.  A signal is needed to instruct the canvas to stop and start receiving pointer events.  To provide the best experience, the signal shoud be the entry of the pointer, so that the user can interact with the content immediately upon hovering it (or touching it on mobile).  To do this, we attach an onpointermove listener to the document.  It continually monitors the poiner location and picks the scene to determine which mesh is being picked.  If the mesh has the pointer capture behavior attached, then we instruct the behavior for that mesh to capture pointer events.  When the pointer is captured by an iframe, the pointer move event won't be triggered, but as soon as the pointer exits the iframe, the behavior will detect the pointer and transfer pointer event ownership to the canvas, or to another HtmlMesh.  To avoid potential conflicts and race conditions between the canvas and one or more HTML meshes in obtaining and releasing pointer lock, a pointer lock manager is introduced that queues and matches pointer requests and releases.  

## How to Use in your App
The `index.js` file shows an example of using this in your app for dom content, a PDF file (via iframe), an HTML site (via iframe), and a YouTube video (via iframe).

The first step is to create an instance of `HtmlMeshRenderer`.  Pass this the scene, and optionally an options object containing:
* `containerId` - An optional id of the parent element for the elements that will be rendered as `HtmlMesh` instances.
* `defaultOpaqueRenderOrder` - an optional render order function that conforms to the interface of the `opaqueSortCompareFn` as described in the documentation for [`Scene.setRenderingOrder`](https://doc.babylonjs.com/typedoc/classes/BABYLON.Scene#setRenderingOrder) to be used as the opaque sort compare for meshes that are not an instanceof `HtmlMesh` for group 0.  See [Rendering Order Impacts](#rendering-order-impacts) for more details.
* `defaultAlphaTestRenderOrder` - an optional render order function that conforms to the interface of the `alphaTestSortCompareFn` as described in the documentation for [`Scene.setRenderingOrder`](https://doc.babylonjs.com/typedoc/classes/BABYLON.Scene#setRenderingOrder) to be used as the alpha test sort compare for meshes that are not an instanceof `HtmlMesh` for group 0.  See [Rendering Order Impacts](#rendering-order-impacts) for more details.
* `defaultTransparentRenderOrder` - an optional render order function that conforms to the interface of the `transparentCompareFn` as described in the documentation for [`Scene.setRenderingOrder`](https://doc.babylonjs.com/typedoc/classes/BABYLON.Scene#setRenderingOrder) to be used as the transparent sort compare for meshes that are not an instanceof `HtmlMesh` for group 0.  See [Rendering Order Impacts](#rendering-order-impacts) for more details.

Next, create the DOM element for your content.  This can be any HTML element though most of the time, it should either be a `div` for DOM content in the same app, or an `iframe` for external dom content.  You should not add this element to your document; `HtmlMesh` will do this for you.  Set any attribute and style values that you want; however, be advised that the width and height styles will be replaced by the `HtmlMesh`.  

Finally, call `setContent` passing in the element and the mesh width and height in BabylonJS units.  Be advised that any scaling done after `setContent` will not be preserved on the next call to `setContent`.  You should grab any scaling you want preserved and pass the scale values through `setContent`.  See [Scaling `HtmlMesh` Instances](#scaling-htmlmesh-instances) for an expalantion on why this is the case.  You can set attributes and styles after calling `setContent` using a query selector on the id.  The `HtmlMesh` can be positioned, oriented, parented, shown or hidden like any other mesh.  You can even use pointer drag behavior and gizmos to allow users to position and move the mesh, subject to the caveats of scaling below.

## Scaling `HtmlMesh` Instances
In order to keep the dom content and mesh size synched, the dom content size will be adjusted avery frame using CSS transforms to match the mesh.  This means that if the mesh is scaled (using, say, a bounding box gizmo) the content will be scaled as well.  Since the content is set after the mesh is created, the mesh initially starts as a place of size 1.  Once the content is set, we need to scale the mesh to match.  We can't just scale the mesh, because that would then scale the content.  So we compute a scaling transform, and we bake it into the mesh vertices, effectively rewriting the mesh size.  We also store an inverse scale matrix that can back out the scale.  The next time `setContent` is called, we will back the scale out to bring the mesh back to 1 and then compute a new scale transform (and inverse) and bake it into the mesh vertices.  The consequence of this is that any scaling applied (via, say, the bounding box gizmo) will be reverted on the next call to `setContent`.  So if you are storing info to recreate HtmlMesh instances on a server, you will want to make sure that you update the original size with any scaling changes so the next time you call setContent, they will be preserved.

## Rendering Order Impacts
In order to ensure that the HtmlMeshes render before other meshes (so that the HtmlMesh is properly occluded by meshes that are closer to the camera), the HtmlMeshRenderer will set the rendering order for group 0.  If your application sets a custom opaque, alpha test, or transparent rendering order for group 0, you must set the rendering order via the HtmlMeshRenderer constructor.  If you do not, then your render order will be overwritten if the HtmlMeshRenderer is created after and the HtmlMeshes will not be properly occluded by other meshes if the HtmlMeshRenderer is created before.  I realize this is not ideal, but any solution for trying to force the html meshes to render first is going to impact either rendering order, the allocation of meshes to rendering groups, or the assignment of material ids (and that would be defeated if a custom render order function is used) and setting the render order seemed to be the least bad option.

## Pointer Capture
An HtmlMesh instance can be configured to automatically capture the pointer on entry.  This allows for "one-click" behavior where the user can interact directly with the content.  For example, the user can click the play button directly on a YouTube video.  Iframes are problematic, however; because we cannot detect pointer movement within a cross-origin iframe (an iframe that originates from a different site than the one that is hosting it).  Simply put, we can capture the pointer, but releasing it requires that the pointer leaves the iframe completely.  This requirement means that we cannot detect when the pointer is over a mesh that is in front of the HtmlMesh containing the iframe; only when the pointer has fully left the iframe will the pointer be detected.  In practice, since BabylonJS relies on pointer events on the canvas, this means that no actions, pointer obeservables, or scene picking will work correctly if the pointer entered the iframe first until the pointer has left the iframe.  Therefore, if you have mesh content that needs to be pickable (respond in some way to pointer events) that could potentially be in front of an HtmlMesh containing an iframe (either due to camera orientation of movement of the either mesh), we recommend one of the following:
1.  If the geometry of the mesh is fairly predictable, you can create a pointer mask using an SVG element that sits over the iframe and aligns with the projection of the occluding mesh to the screen.  By setting pointer events on this mask to `fill` it will cause the pointermove listener on the document to start getting pointer events again when the pointer moves over the mask, which will allow the ray detection to determine that the mesh is in front of the HtmlMesh hosting the iframe and it will release the pointer.  Note that you will need to compute CSS transforms for the mask in order to skew it to match the mesh it is masking as the camera rotates.  I may add a PointerEventMaskBehavior at some point to generalize this concept.
2.  If creating and maintaining a mask is not practical, then you can disable the auto pointer capture on the HtmlMesh using `disableAutomaticPointerCapture`.  When automatic pointer capture is disabled, the pointer capture must be initiated by calling `capturePointer` and released by calling `releasePointer`.  This can be done in response to whatever gesture seems appropriate such as clicking of double clicking the HtmlMesh.

You may also want to disable automatic pointer capture if allowing a user to edit an HtmlMesh, e.g. using a gizmo or pointer drag behavior.

## Text Quality
The HtmlMesh takes measures to provide the best possible text quality.  Specifically, it makes the content as large as possible to fit within the screen and then scales it down to fit the mesh at the current zoom, and it turns off backface rendering for the HtmlContent (which can cause some aliasing).  However, the biggest contributor to poor text quality when using CSS transfroms is subpixel rendering.  This occurs when the content is sized and positioned over a partial pixel.  When rendering normally, this is avoided by always choosing even numbers of pixels for the size of the content and always making sure that any positioning attributes (such as top, left, padding, etc...) are whole pixel values.  Unfortunately, when using CSS transforms, as soon as perspective is added (even if the camera is not rotated), the transform could result in subpixel rendering.  Once rotation is allowed it is gauranteed that subpixel rendering will occur at some point.  This effect can be noticed when viewing the example as soon as the camera moves off of a +z orientation as the shimmering of the text in the PDF and the BJS site.  The effect is much less pronounced with larger text sizes.

## PDF Content
PDFs can be displayed in scene using HtmlMesh.  Aside from the text quality issue noted above, PDFs with embedded links will navigate the current tab/window when one of the links is selected.  Sandboxing the iframe can prevent sites from navigating the current tab/window, but on Chrome sandboxed iframes cannot load PDFs.