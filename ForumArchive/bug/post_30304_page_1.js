[{"Owner":"AlbertTJames","Date":"2017-05-08T19:22:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo... my problem is a bit specific. I will try to reproduce it in the playgroud but I am not sure I will be able to. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tSo I have a Rectangle2d that holds 4 rectangle2d children_co_ the green background is the parent square and the children square are the 4 grey rectangles.\n_lt_/p_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedOther_qt__gt_\n\t_lt_iframe data-controller_eq__qt_core.front.core.autosizeiframe_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/index.php?app_eq_core&amp_sm_module_eq_system&amp_sm_controller_eq_embed&amp_sm_url_eq_http_dd_//imgur.com/VGKS4sg_qt_ style_eq__qt_height_dd_603px_sm__qt__gt__lt_/iframe_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\tI am using the centering and margin system_dd_\n_lt_/p_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedOther_qt__gt_\n\t_lt_iframe data-controller_eq__qt_core.front.core.autosizeiframe_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/index.php?app_eq_core&amp_sm_module_eq_system&amp_sm_controller_eq_embed&amp_sm_url_eq_http_dd_//imgur.com/pGnLe5g_qt_ style_eq__qt_height_dd_603px_sm__qt__gt__lt_/iframe_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t I used to dispose of those rectangle children and recreate them at certain points in time_co_ storing the newly created children in the same array replacing the hold ones.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe problem is that when I _lt_strong_gt_resize the window_lt_/strong_gt_ there is a call to _lt_strong_gt_Prim2DBase._updatePositioning_lt_/strong_gt_ that returns (NaN_co_ NaN) as the _actualPosition (in the if (hasMargin) ... which they do). And it cause the parent and all its children to _lt_strong_gt_disappear from the screen. _lt_/strong_gt_That_t_s why i though it was linked to the bug _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ mentionned yesterday.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t There are several variables that are NaN_co_ one of them is Prim2d._size3... but i do not know why_co_ nor do I see where it is define (I only see one definition that sets it to zero... I will look tonight into the typescript source to see if it is there...). This does not happen if I do not dispose of the children prim2d... \n_lt_/p_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedOther_qt__gt_\n\t_lt_iframe data-controller_eq__qt_core.front.core.autosizeiframe_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/index.php?app_eq_core&amp_sm_module_eq_system&amp_sm_controller_eq_embed&amp_sm_url_eq_http_dd_//imgur.com/MJlDo46_qt_ style_eq__qt_height_dd_318px_sm__qt__gt__lt_/iframe_gt_\n_lt_/div_gt_\n\n_lt_div class_eq__qt_ipsEmbeddedOther_qt__gt_\n\t_lt_iframe data-controller_eq__qt_core.front.core.autosizeiframe_qt_ scrolling_eq__qt_no_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/index.php?app_eq_core&amp_sm_module_eq_system&amp_sm_controller_eq_embed&amp_sm_url_eq_http_dd_//imgur.com/oKSX5jn_qt_ style_eq__qt_height_dd_461px_sm__qt__gt__lt_/iframe_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t I had problems with Prim2d.dispose() before_co_ and looking at it_co_ I do not see where the prim2d is actually set to null. Maybe that is the problem? Some kind of persistant reference that interferes with the computation of the rectangles.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will look more into it_co_ but if it is something people have encountered I am interested to know their thoughts.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/?do_eq_hovercard_qt_ data-mentionid_eq__qt_18979_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/18979-nockawa/_qt_ rel_eq__qt__qt__gt_@Nockawa_lt_/a_gt_ &lt_sm_3 \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor now I am not disposing of the prims anymore _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2017-05-20T10:38:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tI think I_t_ll be able to track this down if you can reproduce it in the PG.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]