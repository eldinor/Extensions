[{"Owner":"danielvh96","Date":"2014-05-26T22:00:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_span style_eq__qt_color_dd_rgb(66_co_66_co_66)_sm_font-family_dd__t_Segoe UI_t__co_ _t_Lucida Grande_t__co_ Verdana_co_ Arial_co_ Helvetica_co_ sans-serif_sm_font-size_dd_13px_sm__qt__gt_I have a problem_co_ the file location is correct. I use everything in the same folder now and the babylon file is namen scene.babylon_co_ all I see is a white screen and nothing happens _dd_/ It isn_t_t an empty file because the sandbox displays everything correctly.. Please Help!_lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Kilombo","Date":"2014-05-26T23:58:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co_ and welcome aboard._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Can you post some code plz_co_ or a jsfiddle ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-05-27T08:06:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Did you manage to play with demos on babylonjs.com?_lt_/p_gt__lt_p_gt_Do you a use a local server to serve your files? You can use IIS on Windows with _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Tools/BuildOurOwnBabylonJS_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/tree/master/Tools/BuildOurOwnBabylonJS_lt_/a_gt_ or another server_co_ it_t_s up to you. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"danielvh96","Date":"2014-05-27T10:48:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I do use a local host on visual studio. This is the code that I use_dd__lt_/p_gt__lt_div_gt_&lt_sm_!DOCTYPE html&gt_sm__lt_/div_gt__lt_div_gt_&lt_sm_html xmlns_eq__qt__lt_a href_eq__qt_http_dd_//www.w3.org/1999/xhtml_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.w3.org/1999/xhtml_qt_&gt_sm__lt_/a_gt__lt_/div_gt__lt_div_gt_&lt_sm_head&gt_sm__lt_/div_gt__lt_div_gt_    &lt_sm_title&gt_sm_Using babylon.js - How to load a scene&lt_sm_/title&gt_sm__lt_/div_gt__lt_div_gt_    &lt_sm_script src_eq__qt_hand.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_/div_gt__lt_div_gt_    &lt_sm_script src_eq__qt_babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_/div_gt__lt_div_gt_    &lt_sm_style&gt_sm__lt_/div_gt__lt_div_gt_        html_co_ body {_lt_/div_gt__lt_div_gt_            width_dd_ 100%_sm__lt_/div_gt__lt_div_gt_            height_dd_ 100%_sm__lt_/div_gt__lt_div_gt_            padding_dd_ 0_sm__lt_/div_gt__lt_div_gt_            margin_dd_ 0_sm__lt_/div_gt__lt_div_gt_            overflow_dd_ hidden_sm__lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_        #renderCanvas {_lt_/div_gt__lt_div_gt_            width_dd_ 100%_sm__lt_/div_gt__lt_div_gt_            height_dd_ 100%_sm__lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_    &lt_sm_/style&gt_sm__lt_/div_gt__lt_div_gt_&lt_sm_/head&gt_sm__lt_/div_gt__lt_div_gt_&lt_sm_body&gt_sm__lt_/div_gt__lt_div_gt_    &lt_sm_canvas id_eq__qt_renderCanvas_qt_&gt_sm_&lt_sm_/canvas&gt_sm__lt_/div_gt__lt_div_gt_    &lt_sm_script&gt_sm__lt_/div_gt__lt_div_gt_        if (BABYLON.Engine.isSupported()) {_lt_/div_gt__lt_div_gt_            var canvas _eq_ document.getElementById(_qt_renderCanvas_qt_)_sm__lt_/div_gt__lt_div_gt_            var engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_            BABYLON.SceneLoader.Load(_qt__qt__co_ _qt_scene.babylon_qt__co_ engine_co_ function (newScene) {_lt_/div_gt__lt_div_gt_                newScene.executeWhenReady(function () {_lt_/div_gt__lt_div_gt_                    // Attach camera to canvas inputs_lt_/div_gt__lt_div_gt_                    newScene.activeCamera.attachControl(canvas)_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_                    // Once the scene is loaded_co_ just register a render loop to render it_lt_/div_gt__lt_div_gt_                    engine.runRenderLoop(function() {_lt_/div_gt__lt_div_gt_                        newScene.render()_sm__lt_/div_gt__lt_div_gt_                    })_sm__lt_/div_gt__lt_div_gt_                })_sm__lt_/div_gt__lt_div_gt_            }_co_ function (progress) {_lt_/div_gt__lt_div_gt_                // To do_dd_ give progress feedback to user_lt_/div_gt__lt_div_gt_            })_sm__lt_/div_gt__lt_div_gt_        }_lt_/div_gt__lt_div_gt_    &lt_sm_/script&gt_sm__lt_/div_gt__lt_div_gt_&lt_sm_/body&gt_sm__lt_/div_gt__lt_div_gt_&lt_sm_/html&gt_sm__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2014-05-27T11:56:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Any error in the javascript console?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"danielvh96","Date":"2014-05-27T12:10:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_span style_eq__qt_color_dd_rgb(255_co_0_co_0)_sm_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm_font-size_dd_12px_sm__qt__gt_Uncaught Error_dd_ 404_lt_/span_gt__lt_span style_eq__qt_color_dd_rgb(255_co_0_co_0)_sm_font-family_dd_Consolas_co_ _t_Lucida Console_t__co_ monospace_sm_font-size_dd_12px_sm__qt__gt_ _lt_/span_gt__lt_/p_gt__lt_p_gt_In the babylon.js file. Here is an screen capture _lt_a href_eq__qt_http_dd_//prntscr.com/3n1dvu_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//prntscr.com/3n1dvu_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"danielvh96","Date":"2014-05-27T13:04:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just read something about adding some script to your web.config file. Here is the code I currently use but what do I have to add?_lt_/p_gt__lt_div_gt_&lt_sm_?xml version_eq__qt_1.0_qt_?&gt_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_&lt_sm_!--_lt_/div_gt__lt_div_gt_  For more information on how to configure your ASP.NET application_co_ please visit_lt_/div_gt__lt_div_gt_  _lt_a href_eq__qt_http_dd_//go.microsoft.com/fwlink/?LinkId_eq_169433_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//go.microsoft.com/fwlink/?LinkId_eq_169433_lt_/a_gt__lt_/div_gt__lt_div_gt_  --&gt_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_&lt_sm_configuration&gt_sm__lt_/div_gt__lt_div_gt_ _lt_/div_gt__lt_div_gt_    &lt_sm_system.web&gt_sm__lt_/div_gt__lt_div_gt_      &lt_sm_compilation debug_eq__qt_true_qt_ targetFramework_eq__qt_4.5_qt_ /&gt_sm__lt_/div_gt__lt_div_gt_      &lt_sm_httpRuntime targetFramework_eq__qt_4.5_qt_ /&gt_sm__lt_/div_gt__lt_div_gt_    &lt_sm_/system.web&gt_sm__lt_/div_gt__lt_div_gt_&lt_sm_/configuration&gt_sm__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Staafsak","Date":"2014-05-27T13:09:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2014-05-27T15:52:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Try to add that to your web.config file_dd__lt_/p_gt__lt_pre_gt_&lt_sm_system.webServer&gt_sm_\t&lt_sm_staticContent&gt_sm_\t\t&lt_sm_mimeMap fileExtension_eq__qt_.fx_qt_ mimeType_eq__qt_application/fx_qt_ /&gt_sm_\t\t&lt_sm_mimeMap fileExtension_eq__qt_.babylon_qt_ mimeType_eq__qt_application/babylon_qt_ /&gt_sm_\t\t&lt_sm_mimeMap fileExtension_eq__qt_.babylonmeshdata_qt_ mimeType_eq__qt_application/babylonmeshdata_qt_ /&gt_sm_\t&lt_sm_/staticContent&gt_sm_&lt_sm_/system.webServer&gt_sm__lt_/pre_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"danielvh96","Date":"2014-05-27T16:27:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you guys for all the help!! Worked for me _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ Thanks a lot man I really appreciate it!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"hit2501","Date":"2014-12-02T15:11:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have the same problem_co_ where is web.config or I must create it?_co_ sorry if its too obvious but Im new on babylon._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gwenael","Date":"2015-01-25T00:45:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi hit2501_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Which server do you use?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ZenZoy","Date":"2016-01-15T07:39:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_h3 style_eq__qt_font-size_dd_20px_sm_color_dd_rgb(0_co_0_co_0)_sm_line-height_dd_1.2_sm_font-weight_dd_400_sm_margin_dd_0px 0px 3px_sm_font-family_dd__t_Helvetica Neue_t__co_ Helvetica_co_ Arial_co_ sans-serif_sm_font-style_dd_normal_sm_font-variant_dd_normal_sm_letter-spacing_dd_normal_sm_text-align_dd_center_sm_text-indent_dd_0px_sm_text-transform_dd_none_sm_white-space_dd_normal_sm_word-spacing_dd_0px_sm_background-color_dd_rgb(255_co_255_co_255)_sm__qt__gt_\n\t \n_lt_/h3_gt_\n\n_lt_p_gt_\n\t_lt_strong style_eq__qt_font-weight_dd_bold_sm__qt__gt_hey yall_co__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong style_eq__qt_font-weight_dd_bold_sm__qt__gt_even with darvous_t_ suggested changes I still get a 404 error. any idea why? _dd_/_lt_/strong_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-01-15T08:16:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHey_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMaybe you can share some code ? Hard to say where_t_s the mistake without seeing anything _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ZenZoy","Date":"2016-01-15T08:25:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI could see it ll be a bit tricky to debug without seeing any code!! _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt_  just didn_t_t wanna flood with any code but couldn_t_t import my mesh on playground either! sophei_t_s choice! so here it is ... \n_lt_/p_gt_\n\n_lt_p_gt_\n\tfunction startBabylonJS() {\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    if (BABYLON.Engine.isSupported()) {_lt_br_gt_\n\t        scene _eq_ createScene()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br_gt_\n\t        BABYLON.SceneLoader.ImportMesh(_qt__qt__co_ _qt_scenes/_qt__co_ _qt_Rabbit.babylon_qt__co_ scene_co_ function (newMeshes) {_lt_br_gt_\n\t            // Set the target of the camera to the first imported mesh_lt_br_gt_\n\t            camera.target _eq_ newMeshes[0]_sm__lt_br_gt_\n\t        })_sm__lt_br_gt_\n\t        _lt_br_gt_\n\t        engine.runRenderLoop(function () {_lt_br_gt_\n\t            scene.render()_sm__lt_br_gt_\n\t        })_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t        window.addEventListener(_qt_resize_qt__co_ function () {_lt_br_gt_\n\t            engine.resize()_sm__lt_br_gt_\n\t        })_sm__lt_br_gt_\n\t    }_lt_br_gt_\n\t}\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfunction createScene() {_lt_br_gt_\n\t    canvas _eq_ document.getElementById(_t_renderCanvas_t_)_sm__lt_br_gt_\n\t    engine _eq_ new BABYLON.Engine(canvas_co_ true)_sm__lt_br_gt_\n\t    scene _eq_ new BABYLON.Scene(engine)_sm__lt_br_gt_\n\t    camera _eq_ new BABYLON.ArcRotateCamera(_qt_camera_qt__co_ Math.PI_co_ Math.PI / 2_co_ 10_co_ BABYLON.Vector3.Zero()_co_ scene)_sm__lt_br_gt_\n\t    sun _eq_ new BABYLON.HemisphericLight(_qt_sunLight_qt__co_ new BABYLON.Vector3(0_co_ 1_co_ 0)_co_ scene)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    camera.checkCollisions _eq_ true_sm__lt_br_gt_\n\t    camera.attachControl(canvas)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t    return scene_sm__lt_br_gt_\n\t}\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand i have a basic wen.config like this_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_?xml version_eq__qt_1.0_qt_ encoding_eq__qt_utf-8_qt_?&gt_sm__lt_br_gt_\n\t&lt_sm_configuration&gt_sm__lt_br_gt_\n\t  &lt_sm_!--&lt_sm_system.web&gt_sm__lt_br_gt_\n\t    &lt_sm_compilation debug_eq__qt_true_qt_ targetFramework_eq__qt_4.5_qt_ /&gt_sm__lt_br_gt_\n\t    &lt_sm_httpRuntime targetFramework_eq__qt_4.5_qt_ /&gt_sm__lt_br_gt_\n\t  &lt_sm_/system.web&gt_sm_--&gt_sm__lt_br_gt_\n\t  &lt_sm_system.webServer&gt_sm__lt_br_gt_\n\t    &lt_sm_staticContent&gt_sm__lt_br_gt_\n\t      &lt_sm_mimeMap fileExtension_eq__qt_.fx_qt_ mimeType_eq__qt_application/fx_qt_ /&gt_sm__lt_br_gt_\n\t      &lt_sm_mimeMap fileExtension_eq__qt_.babylon_qt_ mimeType_eq__qt_application/babylon_qt_ /&gt_sm__lt_br_gt_\n\t      &lt_sm_mimeMap fileExtension_eq__qt_.babylonmeshdata_qt_ mimeType_eq__qt_application/babylonmeshdata_qt_ /&gt_sm__lt_br_gt_\n\t    &lt_sm_/staticContent&gt_sm__lt_br_gt_\n\t  _lt_br_gt_\n\t    &lt_sm_handlers&gt_sm__lt_br_gt_\n\t      &lt_sm_add name_eq__qt_httpPlatformHandler_qt_ path_eq__qt_*_qt_ verb_eq__qt_*_qt_ modules_eq__qt_httpPlatformHandler_qt_ resourceType_eq__qt_Unspecified_qt_ /&gt_sm__lt_br_gt_\n\t    &lt_sm_/handlers&gt_sm__lt_br_gt_\n\t    &lt_sm_httpPlatform processPath_eq__qt_%DNX_PATH%_qt_ arguments_eq__qt_%DNX_ARGS%_qt_ forwardWindowsAuthToken_eq__qt_false_qt_ startupTimeLimit_eq__qt_3600_qt_ /&gt_sm__lt_br_gt_\n\t  &lt_sm_/system.webServer&gt_sm__lt_br_gt_\n\t&lt_sm_/configuration&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tthanks in advance _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2016-01-15T15:26:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tA 404 error can be displayed in the console if the file Rabbit.babylon._lt_strong_gt_manifest _lt_/strong_gt_is not found. Is it the case for you ?_lt_br_gt_\n\tIn this case_co_ it can be ignored_co_ and I suggest you to read this article about this_dd_ _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/07._Caching_Resources_in_IndexedDB_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/07._Caching_Resources_in_IndexedDB_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ your code should be working. If you add this_dd_\n_lt_/p_gt_\n\n_lt_pre class_eq__qt_ipsCode prettyprint lang-javascript prettyprinted_qt__gt_\n_lt_span_gt_BABYLON_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_SceneLoader_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_ImportMesh_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt__qt__qt__lt_/span_gt__lt_span_gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span_gt__qt_scenes/_qt__lt_/span_gt__lt_span_gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span_gt__qt_Rabbit.babylon_qt__lt_/span_gt__lt_span_gt__co__lt_/span_gt__lt_span_gt_ scene_lt_/span_gt__lt_span_gt__co__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span_gt_function_lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_newMeshes_lt_/span_gt__lt_span_gt_)_lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span_gt_{_lt_/span_gt__lt_span_gt_\n  _lt_/span_gt__lt_span_gt_// Set the target of the camera to the first imported mesh_lt_/span_gt__lt_span_gt_\n  camera_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_target _lt_/span_gt__lt_span_gt__eq__lt_/span_gt__lt_span_gt_ newMeshes_lt_/span_gt__lt_span_gt_[_lt_/span_gt__lt_span_gt_0_lt_/span_gt__lt_span_gt_]_sm__lt_/span_gt__lt_span_gt_\n  console_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_log_lt_/span_gt__lt_span_gt_(_lt_/span_gt__lt_span_gt_newMeshes_lt_/span_gt__lt_span_gt_)_sm__lt_/span_gt__lt_span_gt_\n_lt_/span_gt__lt_span_gt_})_sm__lt_/span_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tDo you have anything shown in the console? Can you see the rabbit ?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-01-15T15:36:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou can also use this property to eliminate errors when you are not using manifest files.\n_lt_/p_gt_\n\n_lt_pre class_eq__qt_ipsCode prettyprint lang-javascript prettyprinted_qt__gt_\n_lt_span_gt_engine_lt_/span_gt__lt_span_gt_._lt_/span_gt__lt_span_gt_enableOfflineSupport _lt_/span_gt__lt_span_gt__eq__lt_/span_gt__lt_span_gt_ _lt_/span_gt__lt_span_gt_false_lt_/span_gt__lt_span_gt__sm__lt_/span_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ZenZoy","Date":"2016-01-15T23:42:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyeah_co_ I was not counting the manifest file 404\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI still can_t_t see the rabbit_co_ nothing gets printed out to the console other than \n_lt_/p_gt_\n\n_lt_p_gt_\n\tGET _lt_a href_eq__qt_http_dd_//localhost_dd_59991/scenes/Rabbit.babylon_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//localhost_dd_59991/scenes/Rabbit.babylon_lt_/a_gt_ 404 (Not Found)h @ babylon.2.2.js_dd_4r.LoadFile @ babylon.2.2.js_dd_4c @ babylon.2.2.js_dd_20t @ babylon.2.2.js_dd_3(anonymous function) @ babylon.2.2.js_dd_3_lt_br_gt_\n\tbabylon.2.2.js_dd_4 Uncaught Error_dd_ Error status_dd_ 404 - Unable to load ../scenes/Rabbit.babylone.onreadystatechange @ babylon.2.2.js_dd_4\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tit makes me wonder if there is any other visual studio environment setting that is not allowing for this babylon file to be visible ... \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-01-16T02:09:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tyou have a link to your scene. Your error indicates a bad path to your babylon file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheck that the folder where the file _qt_Rabbit_qt_ is_co_ is named scenes and not scene. Check that the path is correct.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ZenZoy","Date":"2016-01-16T02:17:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tthe path is _qt_scenes_qt_ and the folder is called scenes as well...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have tried every combination of path and all sorts of babylon files... none of them work !! _dd_)) \n_lt_/p_gt_\n\n_lt_p_gt_\n\tsth strange is going on!! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt__gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\till figure it out ... eventually! _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-01-16T12:16:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou have a zip file containing your scene_co_ I_t_ll make it work. The zip can be attached here. If the extension is not taken into charging you add a .txt extension and it will work.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"ZenZoy","Date":"2016-01-30T20:36:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Dad72_co_ i figured it out!!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tit was an ASP.Net 5.2 setup issue ... in the startup.cs file I had to include the following so it would recognize babylon files\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_br_gt_\n\t            app.UseStaticFiles(new StaticFileOptions_lt_br_gt_\n\t            {_lt_br_gt_\n\t                ServeUnknownFileTypes _eq_ true_co__lt_br_gt_\n\t                DefaultContentType _eq_ _qt_application/javascript_qt__lt_br_gt_\n\t            })_sm__lt_br_gt_\n\t            //app.UseDirectoryBrowser()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t            // Set up custom content types - associating file extension to MIME type_lt_br_gt_\n\t            var provider _eq_ new FileExtensionContentTypeProvider()_sm__lt_br_gt_\n\t            provider.Mappings.Add(_qt_.babylon_qt__co_ _qt_application/javascript_qt_)_sm__lt_br_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2016-01-30T21:40:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tok _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babaorhum","Date":"2017-03-23T15:26:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_40219_qt_ data-ipsquote-contentid_eq__qt_6737_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1401205971_qt_ data-ipsquote-userid_eq__qt_5482_qt_ data-ipsquote-username_eq__qt_davrous_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 27/05/2014 at 5_dd_52 PM_co_ davrous said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tTry to add that to your web.config file_dd_\n\t\t_lt_/p_gt_\n\n\t\t_lt_pre_gt_\n\n&lt_sm_system.webServer&gt_sm_\t&lt_sm_staticContent&gt_sm_\t\t&lt_sm_mimeMap fileExtension_eq__qt_.fx_qt_ mimeType_eq__qt_application/fx_qt_ /&gt_sm_\t\t&lt_sm_mimeMap fileExtension_eq__qt_.babylon_qt_ mimeType_eq__qt_application/babylon_qt_ /&gt_sm_\t\t&lt_sm_mimeMap fileExtension_eq__qt_.babylonmeshdata_qt_ mimeType_eq__qt_application/babylonmeshdata_qt_ /&gt_sm_\t&lt_sm_/staticContent&gt_sm_&lt_sm_/system.webServer&gt_sm__lt_/pre_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThanks_co_ God\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]