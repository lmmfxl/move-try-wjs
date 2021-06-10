'use strict'

$(function () {


    function changeImage() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        $("#main_ad .carousel-inner > .item").each(function (i,element) {
                var $item = $(element);
               var data = isSmallScreen ? $item.data('xs'):$item.data('lg');
            if (isSmallScreen){
                $item.html('<img src="' + data +'"/>');
            }else {
                $item.empty();
                $item.css("backgroundImage",'url("'+ data +'")');
            }
        })

    }

    $(window).on("resize",changeImage).trigger('resize');

    $('[data-toggle="tooltip"]').tooltip();

    /*
    * 控制标签页容器宽度
    * */

    var $ulContainer = $('.nav-tabs');
    //获取所有子元素的和
    var width = 30;
    // 遍历子元素
    $ulContainer.children().each(function (i,ele) {
       width += ele.clientWidth;
    });
    if (width > ($(window).width()-30)){
        $ulContainer
            .css('width',width)
            .parent().css('overflow-x','scroll');
    }

    // a点击注册事件
    var $newTitle = $('.new-title');
    $('#news .nav-pills a').on('click',function () {
        var $this = $(this);
        var title = $this.data('title');
        $newTitle.text(title);


    })

});