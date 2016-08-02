/**
 * Created by lixing on 2016/7/31.
 */
$(function(){
    //轮播
    var mySwiper = new Swiper('.lx_bannerBox',{
        pagination: '.pagination',
        loop:true,
        grabCursor: true,
        paginationClickable: true,
        autoplay:2000,
        speed:500
    })
    //我们就业了
    var mySwiper1 = new Swiper('.lx_emBannerbox',{
        pagination: '.lx_embtn',
        loop:true,
        grabCursor: true,
        paginationClickable: true,
        autoplay:2000,
        speed:1000
    })

    $('.lx_btnL').on('click', function(e){
        e.preventDefault()
        mySwiper1.swipePrev()
    })
    $('.lx_btnR').on('click', function(e){
        e.preventDefault()
        mySwiper1.swipeNext()
    })

    //电视
    var mySwiper2 = new Swiper('.lx_tvShow',{
        pagination: '.lx_tvBtn',
        loop:true,
        grabCursor: true,
        paginationClickable: true,
        autoplay:2000,
        speed:1000
    })

    //公司环境
    var mySwiper3 = new Swiper('.lx_proBox',{
        loop:true,
        grabCursor: true,
        paginationClickable: true,
        autoplay:2000,
        speed:1000
    })
    $('.lx_btnL').on('click', function(e){
        e.preventDefault()
        mySwiper3.swipePrev()
    })
    $('.lx_btnR').on('click', function(e){
        e.preventDefault()
        mySwiper3.swipeNext()
    })
    // 教师团队
    var mySwiper4 = new Swiper('.lx_teacTeam',{
        grabCursor: true,
        paginationClickable: true,
        speed:1000
    })
    $('.lx_btnL').on('click', function(e){
        e.preventDefault()
        mySwiper4.swipePrev()
    })
    $('.lx_btnR').on('click', function(e){
        e.preventDefault()
        mySwiper4.swipeNext()
    })

    //底部合作公司
    var mySwiper5 = new Swiper('.lx_coopCon',{
        loop:true,
        grabCursor: true,
        paginationClickable: true,
        autoplay:2000,
        speed:1000
    })
    $('.lx_dirBtn .lx_btnL').on('click', function(e){
        e.preventDefault()
        mySwiper5.swipePrev()
    })
    $('.lx_dirBtn .lx_btnR').on('click', function(e){
        e.preventDefault()
        mySwiper5.swipeNext()
    })

})