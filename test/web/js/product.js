require(["jquery", "slick"], function($) {
    $(".pro").slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
    });
});