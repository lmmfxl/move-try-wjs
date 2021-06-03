'use strict'

$(function () {


    function changeImage() {
        var windowWidth = $(window).width();
        console.log(windowWidth);
        var isSmallScreen = windowWidth < 768;
        $("#main_ad .carousel-inner > .item").each(function (i,element) {
                var $item = $(element);
               var data = isSmallScreen ? $item.data('xs'):$item.data('lg');
               // $item.css("backgroundImage",'url("'+ data +'")');
            if (isSmallScreen){
                console.log(data);
                $item.html('<img src="' + data +'"/>');
            }else {
                $item.empty();
                $item.css("backgroundImage",'url("'+ data +'")');
            }
        })

    }

    $(window).on("resize",changeImage).trigger('resize');




});