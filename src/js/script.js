
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
	

	
	var burgerItem = $(".burger__upper, .burger__mid, .burger__lower");
	var menu = $(".mobile-menu");


	burgerItem.on("click", function(){
		menu.fadeToggle();
		burgerItem.toggleClass('cliked');	
	})
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
	$(".main-1__mobile-slick").slick({
		 responsive: [
    {
      	breakpoint: 743,
      	settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true
      }
    }
  ]
	});
	$('.mob-tel, .tablet').click(function(e){
		e.preventDefault();
		$('#main-mob-menu').hide();
		$('#mob-brands').show();
	});
	$('.brand-menu__title a').click(function(e){
		e.preventDefault();
		$('#main-mob-menu').show();
		$('#mob-brands').hide();
	});
	$('#iphone').click(function(e){
		e.preventDefault();
		$('#main-mob-menu').hide();
		$('#mob-brands').hide();
		$('#mob-models').show();
	});
	$('.model-menu__title').click(function(e){
		e.preventDefault();
		$('#mob-brands').show();
		$('#mob-models').hide();
	});
	
});


	

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
	$(".main-1__mobile-slick").slick({
		 responsive: [
    {
      	breakpoint: 743,
      	settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true
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
	



	$(function(){
		var burgerItem = $(".burger__upper, .burger__mid, .burger__lower");
 		var menu = $(".mobile-menu");
 		var burger = $('.burger');

	 	burger.on("click", function(){
	  	menu.fadeToggle();
	  	burgerItem.toggleClass('cliked'); 
 		})	
	});
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
	
	
	



