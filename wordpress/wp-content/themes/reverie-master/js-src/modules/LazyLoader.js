
module.exports = makeLazyLoader = function(callback){
	var images = [];
	var done = 0;
	
	var notifyImageDone = function(){
		done++;
		
		if(done >= images.length){
			
			callback();
		}
	};
	var addImage = function(el){
		var image = new Image();
		image.src = el.attr('data-src');
		image.onload = function(){
			el.attr('src',image.src);
			el.attr('native-width',image.width);
			el.attr('native-height',image.height);
			notifyImageDone();
		};
		images.push(el);
	};
	return {

		add: addImage

	};
};