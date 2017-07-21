$ = window.jQuery;
var whereIsElementInViewport = require('./WhereIsElementInViewport');
var makeMondrian = function(el, isHomeMondrian) {
    var mask = $(el).find('.mondrian-mask');
    var image = $(el).find('.mondrian-image');
    var clipper = $(el).find('.mondrian-image-clipper');
    
    var timeline = new TimelineMax({
        paused: true
    });
    mask.css('position', 'absolute');
    clipper.css('position', 'absolute');
    image.css('position','absolute');
    clipper.css('overflow','hidden');
    $(el).css('overflow', 'hidden');
    $('.home-mondrian-top').on('click',function(e){ // this is a crappy implementation 
                                                    // -- home is outside the passed Element, 
                                                    // and this will only work there, so it works but it's sloppy.
                                                    // MC 12/10/15
        if(e.currentTarget === $(this).get(0)){
            window.location = $(el).attr('data-href');
        } else {
            
        }
    });
    
    function calculateSize() {
        timeline.invalidate();
        timeline = new TimelineMax({
            paused: true
        });
        $(el).css('height',   mask.get(0).clientHeight);
        clipper.css('height', mask.get(0).clientHeight-4);
        clipper.css('width', mask.get(0).clientWidth - 4);
        clipper.css('left','2px');
        clipper.css('top','2px');

        if ($(el).hasClass('no-parallax')) {
			return;
		}

        if (isHomeMondrian) {
            timeline.set(image.get(0), {
                scale:1,
                transformOrigin:'50% 100%',
               y: 0
            });
            timeline.to(image, 6, {
                scale: 1,
                transformOrigin:'50% 100%',
                y: mask.get(0).clientHeight - image.get(0).clientHeight
            });
/*            timeline.to(image.get(0), 6, {
                scale: 1,
                transformOrigin:'50% 100%',

            });*/

            $(el).siblings('.home-mondrian-summary').css('min-height', (mask.height() + 20) + 'px');
        } else {
            
            timeline.set(image, {
                scale: 1.5,
                transformOrigin:'50% 100%',
                y: mask.get(0).clientHeight - image.get(0).clientHeight
            });
            timeline.to(image.get(0), 6, {
                scale: 1,
                transformOrigin:'50% 100%',
                 
            });
            timeline.to(image.get(0), 6, {
                y: 0,
                scale: 1,
                 
            });
        }
        respondToScrollEvent();
    }

    image.load(calculateSize);
    mask.load(calculateSize);
    function whereIsElementFromTop(el) {
// returns ratio, 0 to 1. 0 is that the top of the image is , 1 is just a sliver at the top

        var rect = el.getBoundingClientRect();
       
        return -((rect.top-150)/rect.height);
        

    }
    calculateSize();
    respondToScrollEvent();
    function respondToScrollEvent(){
			if ($(el).hasClass('no-parallax')) {
				return;
			}

            var rat;
            if(isHomeMondrian) {
                rat = whereIsElementFromTop(el);
            } else {
                rat = whereIsElementInViewport(el);
            }
           
            rat = Math.min(1,rat);
            rat = Math.max(0,rat);
            var seektime  = (1 - rat) * timeline.duration();
            
            timeline.seek(seektime);
    }
    return {
        respondToResizeEvent: function() {
            calculateSize();
        },
        respondToScrollEvent: function() {
            respondToScrollEvent();
        }


    };

};


module.exports = makeMondrian;
