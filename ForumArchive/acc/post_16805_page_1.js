[{"Owner":"unicomp21","Date":"2015-08-28T08:52:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Need help on this one_co_ trying to create a custom procedural texture_co_ need access to the varying vPositionW_co_ which I_t_m assuming is the lerp of the world vertex position.  Thanks!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This is the simple case I_t_m trying to get working_co_ get link errors on vPositionW._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_#ifdef GL_ES_lt_/span_gt__lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_\\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_ _lt_/span_gt_+_lt_br_gt__lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_precision highp float_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_\\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_ _lt_/span_gt_+_lt_br_gt__lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_#endif_lt_/span_gt__lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_\\n\\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_ _lt_/span_gt_+_lt_br_gt__lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_varying vec3 vPositionW_sm_ _lt_/span_gt__lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_\\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_ _lt_/span_gt_+_lt_br_gt__lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_void main(void) {_lt_/span_gt__lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_\\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_ _lt_/span_gt_+_lt_br_gt__lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_ gl_FragColor _eq_ vec4(vPositionW.x_co_vPositionW.y_co_vPositionW.z_co_ 1.0)_sm__lt_/span_gt__lt_span style_eq__qt_color_dd_#000080_sm_font-weight_dd_bold_sm__qt__gt_\\n_lt_/span_gt__lt_span style_eq__qt_color_dd_#008000_sm_font-weight_dd_bold_sm__qt__gt__qt_ _lt_/span_gt_+_lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-28T15:35:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_can you please provide a playground demo?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2015-08-29T11:35:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Not sure I understand.  I_t_m failing to get it to work.  I should put together my code_co_ that doesn_t_t work_co_ and issue a pull request?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-08-29T12:26:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi unicomp21!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s not common for people to work-on shaders in the Babylon Playground_co_ so I thought I_t_d show you a tasty shader-playground that _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/15830-water-in-21_qt_ rel_eq__qt__qt__gt_forum user _lt_/a_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/15830-water-in-21_qt_ rel_eq__qt__qt__gt_hw3web_lt_/a_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/15830-water-in-21_qt_ rel_eq__qt__qt__gt_ was working-on_lt_/a_gt_.  (and lots of others_co_ too)  I believe these shaders and this water effect originally came from the World Monger demo and the _qt_How to Create a Convincing World_qt_ tutorial.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#R894C_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#R894C_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe _qt_original_qt_ is at _lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#BHX7Q%2316_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#BHX7Q#16_lt_/a_gt_ but I figured I would start a fresh one for you.  The playground is a great place to do experiments and hit RUN over and over again_co_ saving and bookmarking the new save location_co_ every so often.  When you discover something interesting or telling_co_ save it_co_ and paste the new url to this thread... and tell us what you discovered.  (so everyone can learn)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tKeep in mind that textures used in the playground must be CORS-clear.  Textures from wikiMedia commons or from the playground_t_s textures/ folder will work fine.  Any CORS-clear image should work.  When an image IS BLOCKED by CORS_co_ the playground won_t_t report that.  The image will just silently fail to load_co_ but maybe check your browser_t_s dev tools.  Possibly_co_ the failed texture load will be reported in that area.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wish I knew more about shaders_co_ but_co_ sorry.  I sometimes hear things like _qt_time is the only variable that is passed to the shaders automatically_qt_.  I_t_m not overly sure what that means_co_ but maybe you or others do.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think I have seen someone set a shader_t_s time vary-able from within a renderLoop... which means it can be over-ridden.  In other words... just because the vary-able is named _t_time_t_ does not mean you have to let it be _qt_fed_qt_ by scene elapsed time (the default).  MAYBE_co_ you can make _qt_pokes_qt_ to the shader_t_s time vary-able with anything_co_ and at _lt_u_gt_any_lt_/u_gt_ rate (every frame_co_ every 4th frame_co_ only when an event happens_co_ etc).  YOU could control the speed of _t_time_t_. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDon_t_t mark my words... I_t_m not shader-trained.... yet.  Maybe YOU will help me with that.  _lt_img alt_eq__qt__dd_)_qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ data-emoticon_eq__qt__qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ now you have seen a Babylon Playground with shaders in the code.  Try to make a playground similar to the one above... that shows your problem.  That will assist the shader experts in helping you find the problem.  Good luck_co_ be well.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2015-08-29T13:13:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks Wingnut!\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m clear now_co_ here_t_s the url.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//playground.babylonjs.com/#24PO9L_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//playground.babylonjs.com/#24PO9L_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tLook at the commented lines in the shader_co_ I need a UVW corresponding to world space  coords of vertex so I can index into more complex 3D procedural textures_co_ and splat them to this render-to 2D texture.  The idea would be using quad patches in the mesh and rendering them into the 2D procedural texture as squares.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMake sense?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-08-29T13:27:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hell no.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Oh wait_co_ maybe.  First_co_ you_t_d have a procedural texture grid... available... one of the coolest ways to make a grid that I_t_ve heard-of.  But... hmm..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You could make a fake heightmap grid_co_ too_co_ I think.  A fake mountain in the middle of a grid... that isn_t_t really there?  A shader is making it LOOK like it_t_s really a mountain?  (ie. more complex 3D procedural textures)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yeah_co_ I think I_t_m on your frequency_co_ or in the vicinity.  I hope you_t_re going to teach us what you learn_co_ and show us lots of demos.  And I _lt_u_gt_KNOW_lt_/u_gt_ the BJS procedural texture library is wholeheartedly welcoming new additions.  I_t_m excited!  You sound determined to kick butt!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  You_t_ve been to _lt_a href_eq__qt_http_dd_//www.babylonjs.com/cyos_qt_ rel_eq__qt_external nofollow_qt__gt_CYOS_lt_/a_gt__co_ right?  Suggestions or code to add new features to CYOS... are most-welcome_co_ too. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Yeah_co_ we_t_re all watching_co_ UC.  Show us everything!  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Oh yeah_co_ and I hope you get your issues answered._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2015-08-29T13:31:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks Wingnut_co_ will do my best.  Deltakosh_co_ is it clear what I_t_m trying to do?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ie index something like 3D perlin noise w/ a UVW derived from vertex position_co_ and splat to texture_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2015-08-29T13:33:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Having a world normal would be useful too for generating bump map procedural texture._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-08-30T13:13:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi again!  While you are waiting for experts to reply_co_ maybe _lt_a href_eq__qt_http_dd_//urbanproductions.com/wingy/babylon/ACP/acp_pretty.js_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//urbanproductions.com/wingy/babylon/ACP/acp_pretty.js_lt_/a_gt_ will be helpful for you someday.  This is the main code (pretti-fied) for the Assassin_t_s Creed - Pirates game from the BJS website._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_About 1/3 down the page... is a pile of shader code... messy_co_ but still quite steal-able.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This project uses structures called jsm_t_s (apparently).  It looks a bit strange_co_ but interesting.  That_t_s mostly irrelevant_co_ but DO notice the many jsm modules AFTER the shaders...  with _t_Type_t__dd_ [_qt_Shader_qt_].  With a little bit of bushwhacking... you can determine which shaders bind to which scene items/mats._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t know if answers to your questions can be gotten from that_co_ but I thought I would show it to you.  Maybe none of them use positions... I haven_t_t investigated them at all.  I am simply collecting shaders for when unicomp21 creates our new and exciting BabylonJS Shaders Tutorial!  YAY!  It will be featured in the little help menu at CYOS.  Yay!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Am I being pushy?  I hope so.  heh.  Ok_co_ now back to our show.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-31T18:27:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey this is clear_co_ but I think you may want to use custom materials instead of custom procedural textures. Procedural textures are more about generating a single texture and I_t_m wondering if you want to simply generate a texture and then use it with a material OR just develop your own material? (BTW custom material are far more flexible)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For custom material_dd__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/15._Understanding_Shaders_with_Babylon.js_and_ShaderMaterial_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/15._Understanding_Shaders_with_Babylon.js_and_ShaderMaterial_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2015-08-31T21:06:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The computation intensity of my shader(s) is too high to run every frame.  I need video memory backed persistence of the resulting texture.  Will custom materials still fill my need?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2015-08-31T21:07:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Looks like my need is to generate a texture and use w/ a material._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-08-31T23:49:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_you_t_re right_dd_ if you need computation intensive stuff_co_then custom procedural textures is the way to go_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But in this case you have to replace the vertex shader by default (_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/procedural.vertex.fx_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Shaders/procedural.vertex.fx_lt_/a_gt_) by one defined by yourself _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"unicomp21","Date":"2015-09-01T00:58:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thx David!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]