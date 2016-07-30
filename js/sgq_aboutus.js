$(function () {
    //学院环境布局
    var sgq_img=$(".sgq-environment-con");
    var sgq_imgW=sgq_img[0].offsetWidth+20;
    $('.sgq-environment-con-box').css({width:sgq_img.length*sgq_imgW});
    $('.sgq-environment-lisbox li:last-child').css({marginRight:0});
    //学院环境结束
    // 底部荣誉布局开始
    $('.sgq-honour-img').eq(0).css({marginLeft:0});
        //轮播时要再次执行（节点轮播）
    $('.sgq-honour-img:nth-child(5n)').css({marginRight:0});
    // 底部荣誉布局结束
})