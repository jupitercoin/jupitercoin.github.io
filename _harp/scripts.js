$(document).ready(function() {
  new WOW().init();

  $(window).scroll(function() {
    if ($(window).scrollTop() > window.innerHeight) {
      if (!$('.navbar-custom').hasClass('scrolled')) {
        $('.navbar-custom').addClass('scrolled');
      }
    } else {
      if ($('.navbar-custom').hasClass('scrolled')) {
        $('.navbar-custom').removeClass('scrolled');
      }
    }
  });
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
