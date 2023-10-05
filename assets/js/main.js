$(window).scroll(function () {
  var sticky = $(".header_main"),
    scroll = $(window).scrollTop();

  if (scroll >= 150)
    sticky.addClass("header-fixed border-b animate__animated animate__fadeInDown");
  else sticky.removeClass("header-fixed border-b animate__animated animate__fadeInDown");
});

$(".mainslider").slick({
  arrows: false,
  autoplay: true,
  dots: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: false,
        arrows: false,
        infinite: false,
      },
    },
  ],
});

var $slider = $('#exploreSlider');

$slider.slick({
  autoplay: false,
  dots: false,
  centerMode: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.prev-arrow'),
  nextArrow: $('.next-arrow'),
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});

$("#featuredwatchSlider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  arrows: true,
  prevArrow:
    '<button  aria-label="Previous"><i class="icon-prev"></i></button>',
  nextArrow: '<button  aria-label="Next"><i class="icon-next"></i></button>',
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

$("#featuredbrandSlider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  arrows: true,
  prevArrow:
    '<button  aria-label="Previous"><i class="icon-prev"></i></button>',
  nextArrow: '<button  aria-label="Next"><i class="icon-next"></i></button>',
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});

$("#newarrivalSlider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  arrows: true,
  prevArrow:
    '<button  aria-label="Previous"><i class="icon-prev"></i></button>',
  nextArrow: '<button  aria-label="Next"><i class="icon-next"></i></button>',
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});