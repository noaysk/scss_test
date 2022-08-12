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
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 467,
          settings: {
            slidesToShow: 2,
          }
        }
      ]
});
