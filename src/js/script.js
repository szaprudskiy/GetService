
$(function(){
	$('.models-slider .slider').slick({
	  infinite: true,
	  arrows: true,
	  dots: false,
	  slidesToShow: 4,
	  slidesToScroll: 1
	});	
})

$(document).ready(function() {
	$(".fancybox-thumb").fancybox({
		prevEffect	: 'none',
		nextEffect	: 'none',
		helpers : {
			media : {}
		},
		thumbs	: {
				width	: 200,
				height	: 200
			}
		
	});
	
});


