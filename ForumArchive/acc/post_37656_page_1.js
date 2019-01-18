[{"Owner":"PhantomWarrior562","Date":"2018-05-15T01:51:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIn Summary_dd_ How do you split 1 BabylonJS file (with existing code) into multiple JavaScript files (and 1 HTML file)?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHey all_co_ I’m having lots of fun building my RPG game in BabylonJS! _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ Unfortunately_co_ I’m having trouble splitting my file into multiple files to make it easier to organize/eventually scale-up my code. The only information I found off of the Internet was hard to understand.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_What I Have Right Now_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[File] Main HTML Code_co_ including_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t—All BabylonJS code\n_lt_/p_gt_\n\n_lt_p_gt_\n\t—All keyboard-listening code\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am using the BabylonJS HTML template from here (https_dd_//doc.babylonjs.com/babylon101/first) and put all of my BabylonJS code inside the createScene function.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ So far_co_ all of my information (including boxes and sprites) are all created from BabylonJS and not imported (besides 1 sprite).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ I am using JavaScript and am using a regular simple-to-use IDE (Komodo Edit) for typing my code.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_What I Would Like (in General)_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy goal for asking this question is to learn how to split 1 BabylonJS file (as you see above) into multiple JavaScript files so I can organize my files something similar to what I list below this paragraph. (_lt_strong_gt_Important Note_dd__lt_/strong_gt_ I am not asking how to implement each of the files I list right below this paragraph. I_t_m self-teaching myself those things outside of this thread. _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ I am showing this list below because I would like to demonstrate how I would like to split 1 BabylonJS file into multiple JavaScript/HTML files.)_lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ Each [File] represents a separate file (ex_dd_ .js or .html file)_co_ each containing a separate piece of code for the project.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[File] Main HTML Code (including necessary CDNs)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[File] BabylonJS Scene code_co_ including\n_lt_/p_gt_\n\n_lt_p_gt_\n\t—Processing Cannon.js physics engine\n_lt_/p_gt_\n\n_lt_p_gt_\n\t—Rendering Loop\n_lt_/p_gt_\n\n_lt_p_gt_\n\t—Asset Loader - Not yet written/I don’t yet know how it works. Possibly better to put this in a separate file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[File] The Player_t_s Character\n_lt_/p_gt_\n\n_lt_p_gt_\n\t—SpriteManager/sprites\n_lt_/p_gt_\n\n_lt_p_gt_\n\t—BABYLON.MeshBuilder.CreateBox component (Note_co_ I am using a mix of 3d box and a sprite for this character.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t—various variables\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[File] Keyboard Listener\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[File] Create Camera Function\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[File] World Code (General) (Where the player moves around and talks with NPCs_co_ interacts with buildings etc.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[File] World Code - Desert Specifics- Not yet written\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[File] World Code - Forest Specifics - Not yet written\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[File] World Code - Forest - House 1 - Not yet written\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[File] World Code - Forest - House 2 - Not yet written\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[File] Menu Code - Not yet written\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[File] Held Item - Not yet written\n_lt_/p_gt_\n\n_lt_p_gt_\n\t[File] Enemy (General) - Not yet written\n_lt_/p_gt_\n\n_lt_p_gt_\n\tetc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ This _lt_u_gt_does not_lt_/u_gt_ include importing models and environments/terrains from Blender_co_ which I will eventually do/learn how to do.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_What I Have Tried_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMainly_co_ my problem has came from with trying to write BabylonJS JavaScript files outside of\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar createScene _eq_ function () { /*Where my code is now*/ }\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I try to write code outside of that function and call it from inside the function_co_ that external function cannot access BABYLON. For example_dd_ new BABYLON.SpriteManager will not work since the external function does not recognize BABYLON (even though the function is called inside a function that does have access to BABYLON). This happens when I type the function in the same file outside the createScene function. It also happens with calling a function in a separate JavaScript file that is called using the &lt_sm_script src_eq_“codeFiles/player.js”&gt_sm_&lt_sm_/script&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_strong_gt_Internet Finds that Might be Helpful (that I Don_t_t Understand)_dd__lt_/strong_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere are a few things on the Internet I found and didn’t really understand.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t—SceneLoader and SceneLoader.append()      &lt_sm_- from the BabylonJS library\n_lt_/p_gt_\n\n_lt_p_gt_\n\t——I’m not sure if these apply to my certain situation. I don’t really know what these are for. I assume that they are for already-built terrains/environments/models (or groupings of already-built terrains/environments/models)_co_ all of which were created in Blender or somewhere else. (If I am mistaken_co_ I would like to know. _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ ). I have not yet learned how to use/import/create already-built terrains/environments/models. (It’s on my to-do list as I progress through building this game _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ ) If they are for my situation_co_ then I would love to learn how to use them.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t——If these are appropriate_co_ I have read that SceneLoader.append() is _lt_em_gt_much_lt_/em_gt_ better than SceneLoader.load()_sm_ Is that true?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t—These 2 Links_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t——deployed.js by DigiHz Data (http_dd_//www.html5gamedevs.com/topic/23372-loading-new-scnes-from-different-js-scripts/)\n_lt_/p_gt_\n\n_lt_p_gt_\n\t———I know this script includes using SceneLoader to load a scene from an AJAX command. It includes a fair amount of complicated code I don’t really understand.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t——Stupax Platformer Game Code by mbarde (https_dd_//github.com/mbarde/stupax/blob/master/js/mainGame.js) (Fun game_co_ by the way _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ )\n_lt_/p_gt_\n\n_lt_p_gt_\n\t———Unlike this game_co_ my game uses an external physics engine (Cannon.js)_co_ so the way mbarde splits things might not apply to my game.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI was wondering whether someone could help me and/or point me in the right direction. Thanks for the help!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-15T15:51:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tCan you share your project on a live server? Seeing it in action will help us helping you _lt_span_gt__lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt_true_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt__gt__lt_/span_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PhantomWarrior562","Date":"2018-05-16T01:08:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Deltakosh_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for responding. Unfortunately_co_ I don’t have a live server at this time. Right now_co_ my game is pretty much using arrow keys and the space bar to move a cube in 5 directions (+/- x axis_co_ +/- z axis_co_ + y axis (and - y axis is taken care of by gravity.)).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is my attempt at clarifying what I am asking_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLet’s ignore_co_ for now_co_ my previous post and look at my following explanation/question with fresh eyes. I am trying to move parts of my code to a separate file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt_What I Have Now_dd__lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1 HTML file_co_ identical to BabylonJS Template code (https_dd_//doc.babylonjs.com/babylon101/first#html-template) except with my code inside the createScene function.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt_My Goal_dd__lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2 Separate Files_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt_MainFile.html_lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ The “…” means etc. The code would be almost the same as the HTML template I hyperlinked above.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t…\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_src script _eq_ “codeFiles/createPlayerScript.js”&gt_sm_&lt_sm_/script&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t...\n_lt_/p_gt_\n\n_lt_p_gt_\n\tvar createScene _eq_ function(){\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     …\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     var playerCube _eq_ createPlayer()_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     …\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}\n_lt_/p_gt_\n\n_lt_p_gt_\n\t...\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_u_gt_createPlayerScript.js_dd__lt_/u_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfunction createPlayer(){\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     // Includes code like var playerCube _eq_ BABYLON.CreateMesh.CreateBox\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     …\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     return playerCube_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhen I try to use a method like BABYLON.CreateMesh.CreateBox in that external file_co_ an error is thrown because I did not define the function inside the createScene function. Because of this problem_co_ I don’t know how to create external files like createPlayerScript.js and would appreciate learning how to do so.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-16T17:21:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis should work if you make sure to first reference Babylon.js before referencing your files\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PhantomWarrior562","Date":"2018-05-17T01:05:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Deltakosh_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI’ve been doing a lot of testing. My local server is slow_co_ so it took me a while to realize the following_dd_ the issue actually is a JavaScript problem instead of specifically being a BabylonJS issue. I am unable to call an external JavaScript function from another file. If you or anyone here are willing to help with that_co_ that’s great. If not_co_ that’s fine. If you want_co_ I could start a new thread for that. I have more details below_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI am calling &lt_sm_script src_eq_“externalCode/createPlayerScript.js_qt_&gt_sm_&lt_sm_/script&gt_sm_ at the beginning of my HTML file. And I am doing it after calling the working CDNs for BabylonJS (_lt_a href_eq__qt_https_dd_//preview.babylonjs.com/babylon.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//preview.babylonjs.com/babylon.js_lt_/a_gt_) and Cannon.js (_lt_a href_eq__qt_https_dd_//preview.babylonjs.com/cannon.js_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//preview.babylonjs.com/cannon.js)_lt_/a_gt_._lt_br /_gt_\n\t     _lt_br /_gt_\n\tBelow_dd_ My code for calling my external JavaScript function and BabylonJS and Cannon.js_co_ in the order in which I call them in my HTML file._lt_br /_gt_\n\t     &lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/cannon.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_br /_gt_\n\t      &lt_sm_script src_eq__qt_https_dd_//preview.babylonjs.com/babylon.js_qt_&gt_sm_&lt_sm_/script&gt_sm__lt_br /_gt_\n\t      &lt_sm_!-- My own external player creation script below--&gt_sm__lt_br /_gt_\n\t      &lt_sm_script src_eq__qt_externalCode/createPlayerScript.js_qt_ charset_eq__qt_UTF-8_qt_&gt_sm_&lt_sm_/script&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy createPlayerScript.js currently contains_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tfunction testFunction(){\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     console.log(_qt_testFunction() ran_qt_)_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t}\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy main file calls this function like this_dd_ testFunction()_sm_ (inside the createScene part of the BabylonJS template.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd my Code inspector on Chrome tells me “Uncaught Reference. TestFunction is not defined etc.”\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy mainFile.html is in the same folder as the_lt_span_gt_  _lt_/span_gt_externalCode folder. I am wondering what is going wrong.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNote_dd_ This happens when I run my code on my local server _lt_i_gt_and_lt_/i_gt_ when I run my code by manually opening the HTML file in Chrome.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried the following (the changes I tried are in bold)_co_ which also does not help_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t     &lt_sm_script src_eq_“externalCode/createPlayerScript.js_qt_ _lt_b_gt_charset _eq_ “UTF-8”_lt_/b_gt_&gt_sm_&lt_sm_/script&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnother attempt_dd_ Adding the following lines even though the BabylonJS template already has a meta tag.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_meta charset_eq__qt_utf-8_qt_&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_meta name_eq__qt_description_qt_ content_eq__qt__qt_&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t&lt_sm_meta name_eq__qt_viewport_qt_ content_eq__qt_width_eq_device-width_qt_&gt_sm_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis also did not help.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-17T01:39:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__t_display_dd_ inline !important_sm_ float_dd_ none_sm_ background-color_dd_ transparent_sm_ color_dd_ rgb(53_co_ 60_co_ 65)_sm_ font-family_dd_ _qt_Roboto_qt__co__qt_Helvetica Neue_qt__co_Helvetica_co_Arial_co_sans-serif_sm_ font-size_dd_ 14px_sm_ font-style_dd_ normal_sm_ font-variant_dd_ normal_sm_ font-weight_dd_ 400_sm_ letter-spacing_dd_ normal_sm_ orphans_dd_ 2_sm_ text-align_dd_ left_sm_ text-decoration_dd_ none_sm_ text-indent_dd_ 0px_sm_ text-transform_dd_ none_sm_ -webkit-text-stroke-width_dd_ 0px_sm_ white-space_dd_ normal_sm_ word-spacing_dd_ 0px_sm__t__gt_“Uncaught Reference. TestFunction is not defined_lt_/span_gt__qt__eq__eq_&gt_sm_ make sure your function is name _lt_u_gt__lt_strong_gt_T_lt_/strong_gt__lt_/u_gt_estFunction\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PhantomWarrior562","Date":"2018-05-17T01:43:08Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tUnfortunately_co_ I mistyped. It_t_s testFunction()_sm_ (using camelCase)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also tried the following_co_ which shouldn_t_t make a difference_co_ and it didn_t_t work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_&lt_sm_script src_eq_“externalCode/createPlayerScript.js_qt__lt_span_gt_ _lt_/span_gt__lt_/span_gt__lt_b style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_type _eq__qt_text/javascript_qt__lt_/b_gt__lt_span style_eq__qt_background-color_dd_#ffffff_sm_color_dd_#353c41_sm_font-size_dd_14px_sm__qt__gt_&gt_sm_&lt_sm_/script&gt_sm__lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs I showed above_co_ I also tried adding more meta tags_co_ which did not help.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2018-05-17T01_dd_49_dd_48Z_t_ title_eq__t_05/17/2018 01_dd_49  AM_t_ data-short_eq__t_May 17_t__gt_May 17_lt_/time_gt_ by PhantomWarrior562_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_Adding another attempt\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-17T16:51:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tWithout a live version I can_t_t help more \n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat about creating a repo on GitHub and share it here? We could see the code at least then\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PhantomWarrior562","Date":"2018-05-17T21:22:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Deltakosh_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks so much for helping me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy code is on this repo_dd_ [Link Removed]\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-17T21:25:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI do not see the createPlayer.js file? (which should be referenced at the end before closing the body tag)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PhantomWarrior562","Date":"2018-05-17T21:41:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks for pointing that out. I_t_ll post it soon. I just found something I need to look into regarding this issue. I_t_ll update once I learn more. Thanks_co_ by the way.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PhantomWarrior562","Date":"2018-05-18T15:08:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Deltakosh_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again for your help!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI figured out the problem. The JavaScript external file problem was actually caused by my accidentally leaving a _qt_}_qt_ uncommented in the createPlayerScript.js.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd what I thought was a BabylonJS error was actually my trying to access a variable outside of scope (accessing a variable that was declared inside the createScene function from outside the function (in the external file)).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks again for your help! Hope you have a great weekend!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-05-18T15:48:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAll good then!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2018-05-18T16:52:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_215471_qt_ data-ipsquote-contentid_eq__qt_37656_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1526656081_qt_ data-ipsquote-userid_eq__qt_31443_qt_ data-ipsquote-username_eq__qt_PhantomWarrior562_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t1 hour ago_co_ PhantomWarrior562 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi Deltakosh_co_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThanks again for your help!\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tI figured out the problem. The JavaScript external file problem was actually caused by my accidentally leaving a _qt_}_qt_ uncommented in the createPlayerScript.js.\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tAnd what I thought was a BabylonJS error was actually my trying to access a variable outside of scope (accessing a variable that was declared inside the createScene function from outside the function (in the external file)).\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\tThanks again for your help! Hope you have a great weekend!\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThe perfect case for using Typescript.  There is overhead_co_ but minor syntax problem become simple_co_ and keep the number of wild chases down to something you can live with.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"PhantomWarrior562","Date":"2018-05-19T18:30:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi JCPalmer_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for the suggestion! Haven’t checked out Typescript in depth just yet but leafed through the basics. Looks like it would be very useful for structure_co_ which is exactly what I want. Thanks!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]