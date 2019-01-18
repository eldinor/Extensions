[{"Owner":"meteoritool","Date":"2016-11-12T10:49:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi !\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy question is in the title ! I_t_ve been testing with a moving pointLight_co_ but its lighting still _t_updates_t_ either set to true or false. I wonder what needRefreshPerFrame does exactly _lt_img alt_eq__qt__dd_rolleyes_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_rolleyes.gif_qt_ title_eq__qt__dd_rolleyes_dd__qt_ /_gt_ just curious !\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-11-12T16:43:40Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi M.   Didjadoo a github source code search for that?  _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/search?p_eq_1&amp_sm_q_eq_needRefreshPerFrame&amp_sm_utf8_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/search?p_eq_1&amp_sm_q_eq_needRefreshPerFrame&amp_sm_utf8_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSee a pattern?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  PointLights_co_ directionalLights_co_ spotLights... but no hemisphericLights.  Hmm.  Those are the 3 types of lights that produce shadows.  Hmm.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOh_co_ and there_t_s _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/src/Lights/Shadows/babylon.shadowGenerator.js#L333_qt_ rel_eq__qt_external nofollow_qt__gt_ shadowGenerator.js line 333_lt_/a_gt_ returning in the search_co_ too.  Hmm.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tNo_co_ I really don_t_t know what it does.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  But we can probably pretend like we know what it does_co_ now.  heh.   I hereby pretend... that this setting determines whether the shadow-generating light... gets a re-calculated ShadowProjectionMatrix... each time the shadowGenerator_t_s getTransformMatrix() is called.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow_t_s that?  Did I sound like I actually have a clue?  _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_  Well_co_ I don_t_t_co_ but... I_t_m glad I sound like I do.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAll in all_co_ I think you will want to use your light for a BJS shadowGenerator... and THEN try your tests.  Good luck.  Report results if you like... and... party on!\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-11-14T18:33:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello\n_lt_/p_gt_\n\n_lt_p_gt_\n\tgood question _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ This parameter is used to define if the shadow map needs to be recompute on every frame even if the light does not move.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tActually this is required only for directional lights because the projectionmatrix used by directional lights is dependent on the meshes lit by the light.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]