
$( window ).load(function() {
  var Body = $('body');
  Body.addClass('preloader-site');
});

$(document).ready(function() {
  $('.preloader-wrapper').addClass('none');
  $('body').removeClass('preloader-site');
});
