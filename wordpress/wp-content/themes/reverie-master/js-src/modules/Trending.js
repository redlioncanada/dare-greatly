var $ = window.jQuery;

module.exports = makeTrending = function(dropdown, resultsTarget, trendingContainer) {
    
    var makeMobileTrendingHovers = require('./MobileTrendingHovers');
    var currentSelector = getElementFromRange('daily');
    var mobileTrendingHovers = makeMobileTrendingHovers(currentSelector);
    backfillEmptyRanges();
    dropdown.find('#js-daily').on('click', showSelection);
    dropdown.find('#js-weekly').on('click', showSelection);
    dropdown.find('#js-monthly').on('click', showSelection);

    var labelObject = {
        weekly: "Last 7 days",
        monthly: 'Last 30 days',
        daily: 'Today'
    };

    disableCurrentRangeButton('daily');

    fadeInCorrectContent('daily');
    function backfillEmptyRanges(){
        // if there's no data for a range, copy it from the first one that has it.
        if($('.js-no-results').length && $('.js-yes-results').length){
            $('.js-no-results').replaceWith($('.js-yes-results').clone());
           
        } else if($('.js-no-results').length){
            //if there's no range, remove the entire module.
            trendingContainer.css('display','none');
        }

    }
    function disableCurrentRangeButton(range) {
        dropdown.find('#js-' + range).addClass('disabled');
    }

    function showSelection(e) {

        TweenLite.to(currentSelector.get(0), 0.25, {
            opacity: 0,
            onComplete: swapSelections,
            onCompleteParams: [e]
        });

    }

    function swapSelections(e) {

        var cn = $(e.target).attr('id');
        dropdown.find('.dropdown-choice').removeClass('disabled');
        var range = cn.replace('js-', '');
        dropdown.find('.js-trending-current-range').html(labelObject[range]);
        disableCurrentRangeButton(range);
        $(document).foundation('dropdown', 'closeall');
        //});
        fadeInCorrectContent(range);
    }

    function getElementFromRange(range) {
        var selector = 1;
        switch (range) {
            case 'daily':
                selector = 1;
                break;
            case 'weekly':
                selector = 2;
                break;
            case 'monthly':
                selector = 3;
                break;
        }
        return $('.js-trending-results:nth-of-type(' + selector + ')');
    }

    function fadeInCorrectContent(range) {
        $('.js-trending-results').css({
            display: 'none',
            opacity: '1'
        });
        fullSelector = getElementFromRange(range);
        mobileTrendingHovers.setCurrentTrendingModule(fullSelector);
        fullSelector.css('display', 'block');
        TweenLite.from(fullSelector.get(0), 0.25, {
            opacity: 0
        });
        currentSelector = fullSelector;
    }

};
