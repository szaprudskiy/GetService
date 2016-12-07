$('.rotor').slick({
 	dots: true,
  	infinite: true,
  	arrows: false,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

$('.slick-dots li:nth-child(1) button').click(function(){
	$('.slick-dots li:nth-child(1) button').addClass('slick-btn-active1');
	$('.slick-dots li button').removeClass('slick-btn-active2 slick-btn-active3 slick-btn-active4')
});
$('.slick-dots li:nth-child(2) button').click(function(){
	$('.slick-dots li:nth-child(2) button').addClass('slick-btn-active2');
	$('.slick-dots li button').removeClass('slick-btn-active1 slick-btn-active3 slick-btn-active4');
});
$('.slick-dots li:nth-child(3) button').click(function(){
	$('.slick-dots li:nth-child(3) button').addClass('slick-btn-active3');
	$('.slick-dots li button').removeClass('slick-btn-active2 slick-btn-active1 slick-btn-active4');
});
$('.slick-dots li:nth-child(4) button').click(function(){
	$('.slick-dots li:nth-child(4) button').addClass('slick-btn-active4');
	$('.slick-dots li button').removeClass('slick-btn-active2 slick-btn-active3 slick-btn-active1');
});

$('.arrow-down').click(function(){
	 $('body,html').animate({scrollTop: 1400}, 800);
});