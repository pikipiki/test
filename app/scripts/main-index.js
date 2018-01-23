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

function wideAni(opt) {
    if (opt) {
        if ($("#wideExp").hasClass("animated")) {
            return;
        }
        $("#wideExp").addClass("animated");
        setTimeout(function() {
            $("#wideExp").find(".left").animate({
                marginLeft: "-100%"
            }, 800);
            $("#wideExp").find(".right").animate({
                marginLeft: "100%"
            }, 800);
            $("#wideExp").find(".i169").animate({
                opacity: 0
            }, 800);
            $("#wideExp").find(".i329").animate({
                opacity: 1
            }, 800, function() {
                $("#wideExp").removeClass("animated");
            });
        }, 50);
    } else {
        if ($("#wideExp").hasClass("animated")) {
            return;
        }
        $("#wideExp").addClass("animated");
        $("#wideExp").find(".left").animate({
            marginLeft: 0
        }, 400);
        $("#wideExp").find(".right").animate({
            marginLeft: 0
        }, 400);
        $("#wideExp").find(".i169").animate({
            opacity: 1
        }, 400);
        $("#wideExp").find(".i329").animate({
            opacity: 0
        }, 400, function() {
            $("#wideExp").removeClass("animated");
        });
    }
}

$(window).scroll(function() {
    var startV = 0;
    var endV = 0;
    var isAnimate = false;

    if ($(window).width() > $(window).height()) {
        startV = $("#wideExp").offset().top - ($(window).height() / 3);
    } else {
        startV = $("#wideExp").offset().top - ($(window).height() / 5);
    }
    endV = $("#wideExp").offset().top + $("#wideExp").height() - ($(window).height() / 3);

    if ($(window).scrollTop() > startV && $(window).scrollTop() < endV) {
        if (!isAnimate) {
            isAnimate = true;
            wideAni(true);
        }

    } else if ($(window).scrollTop() < startV - $(window).height() || $(window).scrollTop() > endV + $(window).height()) {
        isAnimate = false;
        wideAni(false);
    }
}).scroll();