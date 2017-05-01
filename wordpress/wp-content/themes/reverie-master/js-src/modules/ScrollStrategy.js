module.exports = ScrollStrategy = function(target,aspectRatio,playButton){

	function respondToScrollEvent(y){

            var rawRatio = (y / 564); // fudge factor, should be fixed to make effect consistent with smaller browser width
            
            var safeRatio = ((rawRatio * 0.25) * aspectRatio);

            safeRatio *= 100;

            target.css('transform', 'translate3D(0, ' + safeRatio + '%,0)');
            if(playButton){
			playButton.css('transform', 'translate3D(0, ' + safeRatio*4 + 'px,0)');
			}
        
	}
	return respondToScrollEvent;
	
};