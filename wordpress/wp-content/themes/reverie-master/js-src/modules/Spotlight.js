module.exports =  makeSpotlight = function(el,spotlightVideos){
	var desktopSlick =  el.find('.spotlight-slick-desktop');
	var mobileSlickImage =  el.find('.spotlight-slick-mobile-image');
	var mobileSlickCopy =  el.find('.spotlight-slick-mobile-copy');
   desktopSlick.on('init',function(){
  	            
  });
   var lock = false;
var desktopNext = desktopSlick.parent().find('.spotlight-slick-next');
var desktopPrev =  desktopSlick.parent().find('.spotlight-slick-prev');
var tweens = [];
 desktopSlick.slick({
        centerMode: true,
        centerPadding: '40px',
        arrows: true,
        dots: true,
        slidesToShow: 1,
        fade:true,
        transition:1000,
        speed:0,
        waitForAnimate:true,
        autoplay:true,
        autoplaySpeed:3000,
        nextArrow:desktopNext,
        prevArrow:desktopPrev,
      

    });
 	var stopSlider = function(slickEl) {
  		slick = slickEl.slick('getSlick');
  		slick.slickSetOption("autoplay", false, false);
  		slick.autoPlay = $.noop;
  		
	};

  desktopNext.on('click',function(){stopSlider(desktopSlick);});
  desktopPrev.on('click',function(){stopSlider(desktopSlick);});
	desktopSlick.on('click',function(){stopSlider(desktopSlick);});

	desktopSlick.on('swipe',function(){stopSlider(desktopSlick);});
	mobileSlickImage.on('click',function(){stopSlider(mobileSlickImage);});
	mobileSlickImage.on('swipe',function(){stopSlider(mobileSlickImage);});
	mobileSlickCopy.on('click',function(){stopSlider(mobileSlickImage);});
	mobileSlickCopy.on('swipe',function(){stopSlider(mobileSlickImage);});

	function resetPosition(image,el,opacity){
		TweenMax.set(image,{x:0});
		TweenMax.set(el,{opacity:opacity});
		lock = false;
	} 
	function overrideOpacity(el,opacity){
		
		el[0].style.opacity = 1;
	}
	function resetAllSlides(){
		desktopSlick.find('.slick-slide .spotlight-image-holder>img').css({left:0,transform:'none'});
	} 
  	desktopSlick.on('beforeChange', function(event, slick, currentSlide, nextSlide){
      
  		tweens.forEach(function(tween){
        
        tween.kill(false);
      });
      tweens = [];
  		resetAllSlides();
  		spotlightVideos.forEach(function(spotlightVideo){
  		
  			spotlightVideo.stopVideo();
  		});
  		maxSlideIndex = slick.slideCount-1;


  		var currentSlideEl = desktopSlick.find('.slick-slide[data-slick-index='+ currentSlide+']');
  		var nextSlideEl = desktopSlick.find('.slick-slide[data-slick-index='+nextSlide+']');
  		
  		var currentSlideImage = currentSlideEl.find('.slideable-image');
  		var nextSlideImage = nextSlideEl.find('.slideable-image');
  		var currentSlideCopy = currentSlideEl.find('.spotlight-copy-holder');
  		var nextSlideCopy = nextSlideEl.find('.spotlight-copy-holder');
  		tweens.push(TweenMax.set(nextSlideCopy,{opacity:0}));
  		if((currentSlide < nextSlide ||
  			 (currentSlide === maxSlideIndex && nextSlide === 0)) &&
  			 !(currentSlide === 0 && nextSlide === maxSlideIndex)) {
  			// go right (towards bigger index)
  			tweens.push(TweenMax.to(currentSlideImage,0.5,{x:0 - currentSlideImage.width(),onUpdate:overrideOpacity,onUpdateParams:[currentSlideEl,1],onComplete:resetPosition,onCompleteParams:[currentSlideImage,currentSlideEl,0]}));
  			tweens.push(TweenMax.from(nextSlideImage,0.5,{x:currentSlideImage.width(),onComplete:resetPosition,onCompleteParams:[nextSlideImage,nextSlideEl,1]}));
  		} else {
  			// go left
  			tweens.push(TweenMax.to(currentSlideImage,0.5,{x:0 + currentSlideImage.width(),onUpdate:overrideOpacity,onUpdateParams:[currentSlideEl,1],onComplete:resetPosition,onCompleteParams:[currentSlideImage,currentSlideEl,nextSlideImage,0]}));
  			tweens.push(TweenMax.from(nextSlideImage,0.5,{x:-currentSlideImage.width(),onComplete:resetPosition,onCompleteParams:[nextSlideImage,nextSlideEl,1]}));
  		}
  		
  		tweens.push(TweenMax.to(currentSlideCopy,0.5,{opacity:0}));
  		tweens.push(TweenMax.to(nextSlideCopy,0.5,{opacity:1,delay:0.5}));

	});


    el.find('.spotlight-slick-mobile-image').slick({
        centerMode: true,
        centerPadding: '40px',
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplay:true,
        asNavFor: '.spotlight-slick-mobile-copy'
    });
   el.find('.spotlight-slick-mobile-copy').slick({
        fade:true,
        centerPadding: '40px',
        arrows: false,
        dots: false,
        slidesToShow: 1,
        
        asNavFor: '.spotlight-slick-mobile-image'
    });
   $('.slideable-image').css('height',$('.slideable-image').width() * 0.625);
   respondToResizeEvent($(window).width());
   function respondToResizeEvent(w){
      el.find('.spotlight-center-vertical').each(function(){
        var top = (el.find('.slideable-image').height()*0.5) - ($(this).height() * 0.5);
        if(el.find('slideable-image').height() > $(this).height() ){
          $(this).css('margin-top',top+'px');
        }
      });
      
   		
   		
   		
   }
   return {
   		respondToResizeEvent: respondToResizeEvent
   };


};