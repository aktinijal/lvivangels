$(document).ready(function () {

    //Меню навігації
    var touch = $('#touch-menu');
    var menu = $('.site-nav');

    $(touch).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });
    $(window).resize(function () {
        var width = $(window).width();
        if (width > 760 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    //Слайдер
    function slider() {
        if ($("#slider ul li").hasClass("slide-active")) {
            if ($("#slider ul li.slide-active").is("#slider ul li:last")) {
                $(".slide-active").fadeOut(2000);
                $(".slide-active").removeClass("slide-active");
                $("#slider ul li:first").addClass("slide-active");
                $(".slide-active").fadeIn(2000);
            } else {
                $(".slide-active").fadeOut(2000);
                $(".slide-active").next().addClass("slide-active");
                $(".slide-active:first").removeClass("slide-active");
                $(".slide-active").fadeIn(2000);
            }
        } else {
            $("#slider ul li:first").addClass("slide-active").show();
        }
        setTimeout(slider, 10000);
    }
    slider();

    //Висота
    function sliderHeight() {
        var slideHeight = $(".slide-active").height();
        $("#slider").height(slideHeight);
        setTimeout(sliderHeight, 0);
    }
    sliderHeight();


    //Анімаційний рух по сайту
    $('a[href*=#]').bind("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 120
        }, 1000);
        e.preventDefault();
    });

    //Новини
    $(".news-item").click(function () {
        $(this).find(".news-open").slideToggle();
        if ($(this).hasClass("activeNews")) {
            $(".activeNews").removeClass("activeNews");
        } else {
            $(this).addClass("activeNews");
        }
    })

    //Галерея
    $(".photo").click(function () {
        $(this).addClass("current-photo")
        var galleryContent = $(".current-photo").html();
        var openPhotoContent = $(".open-photo").html();
        $(".open-photo").html(galleryContent);
        $("#gallery-content").show();

    })

    $(".photo-right").click(function () {
        if ($(".current-photo").is(".photo:last")) {
            $(".photo:first").addClass("current-photo");
            $(".photo:last").removeClass("current-photo");
        } else {
            $(".current-photo").next().addClass("current-photo");
            $(".current-photo:first").removeClass("current-photo");
        }
        var galleryContent = $(".current-photo").html();
        $(".open-photo").html(galleryContent);
    })
    $(".photo-left").click(function () {
        if ($(".current-photo").is(".photo:first")) {
            $(".photo:last").addClass("current-photo");
            $(".photo:first").removeClass("current-photo");
        } else {
            $(".current-photo").prev().addClass("current-photo");
            $(".current-photo:last").removeClass("current-photo");
        }
        var galleryContent = $(".current-photo").html();
        $(".open-photo").html(galleryContent);
    })

    $(".photo-wrap").not(".open-photo").click(function () {
        $("#gallery-content").hide();
        $(".current-photo").removeClass("current-photo");
    })

    function buttonsMarg() {
        var htmlWidth = $("html").width() - 605;
        if (htmlWidth > 0) {
            var photoMarg = htmlWidth / 2;

        } else {
            var photoMarg = 0;
        }
        var buttonsHeight = $(".open-photo").height();
        $(".photo-right").css({
            "margin-right": photoMarg
        });
        $(".photo-right").css({
            "height": buttonsHeight
        });
        $(".photo-left").css({
            "margin-left": photoMarg
        });
        $(".photo-left").css({
            "height": buttonsHeight
        });

        setTimeout(buttonsMarg, 0);
        //console.log(some);
    }
    buttonsMarg();

    function galleryPadding() {
        var htmlWidth = $("html").width();
        if (htmlWidth <= 768) {
            $("#gallery-content").css({
                "padding-top": "50%"
            });
        } else {
            $("#gallery-content").css({
                "padding-top": "120px"
            });
        }
        setTimeout(galleryPadding, 0)
    }
    galleryPadding();




    //Інформація
    //Відкриття історії в залежності від ширини екрану
    if ($("html").width() < 975) {
        $("#federation-content > div:first-child").addClass("activeInfo")
        $(".activeInfo").find(".info-open").show();
    } else {
        $("#federation-content > div:first-child").addClass("active")
        var infoContent = $(".active").find(".info-open").html();
        $("#info-content").html(infoContent).show();
    }
    //Івент клік для закриття/відкриття інформації
    $(".info-item").click(function () {
            if ($("html").width() < 975) {
                $(this).find(".info-open").slideToggle();
                if ($(this).hasClass("activeInfo")) {
                    $(".activeInfo").removeClass("activeInfo");
                } else {
                    $(this).addClass("activeInfo");
                }
            } else {
                if ($(this).hasClass("active")) {
                    $(".active").removeClass("active");
                    $("#info-content").hide();
                } else {
                    var infoContent = $(this).find(".info-open").html();
                    $(".active").removeClass("active");
                    $(this).addClass("active");
                    $("#info-content").html(infoContent).show();
                }
            }
        })
        //Автоматичне закриття інформаціі при зменьшенні/збільшенні ширини екрану
    function lookWidthForInf() {
        var htmlWidth = $("html").width();
        if (htmlWidth < 975) {
            $(".active").removeClass("active");
            $("#info-content").hide();
        } else {
            $(".activeInfo").find(".info-open").hide();
            $(".activeInfo").removeClass("activeInfo");
        }

        setTimeout(lookWidthForInf, 0);
        //console.log(some);
    }
    lookWidthForInf();


    $('.slick').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
        },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
        },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
        }
      ]
    });
    
    
    return false;
});