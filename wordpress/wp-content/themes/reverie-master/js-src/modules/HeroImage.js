module.exports = makeHeroImage = function(el) {
    
    
    function respondToResizeEvent() {
        
    }

    function respondToScrollEvent(y) {
        var rawRatio = (y/564); // fudge factor, should be fixed to make effect consistent with smaller browser width

        var safeRatio = ((rawRatio*0.25)*ar);

    	safeRatio *=100;
        
        target.css('transform','translate3D(0, '+ safeRatio + '%,0)');
        
    }
    var target = el.find('.hero-background-image-target');
    var ar = $(el).attr('ar');
    
    respondToScrollEvent($(window).scrollTop());
    
    
    return {
        respondToResizeEvent: respondToResizeEvent,
        respondToScrollEvent: respondToScrollEvent
    };

};
