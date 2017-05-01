module.exports = makeSlickDotGrabber = function(el){ // requires square carousel items
	var under = el.find('.js-dots-go-under');
	var isMediumUp = window.isMediumUp();
	el.on('init',function(){
		recalculate();
	});
	function respondToResizeEvent(){
		if(isMediumUp !== window.isMediumUp()){
			if(!window.isMediumUp()){
				recalculate();
			}
			isMediumUp = window.isMediumUp();
		}
	}
	function recalculate(){
		el.find('.slick-dots').css('top',under.width());
		setTimeout(recalculate,250);
	}
	return {
		respondToResizeEvent:respondToResizeEvent
	};
};