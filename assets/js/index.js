/*
    * slider
    */


$('.logo-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 1391,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
      }
    },
  ]

});

/*
    * popup
    */

$(document).ready(function () {
  $('#open').click(function () {
    $('.model-container').css('transform', 'scale(1)')
  });
  $('#close').click(function () {
    $('.model-container').css('transform', 'scale(0)')
  });

});

/*
    * card
    */

$(function () {


  $("button").on("click", function () {
    $(this).parent().find(".product_overlay").css({
      'transform': ' translateY(0px)',
      'opacity': '1',
      'transition': 'all ease-in-out .45s'
    }).delay(1500).queue(function () {    //delay=wait 1.5 sec
      $(this).css({
        'transform': 'translateY(-500px)',
        'opacity': '0',
        'transition': 'all ease-in-out .45s'  
      }).dequeue();                         //A method that executes the first process in the queue
    });
  });

});