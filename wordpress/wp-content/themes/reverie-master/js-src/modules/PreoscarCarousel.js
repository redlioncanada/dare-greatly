module.exports = makePreoscarCarousel = function(el, ind) {
    var slickPrev = el.parent().find('.slick-prev');
    var slickNext = el.parent().find('.slick-next');
    var videos = [];
    el.slick({
        arrows: false,
        dots: false,
        slidesToShow: 1.1,
        initialSlide:1,
        infinite: true,

    });


    var slick = el.slick('getSlick');

    el.parent().find('.slick-prev').click(function(e) {
        if (slick.currentSlide !== 1) {
            el.slick('slickPrev');
        }

    });
    el.parent().find('.slick-next').click(function(e) {

        if (slick.currentSlide !== 0) {
            //console.log("in slick next conditional");
            el.slick('slickNext');
        }

    });

    function getSlideCount() {

    }

    function stopAllVideos() {
        videos.forEach(function(video) {

            video.stopVideo();
        });
    }


    el.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        //console.log('nextSlide',nextSlide);
        var realNext = currentSlide-1;
        realNext = realNext === -1 ? 2 : realNext;
        var src = el.find('[data-slick-index=' + realNext + '] img.home-video-poster').attr('src');
        //console.log("really,",realNext,src);
        if(window.tracker){
            window.tracker(src);
        }
        stopAllVideos();
        if (nextSlide === 1) {
            slickPrev.addClass('disabled');
            slickNext.removeClass('disabled');
        } else if (nextSlide === 0) {
            slickNext.addClass('disabled');
            slickPrev.removeClass('disabled');
        } else {
            slickNext.removeClass('disabled');
            slickPrev.removeClass('disabled');
        }
    });
    slickPrev.addClass('disabled');
    el.on('afterChange', function(event, slick, direction) {

    });

    function setVideos(somevideos) {
        videos = somevideos;
    }
    function respondToResizeEvent(){
        
    }
    return {
        setVideos: setVideos,
        respondToResizeEvent:respondToResizeEvent
    };
};
