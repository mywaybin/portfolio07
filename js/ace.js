$(function () {

    // top banner
    $('.top_banner i').on('click', function () {
        $('.top_banner').addClass('on');
    });

    // mainSlide  

    $('.main_slide').on('init afterChange', function (e, s, c) {
        // c = 0,1,2
        var current = $('.main_slide .slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.mainVisual .main_slide_num span').text(c ? (c + 1) : 1);
        $('.mainVisual .main_slide_num strong').text(s.slideCount);
        $('.mainVisual .main_slide_dots li').removeClass('on');
        $('.mainVisual .main_slide_dots li').eq(c ? c : 0).addClass('on');

        $('.mainVisual .main_slide_pic').css({ background: 'url(../img/lesedilarona0' + (c ? (c + 1) : 1) + '.jpg) no-repeat center center/cover' })
    });

    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        dots: false,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.mainVisual .main_slide_arrows button:first-child').on('click', function () {
        $('.main_slide').slick('slickPrev')
    });
    $('.mainVisual  .main_slide_arrows button:last-child').on('click', function () {
        $('.main_slide').slick('slickNext')
    });

    $('.mainVisual .main_slide_play button:first-child').on('click', function () {
        $('.main_slide').slick('slickPlay')
    });
    $('.mainVisual  .main_slide_play button:last-child').on('click', function () {
        $('.main_slide').slick('slickPause')
    });

    $('.mainPromotion .promotion_play button:first-child').on('click', function () {
        $('.mainPromotion video').trigger('play');
    });
    $('.mainPromotion .promotion_play button:last-child').on('click', function () {
        $('.mainPromotion video').trigger('pause');
    });


    $('.mainVisual .main_slide_dots button').on('click', function () {
        var idx = $(this).parent().index();
        $('.main_slide').slick('slickGoTo', idx);
    });

    $('.mainVisual .main_slide_dots li').on('click', function () {
        // var idx = $(this).index(); // 0 , 1 , 2;
        // eq(0) = nth-child(1);
        $('.mainVisual .main_slide_dots li').removeClass('on');
        $(this).addClass('on');
    })




    $(function () {


        var bgColor = ['#fdd156', '#90d661', '#20b1eb'];
        $('.Art .inner').css({ background: bgColor[0] });


        $('.right_slide').on('init afterChange', function (e, s, c) {
            console.log(c);
            $('.Art .left_tab .itm').eq(c).addClass('on').siblings().removeClass('on');

            $('.Art .inner').css({ background: bgColor[c] });
            $('.num').text((c ? c + 1 : 1) + ' / ' + bgColor.length);
        });

        $('.right_slide').slick({
            slidesToShow: 2,
            arrows: false,
            autoplay: true,
        });

        $('.arrows i:nth-child(1)').on('click', function () {
            $('.right_slide').slick('slickPrev')
        });
        $('.arrows i:nth-child(2)').on('click', function () {
            $('.right_slide').slick('slickNext')
        });
    })




});