$(function () {
		//学生照片轮播
	var lxrSwiper = new Swiper('.lxr_stuph_lunbo', {
    loop: true,
    grabCursor : true,
    slidesPerView: 5,
    pagination: '.lxr_stuph_lbdian',
    paginationClickable: true,
    autoplayDisableOnInteraction : false,
   	prevButton:'.lxr_stph_left',
		nextButton:'.lxr_stph_right',
    autoplay:3000
  })

  $('.lxr_stph_left').on('click', function(e){
		lxrSwiper.swipePrev()
	})
	$('.lxr_stph_right').on('click', function(e){
		lxrSwiper.swipeNext()
	})

	// 学生作品轮播
	var lxrSwiper2 = new Swiper ('.lxr_xlb_tao',{
    grabCursor : true,
    slidesPerView: 4,
    pagination: '.lxr_stuwk_lbdian',
    paginationClickable: true,
    autoplayDisableOnInteraction : false,
    prevButton:'.lxr_xlb_left',
    nextButton:'.lxr_xlb_right',
    autoplay:3000
	})

	$('.lxr_xlb_left').on('click', function(e){
		lxrSwiper2.swipePrev()
	})
	$('.lxr_xlb_right').on('click', function(e){
		lxrSwiper2.swipeNext()
	})

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
	$(".lxr_span5").click(function(){
		var index = $(this).parents(".lxr_start").index();

		$(".lxr_sw_zhezhao").addClass("lxr_displayb");
		$(".lxr_details:eq("+index+")").addClass("lxr_displayb");
	})
	$(".lxr_sw_zhezhao").click(function(){
		$(".lxr_sw_zhezhao").removeClass("lxr_displayb");
		$(".lxr_details").removeClass("lxr_displayb");
	})
})