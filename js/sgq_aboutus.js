$(function () {
    $("img").lazyload();
    //学院环境布局
    // var sgq_img=$(".sgq-environment-con");
    // var sgq_imgW=sgq_img[0].offsetWidth+20;
    // $('.sgq-environment-con-box').css({width:sgq_img.length*sgq_imgW});
    // $('.sgq-environment-lisbox li:last-child').css({marginRight:0});

    //轮播
    var sgq_mySwiper1 = new Swiper('.sgq-environment-con-scene',{
        loop : true,//可选选项，开启循环
        slidesPerView : 2,
        autoplay : 5000,//可选选项，自动滑动
        pagination : '.sgq-tv-pagination',
        paginationClickable :true,
    });
    $('.sgq-environment-con-box').css({transform: "translate3d(-1280px, 0px, 0px)"});

    $('.sgq-environment-left').click(function(){
        sgq_mySwiper1.swipePrev();
    })
    $('.sgq-environment-right').click(function(){
        sgq_mySwiper1.swipeNext();
    })
    //学院环境结束

    //电视中轮播
    var sgq_tv=$('.sgq-tv').css({cursor:"pointer"});
    var sgq_tv_img= sgq_tv.children("img");
    var sgq_tv_now=0;
    var sgq_tv_num=sgq_tv_img.length-1;
    sgqtv();
    var sgq_tv_t=setInterval(sgqtv,5000);
    function sgqtv() {
        $(sgq_tv_img[sgq_tv_now]).animate({opacity:0},1000);
        if( sgq_tv_now>=sgq_tv_num){
            sgq_tv_now=0;
        }else{
            sgq_tv_now++;
        }
        $(sgq_tv_img[sgq_tv_now]).animate({opacity:1},1000);

    }
    sgq_tv.hover(function () {
        clearInterval(sgq_tv_t);
    },function () {
        sgq_tv_t=setInterval(sgqtv,5000);
    });

    //

    // 底部荣誉布局开始
    $('.sgq-honour-img').eq(0).css({marginLeft:0});
        //轮播时要再次执行（节点轮播）
    // $('.sgq-honour-img:nth-child(5n)').css({marginRight:0});
    // var sgq_honour_img=$(".sgq-honour-img");
    // var sgq_honour_imgW=sgq_honour_img[0].offsetWidth+72;
    // $('.sgq-honour-img-box').css({width:(sgq_honour_img.length*sgq_honour_imgW-72)});
    
    var sgq_honour_mySwiper = new Swiper('.sgq-honour-img-scene',{
        autoplay : 5000,//可选选项，自动滑动
        loop : true,//可选选项，开启循环
        slidesPerView : 5,
    })
    $('.sgq-honour-left').click(function(){
        sgq_honour_mySwiper.swipePrev();
    })
    $('.sgq-honour-right').click(function(){
        sgq_honour_mySwiper.swipeNext();
    })
    
    
    
    
    // 底部荣誉布局结束
})