
$("img").lazyload();

//轮播

$(".wlh-jidi>.wlh-jidi-bannerbox>.wlh-jidi-banner").width(378*6);
function wlhMove(){
    $(".wlh-jidi>.wlh-jidi-bannerbox>.wlh-jidi-banner>.wlh-jidili").stop(true,true)
    $(".wlh-jidi>.wlh-jidi-bannerbox>.wlh-jidi-banner>.wlh-jidili").first().animate({width:0},function(){
        $(".wlh-jidi>.wlh-jidi-bannerbox>.wlh-jidi-banner>.wlh-jidili").first().appendTo(".wlh-jidi-banner");
        $(".wlh-jidi>.wlh-jidi-bannerbox>.wlh-jidi-banner>.wlh-jidili").last().css({width:284})
    });

}
var wlh_t=setInterval(wlhMove,2000);

$(".wlh-jidi").hover(function(){
    clearInterval(wlh_t)
},function(){
    wlh_t=setInterval(wlhMove,2000);
})

$(".wlh-jidi>.wlh-jidi-bannerbox>.wlh-jidi-banner>.wlh-jidili").hover(function(){
    $(this).stop(true,true)
    $(this).css({"border":"1px solid #c3c3c3"}).animate({width:358,height:454,marginTop:0})
},function(){
    $(this).stop(true,false)
    $(this).css({"border":"0"}).animate({width:284,height:408,marginTop:22})
})

$(".wlh-jidi>.wlh-banner-left").click(function(){
    $(".wlh-jidi>.wlh-jidi-bannerbox>.wlh-jidi-banner>.wlh-jidili").stop(true,true)
    $(".wlh-jidi>.wlh-jidi-bannerbox>.wlh-jidi-banner>.wlh-jidili").last().css({width:0})
    $(".wlh-jidi>.wlh-jidi-bannerbox>.wlh-jidi-banner>.wlh-jidili").last().prependTo(".wlh-jidi-banner");
    $(".wlh-jidi>.wlh-jidi-bannerbox>.wlh-jidi-banner>.wlh-jidili").first().animate({width:284});
})
$(".wlh-jidi>.wlh-banner-right").click(function(){
    wlhMove()
})



$(".wlh-jiangxue>.wlh-jiangxue-bannerbox>.wlh-jiangxue-banner").width(378*6);
function wlhMove2(){
    $(".wlh-jiangxue>.wlh-jiangxue-bannerbox>.wlh-jiangxue-banner>.wlh-jiangxueli").stop(true,true)
    $(".wlh-jiangxue>.wlh-jiangxue-bannerbox>.wlh-jiangxue-banner>.wlh-jiangxueli").first().animate({width:0},function(){
        $(".wlh-jiangxue>.wlh-jiangxue-bannerbox>.wlh-jiangxue-banner>.wlh-jiangxueli").first().appendTo(".wlh-jiangxue-banner");
        $(".wlh-jiangxue>.wlh-jiangxue-bannerbox>.wlh-jiangxue-banner>.wlh-jiangxueli").last().css({width:284})
    });

}
var wlh_t2=setInterval(wlhMove2,2000);

$(".wlh-jiangxue").hover(function(){
    clearInterval(wlh_t2)
},function(){
    wlh_t2=setInterval(wlhMove2,2000);
})

$(".wlh-jiangxue>.wlh-jiangxue-bannerbox>.wlh-jiangxue-banner>.wlh-jiangxueli").hover(function(){
    $(this).stop(true,true)
    $(this).css({"border":"1px solid #c3c3c3"}).animate({width:358,height:454,marginTop:0})
},function(){
    $(this).stop(true,false)
    $(this).css({"border":"0"}).animate({width:284,height:408,marginTop:22})
})

$(".wlh-jiangxue>.wlh-banner-left2").click(function(){
    $(".wlh-jiangxue>.wlh-jiangxue-bannerbox>.wlh-jiangxue-banner>.wlh-jiangxueli").stop(true,true)
    $(".wlh-jiangxue>.wlh-jiangxue-bannerbox>.wlh-jiangxue-banner>.wlh-jiangxueli").last().css({width:0})
    $(".wlh-jiangxue>.wlh-jiangxue-bannerbox>.wlh-jiangxue-banner>.wlh-jiangxueli").last().prependTo(".wlh-jiangxue-banner");
    $(".wlh-jiangxue>.wlh-jiangxue-bannerbox>.wlh-jiangxue-banner>.wlh-jiangxueli").first().animate({width:284});
})
$(".wlh-jiangxue>.wlh-banner-right2").click(function(){
    wlhMove2()
})

