[{"Owner":"gryff","Date":"2015-11-03T03:02:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_With the recent monthly _qt_Maze_qt_ challenge_co_ I dug out a maze that I started working on in Blender back last winter. I had been using  BJS 1.14 and here is the basic maze_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/blender_maze/index.html_qt_ rel_eq__qt_external nofollow_qt__gt_Maze BJS 1.14_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now as I was trying to stay up to date_co_ I upgraded to BJS 2.2 - and here is that same maze_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/blender_maze/index2.html_qt_ rel_eq__qt_external nofollow_qt__gt_Maze BJS 2.2_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Walk forward then move the camera to the right with the arrow keys or strike awall with a glancing blow in some way._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In the first case it looks like the camera bounces off the wall_co_ in the second case_co_ the wall bounces of the camera (and it looks ugly _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ )_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Both scenes use the same simple basic javascript for displaying the scene and the same babylon file for lights_co_ camera and geometry_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Only difference is the version of BJS._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thoughts welcome._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-11-03T04:47:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have tried to narrow down the effect by using a couple more versions of BJS_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/blender_maze/index3.html_qt_ rel_eq__qt_external nofollow_qt__gt_Maze BJS 2.0_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The result is the same as BJS 1.14_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/blender_maze/index4.html_qt_ rel_eq__qt_external nofollow_qt__gt_Maze BJS 2.1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The result same as BJS 2.2._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So whatever is causing the effect happened between BJS 2.0 and BJS 2.1_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-11-03T06:14:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_And just to get the _qt_complete set_qt_ _co_ I just downloaded BJS 2.3_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/blender_maze/index5.html_qt_ rel_eq__qt_external nofollow_qt__gt_Maze BJS 2.3_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_And it seems to be functioning well _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_unsure.png_qt_ alt_eq__qt__dd_unsure_dd__qt__gt_ .... except it is throwing this error _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_Error_dd_ Active camera not set_lt_/pre_gt__lt_p_gt_every time i look around with the mouse  - but not with the use of the arrow keys_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In fact in the loader.js file I have this code _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var myCamera _eq_ newScene.getCameraByName(_qt_Camera_qt_)_sm_myCamera.speed _eq_ .1_sm_newScene.activeCamera _eq_ myCamera_sm_myCamera.attachControl(canvas_co_ true)_sm__lt_/pre_gt__lt_p_gt_and in the babylon file exported from blender the camera is actually defined as the active camera._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_gryff &lt_sm_- tears out more hair _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-11-03T11:18:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi gryff_co__lt_/p_gt__lt_p_gt_\ncomment out line 51 in loader.js. you are creating two scenes which seems to drive Babylon crazy _dd_-)_lt_/p_gt__lt_p_gt_\nThat solves the no active camera issue (Thou I have no idea why it is actually happening)._lt_/p_gt__lt_p_gt_\nAbout the bouncing - try reducing the gravity (0_co_-1_co_0 or somethin glike that) and see if it is better. Should be working wonderfully then._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Dad72","Date":"2015-11-03T14:01:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div_gt_Of memory_co_ versions less than 2.0_co_ some had various bugs hiding_co_ not very accurate (collisions_co_ lights ...). from version 2 many things needed to fix our scene and finally the version 2.3 also fixes bugs on what is collision and many others._lt_/div_gt__lt_br_gt__lt_div_gt_ _lt_/div_gt__lt_br_gt__lt_div_gt_I recommend that version 2.3_lt_/div_gt__lt_br_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-11-03T19:57:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for the suggestion Raanan - had no effect _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ . But I well clean up that loader.js file and try again. And I might have submitted a different maze _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Dad72 - well there are always going to be issues as we move from version to version - which is why I tend to avoid _qt_alpha_qt_ versions. In this case V2 and V2.3 work as I expect them and V2.1 and V2.2 show this odd behaviour. I find that strange but for now will stick with 2.3 _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyway_co_ I will keep trying and looking at things. But any other ideas welcome._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"RaananW","Date":"2015-11-03T22:02:49Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_hey_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I actually made the adjustments live and it works very well with 2.3 . Are you sure it didn_t_t help??_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2015-11-05T05:13:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Raanan 2.3 works fine in terms of the collision issue - just throws that odd error about the active camera not set. But I will persevere _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]