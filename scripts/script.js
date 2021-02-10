$(document).ready(function() {
    $('.single-item').slick({
        arrows: true,
        dots: true,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
    });
    $('.multiple-items').slick({
        infinite: true,
        arrows: true,
        prevArrow: '<i class="fas fa-chevron-left"></i>',
        nextArrow: '<i class="fas fa-chevron-right"></i>',
        slidesToShow: 3,
        slidesToScroll: 1
    });
});