[{"Owner":"Mars","Date":"2016-12-30T10:26:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_pre_gt_\n_lt_code_gt_var cylinder _eq_ BABYLON.Mesh.CreateCylinder(_qt_cylinder_qt__co_ 10_co_ 10_co_ 10_co_ 10_co_ 1_co_ scene_co_ false)_sm_\ncylinder.rotation.x _eq_ -Math.PI/2_sm_\n\nengine.runRenderLoop(function () {\n  cylinder.rotation.z +_eq_ 0.01_sm_\n  scene.render()_sm_\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThis should be rotation by z_co_ but it rotation by y???\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_If I change the _qt_cylinder.rotation.z +_eq_ 0.01_sm__qt_ to _qt_cylinder.rotation.y +_eq_ 0.01_sm__qt__co_ it have the same result._lt_/em_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_em_gt_Why?_lt_/em_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"iiceman","Date":"2016-12-30T14:03:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi Mars_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tlet_t_s make a playground so that we can all see what you mean_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#TRIV4%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#TRIV4#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think that problem is that when you rotate the cylinder around it_t_s x-axis the direction of it_t_s z-axis changes. Not sure what you final goal is_co_ but if you jsut want a cylinder laying on its side and beeing rotated_co_ you could bake the first rotation into the cylinder and then do the other rotations_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#TRIV4%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#TRIV4#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs that the desired result?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mars","Date":"2016-12-31T16:35:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThat is what i need.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]