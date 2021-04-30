$(function () {
  // STICKY MENU JS HERE
  $(window).scroll(function () {
    var scrollAmount = $(window).scrollTop();

    if (scrollAmount > 30) {
      $(".main_menu").addClass("sticky");
    } else {
      $(".main_menu").removeClass("sticky");
    }
  });

  //   ABOUT COUNTER JS HERE
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // TESTIMONAL SLIDER OWL JS HERE
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
        autoplay:true,
        autoplaySpeed:1500,
        autoplayTimeout:3000
      }
    }
  })















});