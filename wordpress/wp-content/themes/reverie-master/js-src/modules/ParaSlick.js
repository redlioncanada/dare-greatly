module.exports = makeParaSlick = function(el){
	//Hover states for the caroulse	
	$('.article-carousel-prev').hover( hoverInArrow, hoverOutArrow );
	$('.article-carousel-next').hover( hoverInArrow, hoverOutArrow );
	function hoverInArrow() {
		$(this).find('.top').hide();
		$(this).find('.bottom').show();
	}
	function hoverOutArrow() {
		$(this).find('.top').show();
		$(this).find('.bottom').hide();
	}

	var maxAvailableWidth;
	var aspectRatios = [];
	function getAspectRatio(el){
		
		if(el.height() !== 0){
			return el.attr('native-width') / el.attr('native-height');
		} 
	}
	var resize = function(){
		
		aspectRatios = [];
		el.find('.slick-slide').each(function(i){
			if(!$(this).hasClass('slick-cloned')){
				aspectRatios.push(getAspectRatio($(this).find('img')));
			} else {

			}
		});
		
		
		var maxWidth = $('.row').width();
		var widestAspectRatio;

		// get image with widest aspect ratio, 
		widestAspectRatio = Math.max.apply(null, aspectRatios);
		

		// establish its height by multiplying aspect ratio reciprocal by maxWidth
		var maxHeight = Math.min(maxWidth * (1/widestAspectRatio),686);
		
		// set width and height of all images to match the max height above and the correct aspect ratio

		el.find('.slick-slide').each(function(){resizeImage(maxHeight,maxWidth,$(this).find('img'),$(this).find('.article-caption'));});
		
	};
	function resizeImage(h,maxWidth,el,caption){

		var ar = el.attr('native-width') / el.attr('native-height');
		el.css('height',h);
		el.css('width',h*ar);
		
		caption.css('width', h*ar);
		caption.css('max-width',maxWidth-20);
	}
	
	return {
		respondToResizeEvent: resize 
	};
};