var makeVideoEmbedController = require('./video/VideoEmbedController');


module.exports = makeHeroVideo = function(el) {
    var embedCode = el.attr('data-embed');
    var self = this;
    var backgroundImage = el.css('background-image');
    var target = el.find('.hero-background-image-target');
    var ar = $(el).attr('ar');

    function calculateHeightAndWidth() {
        var h = el.find('.js-iframe-target').get(0).getBoundingClientRect().height;
        var w = Math.min($(window).width(), h * 1.7777);

        return {
            width: w,
            height: h
        };
    }
    var videoEmbedController = makeVideoEmbedController(el.find('.js-iframe-target'), embedCode);

    if (window.mobileAndTabletCheck()) {
        console.log("should replace poster");
        replacePoster(false);
    } else {

        target.css('background-position', 'center');
        el.on('click', function() {
            replacePoster(true);
        });
    }

    function replacePoster(autoplay) {
        var dimensions = calculateHeightAndWidth();
        var replacePosterNow = function() {
            var dimensions = calculateHeightAndWidth();
            el.css('background-image', 'none');
            el.css('background-color', 'black');
            el.find('.play-button').hide();
            el.find('.hero-background-image-target').hide();
            el.find('iframe').css('left', $(window).width() * 0.5 - dimensions.width * 0.5 + 'px');
            respondToResizeEvent();
        };
        var onIframeAvailable,onStartPlaying;
        if(!autoplay){
            
            
            onIframeAvailable = replacePosterNow;
        } else {
            onStartPlaying = replacePosterNow;
        }
        

        videoEmbedController.loadVideo(autoplay, dimensions, function() {
            if (!window.mobileAndTabletCheck()) {
                el.find('.hero-background-image-target').show();
                el.find('.play-button').show();
            }
        }, replacePosterNow, onIframeAvailable); 

    }
    function respondToResizeEvent(){
        
            var dimensions = calculateHeightAndWidth();

            el.find('iframe').attr('width', dimensions.width);
            el.find('iframe').attr('height', dimensions.height);
            el.find('iframe').css('left', $(window).width() * 0.5 - dimensions.width * 0.5 + 'px');

        
    }
    var respondToScrollEvent = require('./ScrollStrategy')(target, ar, $(el).find('.play-button'));
    respondToScrollEvent($(window).scrollTop());
    return {
        videoEmbedController: videoEmbedController,
        respondToScrollEvent: respondToScrollEvent,
        respondToResizeEvent: respondToResizeEvent
    };
};
