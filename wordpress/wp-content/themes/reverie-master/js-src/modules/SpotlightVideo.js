var makeVideoEmbedController = require('./video/VideoEmbedController');

module.exports = makeSpotlightVideo = function(el) { // sizeable is the element that gets sized in 
    var embedCode = el.attr('data-embed');
    var videoEmbedController;

    el.find('a').click(function(e){
        e.preventDefault();
    });
    videoEmbedController = makeVideoEmbedController(el.find('.js-iframe-target'), embedCode);
/*    if (window.mobileAndTabletCheck()) {
        el.find('.play-button').hide(); 
        replacePoster();
    } else {*/
        el.on('click', function() {
            el.find('.play-button').hide(); 
            replacePoster();
        });
    //}

    function replacePoster() {
        videoEmbedController.loadVideo(true,undefined,function(){ 
            if(!window.mobileAndTabletCheck()){
                el.find('.play-button').show(); 
            }
        });
         
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
