$(function () {
	
	//学员作品鼠标移入移出效果
	$(".lxr_start").mouseover(function(){
		var num = $(this).index();
		$(".lxr_lbsmk:eq("+num+")").addClass("lxr_displayb");
	}).mouseout(function(){
		var num = $(this).index();
		$(".lxr_lbsmk:eq("+num+")").removeClass("lxr_displayb");
	})

	//遮罩
	$(".lxr_details").css({
		"height":$('.lxr_stuwork_con').height()+"px"
	})
	$(".lxr_sw_zhezhao").css({
		"height":$(document).height()+"px"
	})

	$(".lxr_start").click(function(){
		$(".lxr_sw_zhezhao").addClass("lxr_displayb");
		$(".lxr_details").addClass("lxr_displayb");
	})
	$(".lxr_sw_zhezhao").click(function(){
		$(".lxr_sw_zhezhao").removeClass("lxr_displayb");
		$(".lxr_details").removeClass("lxr_displayb");
	})






})