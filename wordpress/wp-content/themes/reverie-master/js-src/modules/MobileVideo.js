var makeVideoEmbedController = require('./video/VideoEmbedController');

module.exports = makeMobileVideo = function(el){
	var slideDownX;
	var slideDownY;
	var slideTouchDownX;
	var slideTouchDownY;
	var slideMouseMoved = false;

	var videoEmbedController = makeVideoEmbedController(el.find('.js-iframe-target'),el.attr('data-embed'));
	function loadVideo() {

		if(window.mobileAndTabletCheck()) {
			videoEmbedController.loadVideo(false);
		}
		else {
			videoEmbedController.loadVideo(true);
		}
	}
	el.bind("touchstart", function(event){
		slideMouseMoved = false;
		if(event.touches){
			slideTouchDownX = event.touches[0].pageX;
			slideTouchDownY = event.touches[0].pageY;
		}
	});
	el.bind("touchmove", function(){
		slideMouseMoved = true;
	});

	el.bind("touchcancel", function(e){
		e.preventDefault();
	});
	el.mousedown(function(event) {
		slideDownX = event.pageX;
		slideDownY = event.pageY;

	});
	
	el.on('mouseup', function(event){
		if(slideDownX === event.pageX && slideDownY === event.pageY){
			//$(this).find('.play-button').hide();
			loadVideo();
		}
	});
	return ({
		 stopVideo: function(){
            
            videoEmbedController.stopVideo();
        }
	});

};