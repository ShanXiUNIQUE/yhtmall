//就业流程
var jobList = $('.hnz-job-one');
jobList.eq(0).addClass('iup').css({top:200,left:0})
jobList.eq(1).addClass('idown').css({top:-20,left:300})
jobList.eq(2).addClass('idown').css({top:60,left:600})
jobList.eq(3).addClass('iup').css({top:230,left:900})
jobList.eq(4).addClass('iup').css({top:490,left:678})
jobList.eq(5).addClass('iup').css({top:413,left:350})

//名企列表
var mySwiper = new Swiper('.hnz-company',{
	loop:true,
	grabCursor: true,
	})
	$('.hnz-btn div').mousedown(function(e){
		e.preventDefault()
	})
	$('.hnz-l').on('click', function(e){
		mySwiper.swipePrev()
	})
	$('.hnz-r').on('click', function(e){
		mySwiper.swipeNext()
	})

	//认证机构
	var mySwiper2 = new Swiper('.hnz-attestation-list',{
		loop:true,
		grabCursor: true,
		})
		$('.hnz-attestation-l,hnz-attestation-r').mousedown(function(e){
			e.preventDefault()
		})
		$('.hnz-attestation-l').on('click', function(e){
			mySwiper2.swipePrev()
		})
		$('.hnz-attestation-r').on('click', function(e){
			mySwiper2.swipeNext()
		})
	var personList = new Swiper('.hnz-person-list',{
		loop:true,
		grabCursor: true,
		pagination: '.pagination',
		paginationClickable: true,
		slidesPerView: 5,
		autoplay:2000
	})
