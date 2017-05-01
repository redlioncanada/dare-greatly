module.exports = makeCinemagraph = function(el) {

    var video = el.find('video').get(0);
    var w = 1600;
    var h = 900;
    var aspectRatio = w/h;
    video.addEventListener('loadedmetadata', function(e) {
        w = this.videoWidth;
        h = this.videoHeight;
        respondToResizeEvent();
        el.find('.content').css('visibility', 'visible');


    }, false);

    function calculateHeightAndWidth(aspectRatio) {
        onscreenWidth = $(window).width();
        onscreenHeight = Math.max(500, onscreenWidth * 1 / aspectRatio);

        videoWidth = onscreenHeight * aspectRatio;

        return {
            width: videoWidth,
            height: onscreenHeight
        };
    }
    //respondToResizeEvent();
    function respondToResizeEvent() {

        aspectRatio = w / h;
        var dimensions = calculateHeightAndWidth(aspectRatio);

        var left = ($(window).width() * 0.5 - dimensions.width * 0.5) + 'px';
        var top = Math.min(0, (dimensions.height * 0.5 - $(el).find('video').height() * 0.5) + 'px');
        $(video).css('left', left);
        $(video).css('top', top);
        $(video).css('height', (dimensions.height - 2) + 'px');
        el.css('height', dimensions.height + 'px');
        $(video).css('width', dimensions.width + 'px');



    }
    var target=$(video);
    
    var respondToScrollEvent =  require('./ScrollStrategy')(target,aspectRatio);
	respondToScrollEvent($(window).scrollTop());
        return {
            respondToResizeEvent: respondToResizeEvent,
            respondToScrollEvent: respondToScrollEvent
        };

};
