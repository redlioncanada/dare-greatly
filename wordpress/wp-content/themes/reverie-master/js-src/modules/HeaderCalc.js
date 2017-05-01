var $ = window.jQuery;

module.exports = HeaderCalc = function(el) {


	var lastWidth;
	function getSize() {
		var childWidth,width,childSpan,childOffset;
		width = $(window).width();

		childSpan = $(el).prev('.row').find('span');
		if(childSpan){
			childWidth = childSpan.width();
			childOffset = parseInt(childSpan.offset().left);
			
		}

		return [childWidth,childOffset];
	}
	function setSize(size){
		
		$(el).css({'max-width':size});
	}
	function getAndSetSize(){
		size = getSize();
		setSize(size[0]+size[1]);
	}


	// run a comparison for a while to pick up the font load, if it's slow. this will go for a full second.
	setSize(0);
	$(el).css('opacity',1);
	var _int = setInterval(compareSpanSize,100);
	var count = 0;
	function compareSpanSize(){
		var size,thisWidth;
		
		

		if(lastWidth === undefined){
			lastWidth = getSize()[0];
		} else {

 			size = getSize();
 			thisWidth = size[0];
 			setSize(size[0] + size[1]);
 			if(thisWidth !== lastWidth){
 				
 				
				clearInterval(_int);
 			} else {
 				count++;
 				if(count > 10){			
					clearInterval(_int);
 				}
 			}
		}

	}

	return {
		respondToResizeEvent: function(){
			getAndSetSize();
		}


	};



};
