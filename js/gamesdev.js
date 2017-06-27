$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: true,
    asNavFor: '.slider-nav'
    });
  $(".slider-nav").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slider',
    dots: true,
    focusOnSelect: true,
    centerMode: true,
    centerOffset: true
    });
  });
