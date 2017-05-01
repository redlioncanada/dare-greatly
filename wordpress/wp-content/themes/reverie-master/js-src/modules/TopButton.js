$ = window.jQuery;
module.exports = makeTopButton = function(el, targetEl,offset) {
    
    if(offset === undefined){
        offset = 0;
    }
    TweenLite.to(el.get(0),0,{opacity:0});
    targetEl = targetEl.get(0); // don't need jquery for this.
    function rerender() {
    	if($(window).scrollTop() !== 0){
    		TweenLite.to(el.get(0),0.5,{opacity:1});
    	} else {
    		TweenLite.to(el.get(0),0.5,{opacity:0});
    	}
        if (targetEl.getBoundingClientRect().top > ($(window).height()-offset) - 100) {
            el.css({
                position: 'fixed',
                bottom: '100px',
                top: ''
            });


        } else {
            el.css({
                position: 'absolute',
                top: ($(targetEl).position().top - (el.height() - offset)) + 'px',
                bottom: ''
            });
        }
    }
    function scrollToTop(){
        if(!window.mobileAndTabletCheck()) {
    	   TweenLite.to(window, 0.5, {scrollTo:{y:0}, ease:Sine.easeInOut});
        } else {
            window.scrollTo(0,0);
        }
    }
    el.on('click',scrollToTop);
    return {
        respondToResizeEvent: function() {
            rerender();
        },
        respondToScrollEvent: function() {
            rerender();
        }
    };

};
