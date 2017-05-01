$ = window.jQuery;
module.exports = makeMobileMenu = function(el) {

    function isReallyShort() {
        return $(window).height() <= 400;
    }
    var opened = false;
    var currentlyShort = isReallyShort();
    el.find('.mobile-menu-close').on('click', function() { close(); });
    el.find('.js-background-click-target').on('click', function() { close(); });
    var opentl = new TimelineLite({ paused: true });

    var closetl = new TimelineLite({ paused: true, onComplete: closeDiv });

    if (!isReallyShort()) {
        opentl.from(el, 1, { opacity: 1 });
        opentl.from(el.find('.mobile-menu-solid').get(0), 0.3, { x: 500 }, 0);
        opentl.staggerFrom(el.find('.mobile-menu-panel li').get(), 0.3, { x: 500 }, 0.1, 0.2);
        opentl.staggerFrom(el.find('.animate-on').get(), 0.3, { opacity: 0 }, 0.1, 0.5);

        closetl.to(el.find('.mobile-menu-solid').get(0), 0.3, { x: 500 });
        closetl.to(el, 0.3, { opacity: 0 });
    }


    function close() {
        opened = false;
        closetl.play(0);
    }

    function closeDiv() {
        $('body').unbind('touchmove');
        $('body').css('overflow', 'initial');
        el.css('display', 'none');
    }
    function respondToResizeEvent(){
        if(opened && currentlyShort != isReallyShort() || window.isMediumUp()){
            currentlyShort = isReallyShort();
            close();
        }
    }
    return {
        open: function() {
            if (!window.isMediumUp()) {
                if (!isReallyShort()) {
                    $('body').bind('touchmove', function(e) { e.preventDefault(); });
                }
                el.css('display', 'block');
                opened = true;
                opentl.play(0);
                if (isReallyShort() && $(window).scrollTop() > 10) {
                    TweenLite.to(window, 0.5, { scrollTo: 0 });
                }
            }
        },
        respondToResizeEvent: respondToResizeEvent
    };

};
