
$(".hover1").hover(
  function () {
    $(".d1").slideDown(500);
  },
  function () {
    $(".d1").slideUp(500);
  }
);

$(".hover2").hover(
  function () {
    $(".d2").slideDown(500);
  },
  function () {
    $(".d2").slideUp(500);
  }
);

//Hover vao lang,currency
$("body").click(function (e) {
  e.preventDefault();
  $(".dropdown_All").hide();
  $(".search-bar-wrap").click(function (e) {
    e.preventDefault();
    e.stopPropagation();  
    $(".All").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".dropdown_All").show();
    });
    $(".down").click(function (e) {
      e.preventDefault();
      $(".dropdown_All").toggle();
    });
  });
});
// Click vao All o search bar
$(".dried").click(function (e) {
  e.preventDefault();
  $(".dropdown_Diedbeans").toggle();
});

// Click All Categories

$(".cate-menu-wrap").click(function (e) {
  e.preventDefault();
  $(".dropdown-menu-cate").toggle();
});

// Slide Owl-carousel
$(document).ready(function () {
  $(".owl-carousel.slide").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTime: 6000,
    animateIn: "fadeSlideIn",
    animateOut: "fadeOut",
  });
});

// fixedddd
$(window).scroll(function () {
  const currentPos = $(this).scrollTop();
  if (currentPos > 202) {
    $(".totop").addClass("fixed");
  } else {
    $(".totop").removeClass("fixed");
  }
});

$(window).scroll(function () {
  const currentPos = $(this).scrollTop();
  if (currentPos > 202) {
    $(".header-four").addClass("fixed");
   } 
  else {
    $(".header-four").removeClass("fixed");
  }
});

$(".totop").click(function (e) {
  e.preventDefault();
  $("body,html").animate(
    {
      scrollTop: 0,
    },
    500,
    "easeInBack"
  );
});

$(".bar").click(function (e) {
  e.preventDefault();
  $(".sidebar").animate({
    width: "toggle",
  });
});

$(".close").click(function (e) {
  e.preventDefault();
  $(".sidebar").animate({
    width: "toggle",
  });
});

// Lấy height của content-pane rồi thêm thuộc tính css vào
// if($(".content-pane").innerHeight()>447)
// {
//   // $(".content-pane").css({'max-height':'447px'},{'overflow': 'scroll'});
//   console.log("heloo")
// }
// $(".content-pane").innerHeight()







