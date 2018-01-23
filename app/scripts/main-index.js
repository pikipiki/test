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

  function disappearing(el, calc) {
    el.css({ 'opacity': calc });
    if (calc > '1') {
      el.css({ 'opacity': 1 });
    } else if ( calc < '0' ) {
      el.css({ 'opacity': 0 });
    }    
  }

  const elementsOnFirstSection = [
    $('.bg-dark-vader'), 
    $('.icon-video-container'),
    $('.slider'),
    $('.mouse_sc'),
    $('.slider'),
    $('.samsung-logo'),
    $('.video-title')
  ];

  const range = 200;

  $(window).on('scroll', function () {
    
    let scrollTop = $(this).scrollTop(),
        height = elementsOnFirstSection[0].outerHeight(),
        offset = height / 2,
        calc = 1 - (scrollTop - offset + range) / range;
    
      elementsOnFirstSection.forEach( (el) => {
          disappearing(el, calc)
        }
      )
        
  });


})