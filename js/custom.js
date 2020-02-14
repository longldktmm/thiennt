new WOW().init();

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

$(".slide-home").owlCarousel({
  dots:true,
  loop:true,
  nav:false,
  navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>",
  "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
  margin:0,
  autoplay:true,
  responsiveClass:true,
  responsive:{
    0:{
      items:1,
    },
    767:{
      items:1,
    },
    1366:{
      items:1,
    }
  }
});

$(".patner-slide").owlCarousel({
  dots:false,
  loop:false,
  nav:true,
  navText: ["<i class='fa fa-angle-left' aria-hidden='true'></i>",
  "<i class='fa fa-angle-right' aria-hidden='true'></i>"],
  margin:20,
  autoplay:true,
  responsiveClass:true,
  responsive:{
    0:{
      items:2,
    },
    767:{
      items:3,
    },
    1366:{
      items:5,
    }
  }
});


$(function () {
    var num = 100;  
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {   
            $('.logo').addClass('fixed');
        }
        else
        {
            $('.logo').removeClass('fixed');
        }
    });
 });