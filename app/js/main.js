$(function(){

    var mixer = mixitup('.works__items', {
        selectors: {
            target: '.works__item'
        },
        animation: {
            effects: 'fade translateZ(-100px)'
        }
    });

    $(document).ready(function() {
        $('.header__content-video').magnificPopup({
            disableOn: 300,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });

    $('.header__search-btn').on('click', function () {
        $('.search_bar').slideToggle();
    })

    $('.header__menu_btn').on('click', function () {
        $('.menu__list').slideToggle();
    })

    $('.services__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
    });
});