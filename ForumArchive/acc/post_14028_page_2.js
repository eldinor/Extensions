[{"Owner":"fenomas","Date":"2015-04-29T01:59:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_80581_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_14028_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1430253190_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_@fenomas_dd__lt_/p_gt__lt_p_gt_1. I want to keep it as a function because it implies some drawbacks that the user has to understand. So I prefer having a explicit function there_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Well_co_ or setStatic(boolean)_co_ or even just freeze() / unfreeze()_co_ etc. My aim was to obviate the question Jerome asked. The fact that meshes keep a cached world matrix is an implementation detail_co_ and it_t_s better if the user can intuit what APIs do without knowing how the implementation works_co_ was my thinking._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_80581_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_14028_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1430253190_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_2. Already the case_dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Mesh/babylon.abstractMesh.ts#L189_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/Mesh/babylon.abstractMesh.ts#L189_lt_/a_gt__lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Oh.. not sure why_co_ but my scenes blew up if I froze stuff without waiting one frame. Once this API is in the playground I_t_ll send you a repro._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_80581_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_14028_qt_ data-ipsquote-username_eq__qt_Deltakosh_qt_ data-cite_eq__qt_Deltakosh_qt_ data-ipsquote-timestamp_eq__qt_1430253190_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_3. Billboards need to have a new worldmatrix per frame. Because they are facing the camera_lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I understand that_co_ just wondering if any other optimization is possible. (Though it now occurs to me that it_t_ll still be a good optimization to freeze billboard meshes if they_t_re far from the camera_co_ and unfreeze them if they get close!)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-04-29T16:51:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_for 1. I.m convinced we have to keep the API clear on its goal. It does not freeze all the object because for instance animations still work_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_2. This is online_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-04-29T20:45:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Here are the results of setting isEnabled(false) when showing the Dock panel &amp_sm_ suspending Main panel_co_ for my worse case Menu (Look &amp_sm_ Feel / 894 meshes) _dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_IsEnabled        selection Potential FPS_lt_/span_gt__lt_/p_gt__lt_p_gt_--------------                 --------------  ---------------------_lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_   true             90 ms       11_lt_/span_gt__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_  false             19 ms       41_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_Meshes merged too  3.5 ms      145     (156 meshes)_lt_/span_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Pretty convincing.  After implementing freeze_co_ the Main panel when actually visible_co_ should get some of that improvement in mesh selection time._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I think that the lines of unfreeze are in the wrong order though_co_ since the computeWorldMatrix(true) call does nothing_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_public unfreezeWorldMatrix() {    this.computeWorldMatrix(true)_sm_    this._isWorldMatrixFrozen _eq_ false_sm_}_lt_/pre_gt__lt_p_gt_Think there should be a way to tell if a mesh is frozen.  This would allow code that perhaps animated it_co_ to get the value_co_ unfreeze it_co_ &amp_sm_ set it back to what it was.  Like POV _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ ._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_BTW_co_  my implementation of freeze in Dialog will be to override the methods_co_ to do the children as well._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-04-30T22:54:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_thank you for the PR. I_t_ll validate it asap!_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]