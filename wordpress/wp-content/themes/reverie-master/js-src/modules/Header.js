var makeHeader = function(el) {
    var lastSize = window.innerWidth;
    var lastFormFactorIsMediumUp = window.isMediumUp();
    tl = new TimelineMax({
        paused: true
    });
    var tt = 0.5;
    //tl.set(el.find('.header-menuburger').get(0),{ease:Sine.easeInOut,y:24},0);
    tl.to(el.get(0), tt, {
        height: 65
    });
    tl.to(el.find('.header-menuburger').get(0), 0.25, {
        ease: Sine.easeInOut,
        opacity: 1
    }, 0.25);
    tl.to(el.find('.header-menuburger').get(0), tt, {
        ease: Sine.easeInOut,
        y: -26
    }, 0);

    tl.to(el.find('.article-header-main-nav').get(0), tt, {
        autoAlpha: 0,
        y: "-=22",
        ease: Sine.easeInOut
    }, 0);
    tl.to(el.find('h1.expanded').get(0), tt * 0.8, {
        opacity: 0,
        y: "-=30",
        ease: Sine.easeInOut
    }, 0);
    tl.to(el.find('h1.collapsed').get(0), tt * 0.8, {
        opacity: 1,
        ease: Sine.easeInOut
    }, 0.2);
    tl.to(el.find('.cadillac-logo-expanded').get(0), tt * 0.8, {
        opacity: 0,
        y: -30,
        ease: Sine.easeInOut
    }, 0);
    tl.to(el.find('.cadillac-logo-collapsed').get(0), tt * 0.8, {
        opacity: 1,
        ease: Sine.easeInOut
    }, 0.2);



    var lastY = 0;
    var lastDir = -1;
    el.on('mouseover', openOnMouseOver);
    el.find('.header-menuburger').click(openAction);
    el.on('mouseout', closeOnMouseOut);

    function openAction() {
        tl.reverse();
        //$('a.header-dropdown-current-choice').css('display','inline-block');

    }

    function closeAction() {
        tl.play();
        //$('a.header-dropdown-current-choice').css('display','none');

    }

    function openOnMouseOver() {


        if (window.isMediumUp()) {
            openAction();
        }
    }

    function closeOnMouseOut() {

        if (lastY !== 0) {
            if (window.isMediumUp()) {
                closeAction();
            }
        }
    }

    function respondToScrollEvent(y) {
        if (y >= lastY) {
            if (y > 0) {
                closeAction();
            }
        } else {
            console.log("triggered opening somehow");
            openAction();
        }
        lastY = y;
    }

    function staticRespondToScrollEvent(y) { // we're not moving, we just resized

        if (y > 0) {
            closeAction();
        }
    }
    window.TEMP_TL = tl;
    return {
        respondToScrollEvent: respondToScrollEvent,
        respondToResizeEvent: function(y) {
            //console.log(window.innerWidth,lastSize,isMediumUp(),lastFormFactorIsMediumUp)
            if (window.innerWidth != lastSize) {

                if (!isMediumUp() && lastFormFactorIsMediumUp) {
                    tl.stop();
                    tl.seek(0);
                    console.log("IN THIS DAMN THING");
                    TweenMax.set(el.get(0), {
                        clearProps: 'height'
                    });
                    TweenMax.set(el.find('.header-menuburger').get(0), {
                        opacity: '1',
                        clearProps: 'y'
                    });
                    TweenMax.set(el.find('h1.expanded')[0], {
                        opacity: 1,
                        clearProps: 'y'
                    });
                    TweenMax.set(el.find('h1.collapsed')[0], {
                        opacity: 0,
                        clearProps: 'y'
                    });
                    TweenMax.set(el.find('.cadillac-logo-expanded')[0], {
                        opacity: 1,
                        clearProps: 'y'
                    });
                    TweenMax.set(el.find('.cadillac-logo-collapsed')[0], {
                        opacity: 0,
                        clearProps:'y'

                    });


                } else if (isMediumUp() && !lastFormFactorIsMediumUp) {
                    tl.seek(0);
                    TweenMax.set(el.find('.header-menuburger').get(0), {
                        opacity: '0'
                    });

                    staticRespondToScrollEvent(y);
                }
                lastSize = window.innerWidth;
                lastFormFactorIsMediumUp = isMediumUp();
            }

        }

    };
};

module.exports = makeHeader;
