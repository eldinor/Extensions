[{"Owner":"jerome","Date":"2015-03-05T09:57:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A new object has just been added to BJS _dd_ _lt_strong_gt_Curve3_lt_/strong_gt_._lt_/p_gt__lt_p_gt_This object is to embbed complex math curves like Bezier_co_ B-Spline_co_ etc so users won_t_t have to implement by themselves if they need it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_For now_co_ there are only two static methods about cubic and quadratic Bezier curves (more to come) _dd__lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var bezier2 _eq_ BABYLON.Curve3.QuadraticBezier(originPoint_co_ controlPoint_co_ destinationPoint_co_ nb_of_points)_sm__lt_/pre_gt__lt_/div_gt__lt_p_gt_and_lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var bezier3 _eq_ BABYLON.Curve3.CubicBezier(originPoint_co_ controlPoint1_co_ controlPoint2_co_ destinationPoint_co_ nb_of_points)_sm__lt_/pre_gt__lt_p_gt_Both methods return an instantiated _lt_em_gt_Curve3_lt_/em_gt_ object._lt_br_gt_Then users can access the Bezier curves points with _dd__lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var points _eq_ bezier3.getPoints()_sm__lt_/pre_gt__lt_p_gt_which is an array of _lt_em_gt_nb_of_points_lt_/em_gt_ successive _lt_em_gt_Vector3_lt_/em_gt_._lt_/p_gt__lt_p_gt_This kind of array can be then used with ribbons_co_ tubes_co_ extrusion paths_co_ animation paths_co_ etc ..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_PG_co_ from line 50 (the code before is just for drawing axis arrows) _dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1PSZDF_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1PSZDF_lt_/a_gt__lt_/p_gt__lt_/div_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jahow","Date":"2015-03-05T10:39:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thanks for your work Jerome_co_ I_t_m beginning to realize this will be very useful on my project. I promise I_t_ll show you the result as soon as it_t_s done _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-05T12:44:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you Jahow _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_I didn_t_t implement more than cubic Bezier curve_co_ because usually it_t_s enough _dd_ people concatenate many cubic Bezier curves together to get more complex curves._lt_/p_gt__lt_p_gt_This feature is documented and should be visible as tomorrow in the Tutorials - 04 More advanced features._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I wish I can implement some cubic spline soon in Curve3 object._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I just added another geometric tool which could be useful to users_co_ Path3D _dd_ given an array of successive _Vector3_ (as the one you could get with bezier curves) defining a path_co_ it computes a set of vector triplet on each point of the path_co_ keeping direction and consistency (minimizing rotations)._lt_/p_gt__lt_p_gt_These triplets can then be used as local system coordinates for anything you need._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Visible from tomorrow and the same documentation part if validated._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-05T13:08:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi guys/gals.  Yes_co_ nice work_co_ Jerome._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A little Playground training... do you see the 4 little green marks along the right side of the PG code editor?  Those indicate that you have 4 non-showstopper errors... sometimes called warnings.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Click around in your code until you get the thin black line (cursor location indicator) to land-upon a little green box._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_#1 warn - line 19 - no _t_new_t_ is used with _t_create_t_ things.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_#2 warn - line 27 - no _t_new_t_ is used in things like Vector3.Zero()... nor in things like Color3.Blue()_lt_/p_gt__lt_p_gt_#3 &amp_sm_ 4 warn - I_t_ll let you discover.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now_co_ speaking of _t_new_t__co_ should lines 52 and 59 have a _t_new_t_ used?  Just verifying.  It works with _t_new_t_ in both lines. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I did a little morning reading about _t_new_t_ and supers_co_ and subclasses_co_ and inheriting_co_ and prototype objects... and_co_ to be frank_co_ it made my morning coffee taste like crap.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Congrats again_co_ J.  Your _qt_lab_qt_ is growing fast_co_ and smelling... Jeromatic.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Worldspace_co_ localspace_co_ and Jerospace.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-05T13:12:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Aaargg... you_t_re right._lt_/p_gt__lt_p_gt_Laziness again _dd_ I just copied/pasted some old showAxis code I made when I was just starting to learn BJS ...and then making more errors than now (I hope)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Those _qt__lt_em_gt_new_lt_/em_gt__qt_ aren_t_t needed of course._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Wingy Eagle Eye ! _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-05T13:26:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Jerome_co_ it_t_s not of high importance.  I have released MANY playgrounds with green dots all over them.  I do it to challenge Dad72_co_ who has a SUPER eagle eye.  That guy can locate bugs in arctic ice.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  (His eagle eye has helped the framework a TON!)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What_t_s the word about... BABYLON.Curve3.QuadraticBezier and BABYLON.Curve3.CubicBezier?  No _t_new_t_ for those?  Or do we know?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe they should be BABYLON.Curve3._lt_u_gt_Create_lt_/u_gt_QuadraticBezier and BABYLON.Curve3._lt_u_gt_Create_lt_/u_gt_CubicBezier?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have no idea what is correct.  I just look at consistency with other BJS funcs/methods_co_ and from that_co_ I still don_t_t know.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-05T14:42:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You are right again._lt_/p_gt__lt_p_gt_These are static functions returning an _lt_em_gt_Curve3_lt_/em_gt_ instance. So no _lt_em_gt_new _lt_/em_gt_needed._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_So _lt_em_gt_CreateXXX() _lt_/em_gt_would have been semantically more consistent. I agree._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is a curve creation the right term ? Is a logical curve created ? It_t_s not a material object the user can display_co_ rotate_co_ handle_co_ etc._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe _lt_em_gt_BABYLON.Curve3._lt_u_gt_Compute_lt_/u_gt_QuadraticBezier()_lt_/em_gt_ ?_lt_/p_gt__lt_p_gt_Don_t_t really know..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But you are right  _dd_ a verb is really missing here according to other BJS static functions returning an instance._lt_/p_gt__lt_p_gt_Let me know_co_ you native english speakers_co_ what would be the best and I_t_ll change it (aarrg_co_ if I achieve it _dd_ DK is becoming crazy with all the bunch of $*+&amp_sm_%! slags I push in every PR)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-05T15:05:34Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  I warned DK _lt_u_gt_twice_lt_/u_gt_ about the potential fast growth of your ribbon laboratory.  I suggested a library of your own... and once every xx months_co_ we could merge a .ts version of that library... into the framework.  But nooooo.  heh._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Like I know if that would work or not.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  I_t_m probably spewing crap again.  I_t_m known for that_co_ ya know? _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It_t_s still not too late.  The rough part is in giving you access to the playground guts (so you could put new versions of the lib... in-scope of the PG).  Or_co_ you could keep your library on a CORS-ready server somewhere_co_ so folks could access older and recent versions.  Playground and CYOS zips (in the index.html) could include THAT external-include url._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Currently_co_ a zip from the playground... includes babylon.js_co_ hand.js_co_ oimo.js_co_ and cannon.js.  It could also include jMesh.js.  Then later_co_ when you_t_re done playing (but let_t_s hope that never happens)... we could do a final .ts merge-in of the library_co_ remove it from the playground external-includes (and CYOS_co_ as needed) _co_ and party hard._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Or_co_ maybe I have no idea what I am talking about (more likely).  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-05T15:26:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Aarrff..._lt_/p_gt__lt_p_gt_When talking about _lt_em_gt_all the bunch of $*+&amp_sm_%! slags I push in every PR_lt_/em_gt__co__lt_em_gt_ _lt_/em_gt_well_co_ it wasn_t_t about the TS code itself _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ _dd_ the TS code I injected in BJS is really light actually_co_ between 20 and 40 LOC only for each feature_co_ so not big real BJS change._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_No... I was talking about the GitHub fetch/merge/commit/push/PR cycle which brings a lot of locally compiled JS files from my computer to Github (maybe because the linux TS compiler differs from the Windows one_co_ don_t_t get it) and DK needs to delete/clean up all those un-needed files (not impacting BJS_co_ but coming along with) before merging in the nightly build each time I dare to submit something._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But don_t_t worry_co_ I won_t_t pollute BJS _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_So far_co_ I just added two mesh types (ribbon and tube)_co_ a mesh tool (shape extrusion) and two geometric tools (curve3 and path3D) ... just quite little things if you compare to other contributors _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_And they are all documented with PG examples (with many green dots  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_tongue.png_qt_ alt_eq__qt__dd_P_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/tongue@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ) so they won_t_t look too exotic (I hope) or too complex to new users._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2015-03-05T16:04:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_m not worried about BJS pollution from you_co_ at all.  I am talking about HOW OFTEN you might be doing PR_t_s.  I figure... at YOUR top coding speed... you will be doing a PR about every 45 minutes.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Ok_co_ maybe not THAT often... but... you_t_re a mover and a shaker_co_ J-willikers.  I purchased an extra tube of GitHub Grease just in case the git ball-bearings get too hot/dry.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-05T16:33:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I agree_co_ we need a ComputeXXX here_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-06T08:28:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Would you mind changing the name directly in the code please ?_lt_/p_gt__lt_p_gt_So I won_t_t fu$+#%&amp_sm_ing PR._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I change the doc meanwhile._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-06T14:07:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_doc and PG changed ..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-06T18:49:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I will!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-06T18:51:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I changed to CreateXXX actually_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-06T19:22:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_ok_lt_/p_gt__lt_p_gt_aarggg... ok_co_ I will then re-change the doc and playground  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-09T10:21:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I wait the last edit with PG links to be validated first (as I just can remember the links)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Then I_t_ll change the doc and the PG examples with the new _lt_em_gt_CreateXXX()_lt_/em_gt_ names._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_btw_co_ could someone authorized validate the pending docs ?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-10T10:33:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_done_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-16T13:34:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt__lt_u_gt_Curve3 object_lt_/u_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_added method _lt_em_gt_continue()_lt_/em_gt_ _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let_t_s imagine you_t_ve got many curves with different origins and you want to _qt_stick_qt_ them together one after the other without knowing/handling each curve origin and end._lt_/p_gt__lt_p_gt_Or you want a Bezier curve with 8 control points (very complex computation)... you could divide it in two cubic Bezier stuck together._lt_/p_gt__lt_p_gt_Or you want to stick your own sinus_co_ with a line_co_ then with an helix_co_ then with a Bezier in order to design for instance an extrusion path_co_ a tube path_co_ a path3D or whatever you want ..._lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var myFullCurve _eq_ curve1.continue(curve2).continue(curve3).continue(curve4)_sm__lt_/pre_gt__lt_p_gt_PR pending_lt_/p_gt__lt_p_gt_Doc validation pending_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-03-16T20:09:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Both validated_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2015-03-16T21:52:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thanks  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]