module.exports = makeMobileTrendingHovers = function(aTrendingModule){ 

	function trackClickInteraction(name, customValue) {
	var s = s_gi('gmcadillac');
	s.linkTrackVars = 'prop27,prop32';
	s.prop27 = name;
	s.prop32 = customValue;
	s.tl(true, 'o', 'gmds');
}


	currentHovered = undefined;
	var currentTrendingModule;
	setCurrentTrendingModule(aTrendingModule);

	function setCurrentHovered(e){
		if(!currentHovered || $(e.currentTarget).get(0) !== currentHovered.get(0)){
			
			e.preventDefault();
			
			resetCurrentTrendingModule(currentTrendingModule);
			currentHovered = $(e.currentTarget);

			currentHovered.addClass('tapped');

			trackClickInteraction('trending', 'trending:initiated:rollover:image:'+currentHovered.siblings('img').attr('src').split("/").pop());

				

		} else {
			
			// TODO: this will need special tracking
			trackClickInteraction('trending', 'trending:completed:link:'+currentHovered.attr('href').split("/").pop());
			window.location = currentHovered.attr('href');
		}
	}

	function resetCurrentTrendingModule(aTrendingModule){
		currentTrendingModule.find('.small-trending-info').removeClass('tapped');
	}

	function setCurrentTrendingModule(aTrendingModule){
		if(currentTrendingModule){
			currentTrendingModule.find('.small-trending-info').removeClass('tapped');
		}
		currentTrendingModule = aTrendingModule;
		currentTrendingModule.off().on('click','.small-trending-info',setCurrentHovered);
	}

	return{
 
		setCurrentTrendingModule: setCurrentTrendingModule

	};

};