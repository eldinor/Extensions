[{"Owner":"Soulangel","Date":"2014-12-02T18:24:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi everyone_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In my project_co_ I use one Preloader (Thanks to Temechon _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_) to load geometry I need. So I use the importMesh method to import my different meshes._lt_/p_gt__lt_p_gt_But_co_ unless I am mistaken in the importMesh method the parsedLights and parsedCameras is never called._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However _co_in one of my models_co_ I model 2 spot lights_co_ and with the importMesh is never imported._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is it possible to manage the import lights with importMesh method? If not why?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Regards_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Soul_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2014-12-02T20:59:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Today_co_ we have 2 ways to import_dd_ only a mesh (the geometry with no light and no camera but the materials associated to it) and the loadScene to load everything_dd_ cameras_co_ lights_co_ meshes_co_ animations and so on. _lt_/p_gt__lt_p_gt_The importMesh has been designed to inject a mesh with its materials into an existing scene with its own camera &amp_sm_ lightning._lt_/p_gt__lt_p_gt_In conclusion_co_ you need to rather create your camera and lights by code or use the loadScene instead of importMesh._lt_/p_gt__lt_p_gt_David_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2014-12-02T21:36:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Or you can create your own method _t_importLight_t_ and do a pull request _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The importMesh is only used to import a specific mesh (like David said it)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2014-12-02T21:39:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think he can use the SceneLoader.Append() method of the scene loader. This way he enjoys both worlds - he has his already created scene but can still import an entire scene to it_co_ including light and camera (I am not sure what will happen with the active camera_co_ it_t_s worth a try!)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Soulangel","Date":"2014-12-03T10:29:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_First_co_ I want to thank you for your answer._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then_co_ I understand the difference between the LoadScene (in charge to create a scene) and ImportMesh (add a mesh into an existing scene)._lt_/p_gt__lt_p_gt_But_co_ in my point of view_co_ the loader alogithme should be the same_co_ because some just need to load a scene_co_ while the other manage objects with specific mesh and need to import mesh_co_ will create an instance of their class (like me)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For instance_dd_ I have a rover with equipments including a camera and spots._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_However_co_ thanks to @raananw_co_ the append Method solve my problem _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_regards_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Soul_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2014-12-03T10:49:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am happy it helped._lt_/p_gt__lt_p_gt_The append function is rather new_co_ i think a month or two ago someone suggest to implement it (here in the forum_co_ you can try searching). It_t_s rather new and (i believe) not yet documented. I guess that with version 2 the documentation will be a bit better. (@Deltakosh_co_ @davrous und Co._co_ if any help is needed with documentation_co_ please let me know_co_ I would be happy to start documenting classes and their functions_co_ I think everyone will benefit)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2014-12-03T12:01:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_@raananw_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It is expected that there was a new official documentation_co_ but we have no news about it. We wait patiently._lt_/p_gt__lt_p_gt_This probably will be when version 2.0 will be complete (I love version 2 has come with export Unity3d to Babylon _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ). but I think Deltakosh tell us more about this (new official documentation). _lt_br_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_50797_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_10812_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1407871859_qt__gt__lt_div_gt__lt_p_gt_GOOOOD NEWS!!!!!!!!!!! I found a way to pay for a better documentation directly integrated into babylonjs.com !_lt_br_gt_ _lt_br_gt_Expect more news soon!_lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_br_gt__lt_p_gt_here_dd__lt_br_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/2640-documentation/?p_eq_50797_qt__gt_http_dd_//www.html5gamedevs.com/topic/2640-documentation/?p_eq_50797_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]