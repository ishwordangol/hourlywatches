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
  dots: true,
  centerMode: true,
  centerPadding: '0px',
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: $('.prev-arrow'),
  nextArrow: $('.next-arrow'),
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        centerPadding: '80px',
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerPadding: '80px',
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        infinite: true,
        centerPadding: '80px',
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerPadding: '80px',
      }
    }
  ]
});

$("#featuredwatchSlider, #featuredbrandSlider, #newarrivalSlider").slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1000,
  arrows: true,
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


// search toggle

function goToSearchtPage() {
  window.location.href = "search.html"; // Change the URL to your desired next page
}
function checkScreenWidth() {
  if ($(window).width() >= 768) {
    $('.searchbtn').click(function (e) {
      e.stopPropagation();
      $('.searchbox').slideToggle();
    });
    $(document).click(function (e) {
      if (!$(e.target).closest(".searchbox, .searchbtn").length) {
        $(".searchbox").slideUp();
      }
    });
  } else {
    // Remove the code for screens larger than 768px width
    $(".searchbtn").off("click");
    $(document).off("click");
  }
}

$(document).ready(function () {
  checkScreenWidth();

  $(window).resize(function () {
    checkScreenWidth();
  });
});

// currency exchange toggle

$('.btn-currency-change').click(function () {
  $('.currency-block').slideToggle().show();
});
$(document).click(function (e) {
  if (!$(e.target).closest(".currency-block, .btn-currency-change").length) {
    $(".currency-block").slideUp();
  }
});

// show menu

function showDiv() {
  document.getElementsByClassName("nav-menu").style.display = "block";
}

// Set a delay of 3000 milliseconds (3 seconds) before showing the div
setTimeout(showDiv, 3000);

