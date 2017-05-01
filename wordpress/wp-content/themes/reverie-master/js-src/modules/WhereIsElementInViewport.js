module.exports = function whereIsElementInViewport(el) {
// returns ratio, 0 to 1. 0 is just a sliver of the item appearing in the bottom of the viewport, 1 is just a sliver at the top

        var rect = el.getBoundingClientRect();
        return rect.bottom/(rect.height + window.innerHeight);
        

};