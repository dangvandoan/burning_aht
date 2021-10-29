require([
    'jquery',
    'slick',
    'domReady!'
], function($) {
    $(".main-banner").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});