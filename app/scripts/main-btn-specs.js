let specsOpen = false;

$(document).ready(function() {
  $('.btn-wrap').bind('click', function(evt) {
    evt.preventDefault();
    if (specsOpen == false) {
      $('.shop-specifications .specs .conteneur-volet').css('max-height', '6000px');
      $('.shop-specifications .specs .show_btn').addClass('masque');
      $('.shop-specifications .specs .show_btn .action').html('Masquer ');
      $('.fa.fa-chevron-down').hide();
      $('.fa.fa-chevron-up').show();
      specsOpen = true;
    } else {
      $('.shop-specifications .specs .conteneur-volet').css('max-height', '0');
      $('.shop-specifications .specs .show_btn').removeClass('masque');
      $('.shop-specifications .specs .show_btn .action').html('Afficher ');
      $('.fa.fa-chevron-down').show();
      $('.fa.fa-chevron-up').hide();


      specsOpen = false;
    }
  });
});

function submitRequest(buttonId) {
  if (document.getElementById(buttonId) == null || document.getElementById(buttonId) == undefined) {
    return;
  }
  if (document.getElementById(buttonId).dispatchEvent) {
    const e = document.createEvent("MouseEvents");
    e.initEvent("click", true, true);
    e.preventDefault();
    document.getElementById(buttonId).dispatchEvent(e);
  } else {
    document.getElementById(buttonId).click();
  }
}

let tagName = '30sec';

setTimeout(function() {
  tagName = '30sec';
  $('#tracker').attr('data-omni', 'vd mkt page_the frame:timer:' + tagName + '');
  submitRequest('tracker');
}, 30000);

setTimeout(function() {
  tagName = '60sec';
  $('#tracker').attr('data-omni', 'vd mkt page_the frame:timer:' + tagName + '');
  submitRequest('tracker');
}, 60000);

setTimeout(function() {
  tagName = '120sec';
  $('#tracker').attr('data-omni', 'vd mkt page_the frame:timer:' + tagName + '');
  submitRequest('tracker');
}, 120000);

setTimeout(function() {
  tagName = '180sec';
  $('#tracker').attr('data-omni', 'vd mkt page_the frame:timer:' + tagName + '');
  submitRequest('tracker');
}, 180000);
