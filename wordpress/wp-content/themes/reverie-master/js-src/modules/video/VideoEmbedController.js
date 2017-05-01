videoSingleton = require('./VideoSingleton');

module.exports = makeVideoEmbedController = function(el, tagString) {
	var player;
    function YouTubeGetID(url) {
        var ID = '';
        url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
        if (url[2] !== undefined) {
            ID = url[2].split(/[^0-9a-z_\-]/i);
            ID = ID[0];
        } else {
            ID = url;
        }
        return ID;
    }
	var unique = 'v' + Math.floor(Math.random()*10000000);
    var tag = YouTubeGetID(tagString);
    function calculateHeightAndWidth() {
        var h = el.find('.js-video-sizeable').height();
        var w = el.find('.js-video-sizeable').width(); 
        return {
            width: w,
            height: h
        };
    }
    return {

    	player:player,
        loadVideo: function(autoplay,dimensions,restoreCallback,onStartPlaying,onInstantiation) {
        	if(!dimensions){
                dimensions = calculateHeightAndWidth();
            }
            mobile = window.mobileAndTabletCheck();
            
        	var eventsObject = {
                'onReady': videoSingleton.onPlayerReady,
                'onStateChange': videoSingleton.onPlayerStateChange
            };
        	var styleString = "position:absolute;top: 0;left:0;";
        	el.append('<div style="'+ styleString +'"; id="'+ unique +'"></div>');
           
            player = new YT.Player(unique, {
                width: dimensions.width,
                height: dimensions.height,
                videoId: tag,
                playerVars: {rel:0,modestbranding:1,fs:1},
                events: eventsObject
            });
            
            
            
            videoSingleton.registerVideo(player, autoplay,function restoreAfter(){
                //remove div
                //console.log("restore after",window.mobileAndTabletCheck());
                if(!window.mobileAndTabletCheck()){
                    player.destroy();
                    $('iframe#' + unique).remove();
                }
               
                if(restoreCallback){
                    restoreCallback();
                }
            },
            onStartPlaying,onInstantiation);
            if(onInstantiation){
                
                
                onInstantiation();
            }

        },

        stopVideo: function(){
           
            videoSingleton.stopThisVideo(player);
        },
        sizeVideo: function(w, h) {
            var dimensions = calculateHeightAndWidth();
        	el.find('iframe').attr('width',dimensions.width);
        	el.find('iframe').attr('height',dimensions.height);
        }
    };

};
