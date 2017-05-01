module.exports = makeUGCGrid = function(el) {
    var whereIsElementInViewport = require('./WhereIsElementInViewport');
    var isMediumUp = window.isMediumUp();
    var environment = require('./Environment')();
    var resultRoot = (environment.env !== environment.prod) ? '' : '';
/*    if(environment.env === environment.local){
        resultRoot = 'http://0.0.0.0:4000/';
    }*/
    var endpoint = resultRoot + "submissions/?page=";
    var ie10 = navigator && navigator.userAgent.indexOf('MSIE 10.0') !== -1;
    
    // var endpoint = '/wp-content/uploads/submissions.json?page=';
    var results = [];
    var used = [];
    var currentIndex = 0;
    var itemsPerPull = 8;
    var page = 1;
    var first = true;
    var locked = false;
    var gridIntroInGrid;
    $('html,body').css('height','100%');
    if (!Array.prototype.find) {
        Array.prototype.find = function(predicate) {
            if (this === null) {
                throw new TypeError('Array.prototype.find called on null or undefined');
            }
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }
            var list = Object(this);
            var length = list.length >>> 0;
            var thisArg = arguments[1];
            var value;

            for (var i = 0; i < length; i++) {
                value = list[i];
                if (predicate.call(thisArg, value, i, list)) {
                    return value;
                }
            }
            return undefined;
        };
    }
    var mobile = $(window).width() <= 640;

    function initializeLightbox() {
        $('.grid-lightbox .backing, .grid-lightbox .close-x').click(function() {
            closeLightbox();
        });
    }
    if (mobile) {
        itemsPerPull = 8;
    }
    $('.infinite-load').click(function() {
        addToGrid();
    });

    function getResults(shouldAdd) {
        locked = true;
        $.get(endpoint + page, function(data) {

            if (typeof(data) === 'string') {
                data = $.parseJSON(data);
            }
            if (data.result.length > 0) {
                results = results.concat(data.result);
                if (shouldAdd) {
                    addToGrid();
                } else {
                    locked = false;
                }
            } else {
                $('.infinite-load').css('display', 'none');
                locked = true;
            }

        });
        page++;
    }

    function addToGrid() {
        if (first) {
            renderIntro();

        }

        for (var i = 0; i < itemsPerPull; i++) {

            var tile = results.shift();

            if (tile) {
                renderTile(tile);
                used.push(tile);
            } else {
                getResults(false);
            }
        }
        if (first) {
            if (!mobile) {
                itemsPerPull++;
            }

            var $newGridIntro = $('.grid-intro').clone();


            $('.ugc-grid-list').append($newGridIntro);
            $('.ugc-grid-list .grid-intro').insertAfter($('.grid-tile').siblings(':eq(2)'));


            $('.ugc-grid-list .grid-intro').wrap('<li class="grid-tile grid-intro-wrapper show-for-medium-up"></li>');
            gridIntroInGrid = $('li.grid-intro-wrapper');
            $('li .grid-intro').removeClass('show-for-small-only');
        }
        $('.back').click(function(e) {
            showLightbox($(this).find('.readmore').attr('data-index'));
            
        });
        if(ie10){
            
            $('.back, .front').addClass('ie10');

        }
        enableButtons();
        respondToResizeEvent();
        repositionMessagingTile();
        first = false;
        locked = false;

    }
    function enableButtons(){
        $('.back, .front').addClass('enabled');
    }
    function disableButtons(button){
        $('.back, .front').removeClass('enabled');   
    }
    function showLightbox(id) {

        $('.grid-lightbox').css('display', 'block');
        populateLightbox(id);

    }

    function limitString(str, chars) {
        return str.substr(0, chars) + '...';
    }

    function populateLightbox(id) {
        var result = used.find(function(result) {
            return result.id == id;
        });
        //$('.grid-lightbox-image img').attr('src', resultRoot + result.web_cropped_image_url);
        var q = '#' + id + '>div.front img';
        var dare_line = escapeHtml(result.dare_line);
        var do_line = escapeHtml(limitString(result.do_line, 230));
        $('.grid-lightbox-image img').attr('src', $(q).attr('src'));
        $('.grid-lightbox-image img').attr('width', $(window).width() / 2);
        $('.grid-lightbox-image img').attr('height', $(window).width() / 2);
        $('.grid-lightbox-copy .the-dare').html(dare_line);
        $('.grid-lightbox-copy .the-blurb').html(do_line);
        if (do_line.length > 100) {
            $('.grid-lightbox-copy .the-blurb').addClass('smaller-do');
            $('.grid-lightbox-copy .the-dare').addClass('smaller-do');

        } else {
            $('.grid-lightbox-copy .the-blurb').removeClass('smaller-do');
            $('.grid-lightbox-copy .the-dare').removeClass('smaller-do');
        }
        $('body').css({
            'overflow': 'hidden',
            'position': 'relative',
            'height': '100%'
        });
        if(ie10){
            disableButtons();
            $('.close-x').addClass('ie10');
        }
        respondToResizeEvent();
    }

    function closeLightbox() {
        $('.grid-lightbox').css('display', 'none');
        $('body').css({
            'overflow': 'auto',
            'position': 'static'
                //'height':'auto'
        });
        if(ie10){
            enableButtons();
        }
        respondToResizeEvent();
    }

    function renderIntro() {
        var html = '<div class="grid-intro show-for-small-only">Meet a few individuals who pursue life beyond the boundaries.</div>';
        el.find('.js-grid-mount').parent().prepend(html);
    }

    function escapeHtml(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

    function renderTile(result) {
        var fullURL = resultRoot + result.web_cropped_image_url;
        if(result.web_cropped_image_url_s3){
            fullURL = result.web_cropped_image_url_s3;
        }
        var html = '<li class="grid-tile effect__hover" id="' + result.id + '"><div class="front"><img src="' + fullURL + '"></div>';
        html += '<div class="back"><div class="main-copy"><div class="dontyoudare">Don\'t you dare</div>';
        html += '<div class="the-dare">' + escapeHtml(result.dare_line) + '</div></div><div data-index="' + result.id + '" class="readmore">view details</div></li>';
        el.find('.js-grid-mount').append(html);
    }

    function respondToResizeEvent($window) {
        var gridTile = el.find('.grid-tile');
        var front = el.find('.front');
        var back = el.find('.back');
        gridTile.css('height', gridTile.width()-1 + 'px');
        front.css('height', gridTile.width()-1 + 'px');
        back.css('height', gridTile.width()-1 + 'px');
        if (window.isMediumUp() !== isMediumUp) {
            repositionMessagingTile();
            isMediumUp = window.isMediumUp();
        }
        if(!isMediumUp && $(window).height() > $(window).width()){
            var newTop = Math.min($(window).width(),$(window).height() * 0.5);
            var newHeight = window.innerHeight - $(window).width();
            newHeight = Math.max(window.innerHeight * 0.5,newHeight);
            $('.grid-lightbox-copy').css({'top':newTop + 'px','height':newHeight + 'px'});
        } else {
            $('.grid-lightbox-copy').css({'top':'0','height':'100%'});
        }

    }

    function repositionMessagingTile() {
        if (window.isMediumUp()) { // just got big

            gridIntroInGrid.insertAfter($('.grid-tile').siblings(':eq(2)'));
           
        } else if (!window.isMediumUp()) { // just got small



            gridIntroInGrid.appendTo($(".js-ugc-grid"));

        }
        isMediumUp = window.isMediumUp();
    }

    function respondToScrollEvent() {
        var current = (whereIsElementInViewport($('.infinite-load')[0]));
        if (current < 0.8 && !locked) {
            locked = true;
            addToGrid();

        } else {
            //  console.log("not adding",current,locked);
        }
    }
    getResults(true);
    initializeLightbox();
    
    return {
        respondToResizeEvent: respondToResizeEvent,
        respondToScrollEvent: respondToScrollEvent
    };

};
