$(document).ready(function() {

  $('.slider').slick({
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1500,
    adaptiveHeight: true
  })

  $('.icon-video').magnificPopup({
    type: 'iframe'
  })

  var header = $('.bg-dark-vader');
  var range = 200;

  $(window).on('scroll', function () {
    
    var scrollTop = $(this).scrollTop(),
        height = header.outerHeight(),
        offset = height / 2,
        calc = 1 - (scrollTop - offset + range) / range;

    header.css({ 'opacity': calc });

    if (calc > '1') {
      header.css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
      header.css({ 'opacity': 0 });
    }
    
  });


})