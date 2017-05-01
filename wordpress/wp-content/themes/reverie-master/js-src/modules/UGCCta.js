module.exports = makeUGCCta = function(el){
	var dest = $(el.parent().attr('href'));
	el.parent().click(function(e){
		TweenLite.to(window,0.5,{
			scrollTo: dest.offset().top - 65
		});
		e.preventDefault();
	});
};