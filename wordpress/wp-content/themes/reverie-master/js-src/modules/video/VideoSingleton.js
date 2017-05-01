videoSingleton = (function() {

    var videos = [];
    var playingIndex;
    var callback;

    window.onYouTubeIframeAPIReady = function() {
        callback();
    };
    var loadAPI = function(aCallback) {
        callback = aCallback;
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    };

    function stopThisVideo(player) {
        try {
            var test = window.mobileAndTabletCheck() ? player.stopVideo() : player.pauseVideo();
        } catch (error) {
            //console.log("couldn't find video functions");
        }
    }
    return {
        loadAPI: loadAPI,
        registerVideo: function(player, autoplay, restoreAfter, onStartPlaying, onIframeReady) {
            
            videos.push({
                player: player,
                autoplay: autoplay,
                restoreAfter: restoreAfter,
                onStartPlaying:onStartPlaying,
                onIframeReady:onIframeReady
            });

        },
        onPlayerReady: function(e) {
            videos
                .filter(function(video) {
                    return video.player === e.target;
                })
                .forEach(function(video) {
                    if (video.autoplay && !window.mobileAndTabletCheck()) {
                        video.player.playVideo();
                    }
                });

        },
        stopThisVideo: stopThisVideo,
        onPlayerStateChange: function(e) {
            
            if (e.data == YT.PlayerState.PLAYING) {
                // this guy's playing. stop all others.
                videos
                    .filter(function(video) {
                        return video.player !== e.target;
                    }) // get a list of all videos that ISN'T this one.
                    .forEach(function(video) { // for each, do the below.

                        stopThisVideo(video.player);

                    });
                videos
                    .filter(function(video){ 
                        return video.player === e.target;
                    }
                    ).forEach(function(video){
                        if(video.onStartPlaying){
                            video.onStartPlaying();
                        }
                    });

            } else if (e.data == YT.PlayerState.ENDED) {

                videos
                    .filter(function(video) {
                        return video.player == e.target;
                    })
                    .forEach(function(video) {
                        if (video.restoreAfter) {
                            video.restoreAfter();
                        }
                    });
                // save videos without this item, since it's no longer in the stack. It will be registered again.
                videos = videos.filter(function(video) {
                    return video.player !== e.target;
                });
            }

        }

    };


})();
module.exports = videoSingleton;
