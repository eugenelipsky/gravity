$(function () {

    $(document).ready(function () {
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
        responsive: [{
            breakpoint: 970,
            settings: {
                slidesToShow: 1,
                variableWidth: false,
            }
        }]
    });
    $('.testimonials__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1
    });


    var mixer = document.querySelector(".works__items");
    if (mixer) {
        mixer = mixitup('.works__items');
    };

});