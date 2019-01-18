[{"Owner":"leht","Date":"2018-11-15T12:03:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m trying to make deferred shading works in my application. I use a custom shader that set data into GBuffer like this_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_  ....\n    //diffuse\n    gl_FragData[0] _eq_ vec4(colorFromLUT.rgb_co_ alpha)_sm_\n    //normal\n    gl_FragData[1] _eq_ vec4(colorFromLUT.rgb_co_ alpha)_sm_ //vec4(gradientW.xyz_co_ 1.0)_sm_\n    //position\n    gl_FragData[2] _eq_ vPos_sm_\n\n...._lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThen I create a custom PostProcess class_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_export default class DeferredShadingPostProcess extends PostProcess  {\n\t/**\n         * Creates a new instance DeferredShadingPostProcess\n         * @param name The name of the effect.\n\t\t * @param scene The scene to apply the render pass to.\n         * @param options The required width/height ratio to downsize to before computing the render pass. (Use 1.0 for full size)\n         * @param camera The camera to apply the render pass to.\n         * @param samplingMode The sampling mode to be used when computing the pass. (default_dd_ 0)\n         * @param engine The engine which the post process will be applied. (default_dd_ current engine)\n         * @param textureType Type of textures used when performing the post process. (default_dd_ 0)\n         * @param blockCompilation If compilation of the shader should not be done in the constructor. The updateEffect method can be used to compile the shader at a later time. (default_dd_ false)\n         */\n\tconstructor(name_co_ scene_co_ options_co_ camera_co_ samplingMode _eq_ 0_co_ engine _eq_ null_co_ textureType _eq_ Engine.TEXTURETYPE_UNSIGNED_INT_co_ blockCompilation _eq_ false) {\n\t\tif(typeof BABYLON.Effect.ShadersStore[_qt_deferredShadingFragmentShader_qt_] _eq__eq__eq_ _t_undefined_t_) {\n\t\t\tBABYLON.Effect.ShadersStore[_qt_deferredShadingFragmentShader_qt_] _eq_ `\nuniform sampler2D textureSampler_sm_ \nuniform sampler2D normalSampler_sm_\nuniform sampler2D positionSampler_sm_\nuniform vec3 cameraPosition_sm_\n\nvarying vec2 vUV_sm_\n\nvoid main( void )\n{\n    vec4 image _eq_ texture2D( textureSampler_co_ vUV )_sm_\n    vec4 position _eq_ texture2D( positionSampler_co_ vUV )_sm_\n    vec4 normal _eq_ normalize(texture2D( normalSampler_co_ vUV ))_sm_\n    \n    // vec3 light _eq_ vec3(50_co_100_co_50)_sm_\n    // vec3 lightDir _eq_ normalize(light - position.xyz)_sm_\n    \n    // vec3 eyeDir _eq_ normalize(cameraPosition - position.xyz)_sm_\n    // vec3 vHalfVector _eq_ normalize(lightDir.xyz + eyeDir)_sm_\n    \n    //gl_FragColor _eq_ image * max(dot(normal.xyz_co_ lightDir)_co_ 0.0) + vec4(pow(max(dot(normal.xyz_co_ vHalfVector)_co_0.0)_co_ 100.0) * 1.5)_sm_\n\tgl_FragColor _eq_ normal_sm_\n}\n\t\t\t`_sm_\n\t\t}\n\t\t\n\t\tif(engine _eq__eq_ null)\n\t\t\tengine _eq_ scene.getEngine()_sm_\n\t\t\n\t\tsuper(name_co_ _qt_deferredShading_qt__co_ [_qt_cameraPosition_qt_]_co_ [_qt_normalSampler_qt__co_ _qt_positionSampler_qt_]_co_ options_co_ camera_co_ samplingMode_co_ engine_co_ false_co_ _qt_#define GEOMETRY_SUPPORTED_qt__co_ textureType_co_ undefined_co_ null_co_ blockCompilation)_sm_\n\t\t\n\t\tthis._geometryBufferRenderer _eq_ scene.enableGeometryBufferRenderer()_sm_\n\t\t\n\t\tif (!this._geometryBufferRenderer) {\n\t\t\t// Geometry buffer renderer is not supported. So_co_ work as a passthrough.\n\t\t\tconsole.log(_qt_Multiple Render Target support needed to compute deferred shading_qt_)_sm_\n\t\t\tthis.updateEffect()_sm_\n\t\t} else {\n\t\t\t// Geometry buffer renderer is supported.\n\t\t\tthis._geometryBufferRenderer.enablePosition _eq_ true_sm_\n\n\t\t\tthis.onApply _eq_ (effect) _eq_&gt_sm_ {\n\t\t\t\teffect.setVector2(_qt_screenSize_qt__co_ new Vector2(this.width_co_ this.height))_sm_\n\t\t\t\teffect.setVector3(_qt_cameraPosition_qt__co_ this.getCamera().position)_sm_\n\n\t\t\t\tif (this._geometryBufferRenderer) {\n\t\t\t\t\teffect.setTexture(_qt_normalSampler_qt__co_ this._geometryBufferRenderer.getGBuffer().textures[1])_sm_\n\t\t\t\t\teffect.setTexture(_qt_positionSampler_qt__co_ this._geometryBufferRenderer.getGBuffer().textures[2])_sm_\n\t\t\t\t}\n\t\t\t}_sm_\n\t\t}\n    }\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tWhen I test output the textureSampler_co_ it shows OK. But when testing output the normalSampler_co_ it just show black screen_co_ even if I put same data in gl_FragData[0] and gl_FragData[1].\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI guess that I_t_m misunderstanding the GeometryBufferRenderer_co_ maybe it_t_s only used for StandardMaterial_co_ not custom ShaderMaterial.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCould you tell me how to set &amp_sm_ get normal buffer in GBuffer correctly?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-15T17:27:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you share a repro in the PG? Your postprocess code seems ok to me but how did you change the geometrybuffer shader?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"leht","Date":"2018-11-16T02:04:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/?do_eq_hovercard_qt_ data-mentionid_eq__qt_4442_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/4442-deltakosh/_qt_ rel_eq__qt__qt__gt_@Deltakosh_lt_/a_gt__co_ thank you! Now I realized that the issue is at that point_dd_ I didn_t_t change the geometybuffer shader!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow to use a custom shader code rather than the _t_geometry_t_ shader but still make it available for MRT postprocess after its pass? Do I need to make a clone of GeometryBufferRenderer?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-16T15:58:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou can probably just override the geometry shader in the effects store\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is the original one_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/geometry.vertex.fx_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/geometry.vertex.fx_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/geometry.fragment.fx_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/geometry.fragment.fx_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"leht","Date":"2018-11-16T16:23:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tBut how about the different uniforms that I use in my own shader?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGo other way_co_ I tried to clone GeometryBufferRenderer &amp_sm_ GeometryBufferRendererComponent but still could not use the GBuffer. It shows something on the screen but different than the main inputTexture set in PostProcess class. Here_t_re my classes in attachment.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI still don_t_t understand the way a post process is set the inputTexture &amp_sm_ how does the buffer renderer got the data into GBuffer.\n_lt_/p_gt_\n\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_21009_qt__gt_helpers.vrBufferRenderer.js_lt_/a_gt__lt_/p_gt_\n_lt_p_gt__lt_a class_eq__qt_ipsAttachLink_qt_ href_eq__qt_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_21010_qt__gt_helpers.vrBufferRendererComponent.js_lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"leht","Date":"2018-11-16T16:51:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFor more detail_co_ what I got when use _qt_textureSampler_qt_ (which is binded with inputTexture) is_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21013_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.eea0b5c190a59e675f4079da5bade765.png_qt_ alt_eq__qt_image.png.eea0b5c190a59e675f4079da5bade765.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut if I use GBuffer_co_ even the textures[0]_co_ I got_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_21014_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2018_11/image.png.dc5d964d215e5d701b10ffddecd1fd09.png_qt_ alt_eq__qt_image.png.dc5d964d215e5d701b10ffddecd1fd09.png_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOne issue that I understand_dd_ it shows in the left bottom corner because I use camera viewport of 1/4 screen (so it render into 1/4 corner of the GBuffer). But don_t_t know why it cannot show the texture like expected...\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-16T17:03:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tPinging _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/11802-luaacro/?do_eq_hovercard_qt_ data-mentionid_eq__qt_11802_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/11802-luaacro/_qt_ rel_eq__qt__qt__gt_@Luaacro_lt_/a_gt_ to see if he has some cycles to help (I_t_m about to leave on vacations _sm_D)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"leht","Date":"2018-11-16T17:10:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHappy vacation! _lt_span class_eq__qt_ipsEmoji_qt__gt_🏊‍♂️_lt_/span_gt_ Thank you so much for helping!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"leht","Date":"2018-11-16T19:07:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAfter some hours at night_co_ I found 2 bugs of my own that cause the buffer renderer show different than original! Thanks God_co_ it shows the same picture now!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tConfirm that clone the geometryBufferRenderer with our custom shader effect will do the work for GBuffer &amp_sm_ deferred shading so far.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-16T19:38:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tFantastic!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-11-16T19:41:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI would love to get your thoughts on how we could improve the current gbufferrenderer to avoid having you to clone it\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"leht","Date":"2018-11-18T04:07:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWhen cloning_co_ there_t_re 3 things that I need to change_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- createEffect in isReady function_dd_ change shader name_co_ uniforms list_co_ samplers list_co_..\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- renderSubMesh_dd_ change uniforms binding_co_ most of them I take the values from mesh.material\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- the texture count in GBuffer\n_lt_/p_gt_\n\n_lt_p_gt_\n\tActually I still don_t_t know why we need to clone the effect while we already have the material attached to the meshes. Maybe to avoid issues can occur if our scene has &gt_sm_1 meshes that have different materials? If that_co_ we also not sure that our only 1 effect in this custom renderBuffer can afford those difference.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe it_t_s better if we have a mechanism for cloning effect_co_ then make a RenderBuffer that easily to add the custom effect that we want to clone. As I mention above_co_ the addition can be _qt_createEffect_qt_ &amp_sm_ _qt_customRenderFunction_qt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]