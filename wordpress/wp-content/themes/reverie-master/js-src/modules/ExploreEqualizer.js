module.exports = makeExploreEqualizer = function(el) {
	
	emailBox = el.find('.js-mailinglist-explore');
	vcenter = el.find('.js-mailinglist-explore .js-vertical-center');
	bigImage = el.find('.large-6>.image-container-8x5');
	smallImage = el.find('.large-3>.image-container-8x5');

	var doResize = function(){
		
		if(window.isMediumUp()){
			var bigHeight = bigImage.width() * bigImage.find('img.inside_image_container').attr('recip_ar');

			var smallHeight = smallImage.width() * smallImage.find('img.inside_image_container').attr('recip_ar');
			
			var h = bigHeight - 10 - smallHeight;
			emailBox.css('height',h+'px');
			margin = Math.max(0,0.5 * (h - vcenter.height()));

			vcenter.css('margin-top',margin + 'px');

		} else {
			emailBox.css('height','unset');
			
		}
	};
	doResize();
	
	return {
		respondToResizeEvent: doResize
	};

};