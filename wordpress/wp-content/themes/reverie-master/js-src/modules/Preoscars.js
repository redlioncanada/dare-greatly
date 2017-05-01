module.exports = makePreoscars = function(el) {
    whereIsElementInViewport = require('./WhereIsElementInViewport');
    var THRESHOLD = 10;
    var carousels = [];
    var sections = [];
    var videos = [];
    sections.push($('#top-section')[0]);
    el.find('.pre-oscars').each(function() {
        sections.push($(this)[0]);
        carousels.push(makePreoscarCarousel($(this)));
    });
    sections.push($('footer')[0]);

    var selectionIndex = 0;
    var maxSelectionIndex = 3;

    function clickHandler(e) {
      //  console.log(e);
        videos.forEach(function(video) {

            video.stopVideo();
        });
        var ind = $(this).attr('data-target-index');
        var offset = $('[data-index="' + ind + '"]').offset().top + $('[data-index="' + ind + '"]').height() * 0.5;

        var indY = offset - ($(window).height() * 0.5);
        indY -= 15;
       // console.log(indY);
        TweenLite.to(window, 0.5, {
            scrollTo: {
                y: indY
            },
            ease: Sine.easeInOut,
            delay: 0.1
        });
    }

    function setLeftNav(n) {
        $('.desktop-carousel.slick-dots').css('opacity', n === 0 ? 0 : 1);
      //  console.log("in left nav", n);

        if (n > 0 && n <= carousels.length) { 
            $('.desktop-carousel.slick-dots').css('opacity', 1);
            $('.desktop-carousel.slick-dots li').removeClass('slick-active');
            $('.desktop-carousel.slick-dots li').addClass('slick-inactive');
            $('.desktop-carousel.slick-dots li[data-target-index=' + (n - 1) + ']').addClass('slick-active');
            $('.desktop-carousel.slick-dots li[data-target-index=' + (n - 1) + ']').removeClass('slick-inactive');
        } else {
            $('.desktop-carousel.slick-dots').css('opacity', 0);
        }
        $('.slick-inactive').unbind('click', clickHandler);
        $('.slick-inactive').bind('click', clickHandler);
    }
    setLeftNav(0);



    function closest(num, arr) {
        var curr = arr[0];
        var currentIndex = 0;
        var diff = Math.abs(num - curr);
        for (var val = 0; val < arr.length; val++) {
            var newdiff = Math.abs(num - arr[val]);
            if (newdiff < diff) {
                diff = newdiff;
                curr = arr[val];
                currentIndex = val;
            }
        }
        console.log(currentIndex);
        return currentIndex;
    }

    function respondToScrollEvent(n) {
        var distances = sections.map(function(section, i) {
            
            var raw =  whereIsElementInViewport(section);
           // console.log(i,raw);
            if(i === sections.length-1){
                raw -= 0.2;
            }
            if(i === 0){
                raw += 0.1;
            }
            return raw;


        });


        setLeftNav(closest(0.5, distances));

    }

    function setVideos(somevideos) {
        videos = somevideos;
        carousels.forEach(function(carousel) {
            carousel.setVideos(somevideos);
        });
    }
    respondToScrollEvent();
    return ({
        respondToScrollEvent: respondToScrollEvent,
        setVideos: setVideos
    });

};