AOS.init();

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$(".navbar i").click(function(){
  var $nav = $(".navbar");
  $nav.toggleClass('toggled');
});

$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
  
  var $nav = $(".navbar");
  $nav.toggleClass('toggled');

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top
	}, 700, 'swing');
});