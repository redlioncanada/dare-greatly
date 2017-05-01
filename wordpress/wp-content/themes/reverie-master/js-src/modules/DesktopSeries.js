module.exports = makeDesktopSeries = function(el, isTablet) {
    console.log("making desktop series");
    var images = el.find('.series-image');
    var menu = el.find('.series-menu li');
    var maxSelectionIndex = menu.length - 1;
    var body = $('.series-body');
    var $window = $(window);
    var locked = false;
    var released = false;
    var delta = 0;
    var selectionIndex = 0;
    var armed = true;
    var runningDelta = 0;
    setSelected(selectionIndex);
    var keys = {
        37: 1,
        38: 1,
        39: 1,
        40: 1
    };
    var scrollBarWidth = measureScrollBarWidth();

    function measureScrollBarWidth() {
        var scrollBarMeasure = $('<div />');
        $('body').append(scrollBarMeasure);
        scrollBarMeasure.width(50).height(50)
            .css({
                overflow: 'scroll',
                visibility: 'hidden',
                position: 'absolute'
            });

        var scrollBarMeasureContent = $('<div />').height(1);
        scrollBarMeasure.append(scrollBarMeasureContent);

        var insideWidth = scrollBarMeasureContent.width();
        var outsideWitdh = scrollBarMeasure.width();
        scrollBarMeasure.remove();

        return outsideWitdh - insideWidth;
    }

    function preventDefault(e) {
        var delta;
        if (e.type === 'wheel') {
            //   delta = e.deltaY;
        } else {
            // delta = e.wheelDelta / 120 || -e.detail / 3;
        }
        delta = e.wheelDelta / 120 || -e.detail / 3 || -(e.deltaY);

        console.log(delta, e.wheelDelta / 120, -e.detail / 3);
        runningDelta += delta;

        if (runningDelta > 20) {
            retreat();
            runningDelta = 0;
        }
        if (runningDelta < -20) {
            advance();
            runningDelta = 0;
        }
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    function preventDefaultForScrollKeys(e) {

        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
        if (e.code == "Space") {
            if (e.shiftKey) {
                retreat();
            } else {
                advance();
            }
        }
    }

    function advance() {
        selectionIndex++;
        if (selectionIndex > maxSelectionIndex) {
            unlockScroll();
        } else {
            setSelected(selectionIndex);
        }
    }

    function retreat() {
        selectionIndex--;
        if (selectionIndex < 0) {
            unlockScroll();
        } else {
            setSelected(selectionIndex);
        }

    }

    function disableScroll() {
        /*$('body').css('overflow', 'hidden');
        $('body').css('margin-right', scrollBarWidth + 'px');*/
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove = preventDefault; // mobile
        document.onkeydown = preventDefaultForScrollKeys;
    }

    function enableScroll() {
        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
    }

    function setSelected(n) {


        deselectAll();
        selectImage(n);
        selectList(n);

    }

    function deselectAll() {
        images.removeClass('selected');
        menu.removeClass('selected');
    }

    function selectList(n) {

        var item = menu.filter('[data-index=' + n + ']').addClass('selected');
        positionRuleLine();
    }

    function selectImage(n) {
        images.filter('[data-index=' + n + ']').addClass('selected');
    }

    function isInBetween(thing, low, high) {
        if (low > high) {
            var newlow = high;
            high = low;
            low = newlow;
        }
        return thing > low && thing < high;
    }

    function respondToScrollEvent(y) {
        if (armed) {
            var thresholdTop = body.offset().top - 200;
            //  var thresholdBottom = body.offset().top - 0;



            if (!locked && !released && ($window.scrollTop() > thresholdTop)) {
                console.log("locked!");

                locked = true;

                disableScroll();
            }
            if (released) {
                if ($window.scrollTop() < thresholdTop) {
                    selectionIndex = 0;
                    setSelected(selectionIndex);

                    released = false;
                }
            }
        }
    }

    function unlockScroll() {
        enableScroll();
/*        $('body').css('overflow', 'auto');
        $('body').css('margin-right', 0);*/
        locked = false;
        released = true;
    }

    function respondToLockedScroll(e) {
        console.log(e);
        e.preventDefault();

        if (e.originalEvent) {
            delta += e.originalEvent.wheelDelta / 120 || -e.originalEvent.detail / 3;
            //console.log(delta);
        } else {
            //console.log("no original", e);
        }

    }
    setSelected(0);

    if (isTablet) {
        menu.find('a').click(function(e) {
            e.preventDefault();
        });
        menu.click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            if ($(e.currentTarget).hasClass('selected')) {
                
                window.location = $(e.currentTarget).find('a').attr('href');

            } else {
                setSelected($(e.currentTarget).attr('data-index'));    
            }
        });
    } else {
        menu.mouseover(function(e) {
            setSelected($(e.currentTarget).attr('data-index'));
        });
    }
    /*    menu.mouseout(function(e) {
            unlockScroll();
        });*/

    function positionRuleLine() {
        var el = menu.filter('.selected');
        var topPos = el.position().top + el.height() * 0.5 + 'px';
        var leftPos = -el.parent().offset().left + 'px';
        var width = (el.parent().offset().left - 10) + 'px';
        $('.rule-line').css({
            'top': topPos,
            left: leftPos,
            width: width
        });

    }

    function decideWhetherToArm() {
        console.log(el.height() + 150, $(window).height());
        armed = el.height() + 150 < $(window).height() && !isTablet;
    }

    function respondToResizeEvent() {
        positionRuleLine();
        decideWhetherToArm();
    }
    respondToResizeEvent();
    return {
        respondToScrollEvent: respondToScrollEvent,
        respondToResizeEvent: respondToResizeEvent
    };

};
