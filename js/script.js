$(function () {
//    captions: true
    $('.sl_models').bxSlider({
        slideWidth: 236,
        minSlides: 2,
        maxSlides: 4,
        slideMargin: 18,
        nextSelector: '.slider-next',
        prevSelector: '.slider-prev'
    });
    $('.sl_trust').bxSlider({
        slideWidth: 120,
        minSlides: 2,
        maxSlides: 5,
        slideMargin: 7,
        nextSelector: '.slider-next-trust',
        prevSelector: '.slider-prev-trust'
    });
    $('.sl_responses').bxSlider({
        slideWidth: 340,
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 0,
        nextSelector: '.slider-next-responses',
        prevSelector: '.slider-prev-responses'
    });

    $('.scrollbar').perfectScrollbar();

    var accordionItems = $('#collapseOne, #collapseTwo');
    $(accordionItems).on('shown', function () {
        $(this).prev().addClass('active');
    });
    $(accordionItems).on('hidden', function () {
        $(this).prev().removeClass('active');
    });

    var top = $('.to_top');

    top.on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $(window).on('scroll', function () {
        var scrolledY = $(this).scrollTop();

        var boxes = $('.history_box').find('.history_item');
        if (scrolledY >  800 < 1200) {

            boxes.each(function (i, item) {
                setTimeout(function () {
                    $(item).addClass('animated zoomIn')
                }, 1000)
            });
        }
    });

    $('.history_item').on('mouseover', function () {
        $('.history_item').removeClass('animated bounce zoomIn');
        $(this).addClass('animated bounce')
    });
    $('.cows').on('mouseover', function () {
        $(this).addClass('animated tada')
    });
    $('.cows').on('mouseleave', function () {
        $(this).removeClass('animated tada');
    });

    $('.slogan_slider').fractionSlider({
        'fullWidth': 			false,
        'controls': 			true,
        'pager': 				true,
        'responsive':  			true,
        'dimensions':  			'1000,400'
    });
});