
$(function(){
	$('.models-slider .slider').slick({
	  infinite: true,
	  arrows: true,
	  dots: false,
	  slidesToShow: 4,
	  slidesToScroll: 1,
	  responsive: [
    {
      breakpoint: 743,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
	});	
	
	$(".burger__item").click(function(){
		$(".mobile-menu").fadeToggle();

	})
	$(".main-2__slider, .main-break__slider").slick({
		 responsive: [
    {
      	breakpoint: 743,
      	settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        infinite: true
      }
    }
  ]
	})
})

$(document).ready(function() {
/*	$('.fancybox-thumb').click(function(){
		$(' main').addClass('blur');
		console.log('hello');
	});*/

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


	
	var width = 300;
	var currentSlide = 1;


	var $slider = $('.popup-slider__container');
	var $slideContainer = $slider.find('.popup-slider');
	var $slides = $slideContainer.find('.fancybox-thumb');
	var $slideToShow = 3;
	var realSlideLength = $slides.length - $slideToShow -1;

	$('.popup-slider__next ').click(function(e){
		e.preventDefault();
		currentSlide++;
		if(currentSlide === $slides.length - $slideToShow){
			currentSlide = 1;
			$slideContainer.animate({'margin-left': 0}, 1000);
		}
		else{
			$slideContainer.animate({'margin-left': '-='+width}, 500,)
		}
	});
	var prevSlide = realSlideLength * width;
	$('.popup-slider__prev').click(function(e){
		e.preventDefault();
		currentSlide--;
		if(currentSlide === 0){	
			currentSlide = realSlideLength;
			$slideContainer.animate({'margin-left': -prevSlide}, 1000);
		}
		else{
			$slideContainer.animate({'margin-left': '+='+width}, 500)
		}
	});	


	
});
	
	
	



