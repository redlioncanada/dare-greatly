var makeVideoEmbedController = require('./video/VideoEmbedController');

module.exports = makeHomeOrInlineVideo = function(el) { // sizeable is the element that gets sized in 
    var embedCode = el.attr('data-embed');
    var videoEmbedController;

    var iframeTarget = el.find('.js-iframe-target');

    videoEmbedController = makeVideoEmbedController(iframeTarget, embedCode);
    if (window.mobileAndTabletCheck()) {
        
        replacePoster();
    } else {
        el.on('click', function() {
            
            replacePoster();
        });
    }

    function replacePoster() {
        el.find('.play-button').hide(); 
        var autoplay = !window.mobileAndTabletCheck();
        var onIframeReady,onPlaying;
        function replacePosterNow(){
             el.find('iframe').css('opacity',1);
        }
        if(!autoplay){
            onIframeReady = replacePosterNow;
            onPlaying = undefined;
        } else {
            onIframeReady = function(){ el.find('iframe').css('opacity',0);};
            onPlaying = replacePosterNow;
        }
        videoEmbedController.loadVideo(true,undefined,function(){ 
            if(!window.mobileAndTabletCheck()){
                el.find('.play-button').show(); 
            }
        },onPlaying,onIframeReady);
    }
    return ({
        respondToResizeEvent: function() {
            
            videoEmbedController.sizeVideo();
        },
        stopVideo: function(){
            videoEmbedController.stopVideo();
        }
    });


};
