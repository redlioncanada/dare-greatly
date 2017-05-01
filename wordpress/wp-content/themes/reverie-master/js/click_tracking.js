var src = null;

window.tracker = function(src_arg) {
    src = src_arg;
    //return src;

};
//click tracking
function trackClickInteraction(name, customValue) {
    var s = s_gi('gmcadillac');
    s.linkTrackVars = 'prop27,prop32';
    s.prop27 = name;
    s.prop32 = customValue;
    s.tl(true, 'o', 'gmds');
}

//Get the text after the last / (in url for example)
function getLastSlash(item) {
    return item.split("/").pop();
}
//Header click tag
$('header').on('click', function(e) {
    var target = e.target,
        $target = $(e.target);
    switch (target.tagName.toLowerCase()) {
        case 'img':
            trackClickInteraction('main nav', 'main nav:header:default:image:' + getLastSlash($target.attr('src')));
            break;
        case 'a':
            if ($target.hasClass('header-dropdown-current-choice')) {
                trackClickInteraction('main nav', 'main nav:header:default:link:' + $target.text().trim());
            } else {
                trackClickInteraction('main nav', 'main nav:header:default:link:' + getLastSlash($target.attr('href')));
            }
            break;
        case 'h1':
            if ($target.hasClass('expanded')) {
                trackClickInteraction('main nav', 'main nav:header:default:link:' + $target.text().trim());
            } else {
                trackClickInteraction('main nav', 'main nav:header:collapsed:link:' + $target);
            }
            break;
        default:
            //trackClickInteraction('main nav','main nav'+$target);
    }
});
$('.header-menuburger').click(function(e) {
    var target = e.target,
        $target = $(e.target);
    trackClickInteraction('main nav', 'main nav:collapsed:link:' + $target.text().trim());
});
//Footer Click Tag
$('footer').on('click', function(e) {
    var target = e.target,
        $target = $(e.target);
    switch (target.tagName.toLowerCase()) {
        case 'a':
            trackClickInteraction('main nav', 'main nav:footer:link:' + $target.text().trim());
            break;
        case 'button':
            trackClickInteraction('main nav', 'main nav:footer:button:email address submit button');
            break;
        case 'i':
            trackClickInteraction('main nav', 'main nav:footer:social:follow:' + $target.parent().attr('title'));
            break;
        default:
            //trackClickInteraction('main nav','main nav:footer'+$target);

    }

});
//Home - Hero Mondrian Click Tags
$('body.home .home-mondrian-a').on('click', function(e) {
    var target = e.target,
        $target = $(e.target);
    switch (target.tagName.toLowerCase()) {
        case 'a':
            trackClickInteraction('dare greatly', 'dare greatly:link:read more:' + getLastSlash($target.attr('href')));
            break;
        case 'h3':
            trackClickInteraction('dare greatly', 'dare greatly:title:' + $target.text().trim());
            break;
        case 'div':
            trackClickInteraction('dare greatly', 'dare greatly:image:' + $target.find('h3').text().trim());
            break;
        default:
            //trackClickInteraction('dare greatly','mondrian'+$target);

    }
});
$('body.home .the-latest').on('click', function(e) {
    var target = e.target,
        $target = $(e.target);
    switch (target.tagName.toLowerCase()) {
        case 'p':
            trackClickInteraction('the latest', 'the latest:title:' + $target.text().trim());
            break;
        case 'a':
            if ($target.hasClass('latest-title')) {
                trackClickInteraction('the latest', 'the latest:title:' + $target.text().trim());
            }
            break;
        case 'img':
            if ($target.hasClass('home-video-poster')) {
                var title = $('.latest-caption-p').text().trim();
                trackClickInteraction('the latest', 'the latest:image:' + title);
            } else {
                var otherTitle = $target.next().find('p.title').text().trim();
                trackClickInteraction('the latest', 'the latest:image:' + otherTitle);
            }
            break;
        default:
            //trackClickInteraction('the latest','the latest'+$target);

    }
});






//Exists on its own so adding it's own handler
$('.latest-explore').click(function(e) {
    var target = e.target,
        $target = $(e.target);
    trackClickInteraction('the latest', 'the latest:link:' + $target.text().trim());
});
//Experience design center
$('body.home .experience-design').on('click', function(e) {
    var target = e.target,
        $target = $(e.target),
        title = $('.experience-design').find('h3').text().trim();
    switch (target.tagName.toLowerCase()) {
        case 'h3':
            trackClickInteraction('experience design center', 'experience design center:title:' + title);
            break;
        case 'img':
            trackClickInteraction('experience design center', 'experience design center:image:' + title);
            break;
        case 'a':
            if ($target.hasClass('learn-more')) {
                trackClickInteraction('experience design center', 'experience design center:link:' + $target.text().trim() + ':' + title);
            } else {
                trackClickInteraction('experience design center', 'experience design center:title:' + title);
            }
            break;
        default:
            //trackClickInteraction('experience design center','experience design center'+$target);

    }
});
//Home email signup
$('.home-email-form button').on('click', function(e) {
    trackClickInteraction('experience design center', 'experience design center:button:subscribe');
});
//Trending dropdown
$('.js-trending-dropdown').on('click', function(e) {
    var target = e.target,
        $target = $(e.target);
    trackClickInteraction('trending', 'trending:menu:dropdown:' + $target.text().trim());
});
//Trending
$('body.home .all-partial-trending-results').on('click', function(e) {
    var target = e.target,
        $target = $(e.target);
    switch (target.tagName.toLowerCase()) {
        case 'img':
            trackClickInteraction('trending', 'trending:image:' + $target.parent('a').attr('data-title'));
            break;
        case 'a':
            trackClickInteraction('trending', 'trending:title:' + $target.text().trim());
            break;
        default:

    }
});
//Experience Cadillac
$('body.home .experience-cadillac').on('click', function(e) {
    var target = e.target,
        $target = $(e.target),
        title = $('.experience-cadillac').find('h3').text().trim();
    switch (target.tagName.toLowerCase()) {
        case 'h3':
            trackClickInteraction('experience cadillac', 'experience cadillac:title:' + title);
            break;
        case 'img':
            trackClickInteraction('experience cadillac', 'experience cadillac:image:' + title);
            break;
        case 'a':
            if ($target.hasClass('learn-more')) {
                trackClickInteraction('experience cadillac', 'experience cadillac:link:READ MORE:' + title);
            } else {
                trackClickInteraction('experience cadillac', 'experience cadillac:title:' + title);
            }
            break;
        default:
            //trackClickInteraction('experience design center','experience design center'+$target);

    }
});
//Explore Sign up
$('.js-mailinglist-explore button').on('click', function(e) {
    trackClickInteraction('explore', 'explore:button:email submit');

});
//Explore Ajax container
$('#explore-ajax').on('click', function(e) {
    var target = e.target,
        $target = $(e.target),
        title = $target.parent().parent().next('div').children('p.title').text();
    switch (target.tagName.toLowerCase()) {
        case 'img':
            trackClickInteraction('explore', 'explore:image:' + title);
            break;
        case 'a':
            trackClickInteraction('explore', 'explore:title:' + $target.text().trim());
            break;
        default:
            //trackClickInteraction('experience design center','experience design center'+$target);

    }
});
//Load more button
$('button.elm-button').on('click', function(e) {
    var target = e.target,
        $target = $(e.target);
    trackClickInteraction('explore', 'explore:link:' + $target.text().trim());
});
//Articles
function getArticleCat() {
    var artCategory = $('.article-category').text().trim();
    return artCategory;
}

function getArticleTitle() {
    var title = $('title').text().trim();
    return title;
}

//Hero Video Module
$('.article-marquee-wrapper.js-hero-video').on('click', function() {
    //var ytLink = $(this).attr('data-embed');
    var imageName = $('.hero-background-image-target').attr('style'),
        lastSlash = getLastSlash(imageName),
        image = lastSlash.replace(')', '');
    trackClickInteraction('article', 'article:' + getArticleCat() + ':image:' + image);
});

$('.oscars-marquee-wrapper.js-hero-video').on('click', function() {
    //var ytLink = $(this).attr('data-embed');
    var imageName = $('.hero-background-image-target').attr('style'),
        lastSlash = getLastSlash(imageName),
        image = lastSlash.replace(')', '');
    trackClickInteraction('oscars landing', 'oscars landing:image:' + image);
});


//Back to Top Button
$('.article-top-button').on('click', function(e) {
    if ($(this).hasClass('js-top-button-oscars')) {
        trackClickInteraction('oscars landing', 'oscars landing:' + getArticleCat() + ':button:back to top');
    } else {
        trackClickInteraction('article', 'article:' + getArticleCat() + ':button:back to top');
    }
});

//Social Sharing per Article
$('.article-share').on('click', function(e) {
    var target = e.target,
        $target = $(e.target);
    $parTitle = $target.parent().attr('title');
    switch (target.tagName.toLowerCase()) {
        case 'i':
            trackClickInteraction('article', 'article:' + getArticleCat() + ':social:share:' + $parTitle);
            break;
        default:
            //trackClickInteraction('experience design center','experience design center'+$target);

    }

});
//Vehicle Spotlight
$('.article-promotional').on('click', function(e) {
    var target = e.target,
        $target = $(e.target);
    switch (target.tagName.toLowerCase()) {
        case 'img':
            trackClickInteraction('article', 'article:' + getArticleCat() + ':vehicle spotlight:image:' + getLastSlash($target.attr('src')));
            break;
        case 'a':
            trackClickInteraction('article', 'article:' + getArticleCat() + ':vehicle spotlight:link:' + $target.text().trim());
            break;
        default:
            //trackClickInteraction('experience design center','experience design center'+$target);

    }
});
$('.article-related-unit').on('click', function(e) {
    var target = e.target,
        $target = $(e.target),
        $linkText = $(this).find('.article-related-unit-title').text().trim();
    switch (target.tagName.toLowerCase()) {
        case 'img':
            trackClickInteraction('article', 'article:' + getArticleCat() + ':related articles:image:' + $linkText);
            break;
        case 'a':
            trackClickInteraction('article', 'article:' + getArticleCat() + ':related articles:link:' + $target.text().trim());
            break;
        default:
            //trackClickInteraction('experience design center','experience design center'+$target);

    }
});
$('.single-articles .js-iframe-target').on('click', function(e) {
    var target = e.target,
        $target = $(e.target);
    switch (target.tagName.toLowerCase()) {
        case 'img':
            trackClickInteraction('article', 'article:' + getArticleCat() + ':image:' + getLastSlash($target.attr('src')));
            break;
        default:
            //trackClickInteraction('experience design center','experience design center'+$target);

    }
});
//Gallery
$('.single-articles').on('click', '.article-carousel-prev', function() {
    var img = $('.slick-active').find('img').attr('src');
    trackClickInteraction('article', 'article:' + getArticleCat() + ':gallery:arrow:prev:' + getLastSlash(img));
});
$('.single-articles').on('click', '.article-carousel-next', function() {
    var img = $('.slick-active').find('img').attr('src');
    trackClickInteraction('article', 'article:' + getArticleCat() + ':gallery:arrow:next:' + getLastSlash(img));
});
$('.single-articles').on('click', '.slick-dots li', function() {
    var img = $('.slick-active').find('img').attr('src');
    trackClickInteraction('article', 'article:' + getArticleCat() + ':gallery:dots:' + getLastSlash(img));
});
$('.article-credit a').on('click', function() {
    var val = $(this).text().trim();
    trackClickInteraction('article', 'article:' + getArticleCat() + ':link:' + val);
});
$('.single-articles .article-copy').on('click', 'a', function(e) {
    var val = $(this).text().trim();
    trackClickInteraction('article','article:'+getArticleCat()+':link:'+val);
});

//CT6 Page
$('.ct6-tile').on('click', function(e) {
    var target = e.target,
        $target = $(e.target);
    switch (target.tagName.toLowerCase()) {
        case 'img':
            var localTitle = $target.parent().parent().next('.caption').children('a').text().trim();
            trackClickInteraction('ct6 landing', 'ct6 landing:image:' + localTitle);
            break;
        case 'a':
            trackClickInteraction('ct6 landing', 'ct6 landing:title:' + $(this).text().trim());
            break;
        default:
            //trackClickInteraction('experience design center','experience design center'+$target);
    }
});

//Preoscars Page
$('.pre-oscars').on('click', '.js-iframe-target', function(e) {
    var target = e.target,
        $target = $(e.target);
    //console.log($target);
    switch (target.tagName.toLowerCase()) {
        case 'img':
            if ($target.hasClass('home-video-poster')) {
                trackClickInteraction('oscars teaser', 'oscars teaser:image:' + getLastSlash($target.attr('src')));
            }
            break;
        default:
    }
});
$('.js-preoscars').on('click', '.preoscar-share', function(e) {

    var target = e.target,
        $target = $(e.target);
    $parTitle = $target.parent().attr('title');
    switch (target.tagName.toLowerCase()) {
        case 'i':
            trackClickInteraction('oscars teaser', 'oscars teaser:social:share:' + $parTitle);
            break;
        default:
            //trackClickInteraction('experience design center','experience design center'+$target);
    }
});

$('.js-preoscars').on('click', '.slick-dots li', function() {
    var whichCarousel = $(this).find('span').text();
    trackClickInteraction('oscars teaser', 'oscars teaser:gallery:dots:' + whichCarousel);
});
$('.js-preoscars').on('click', '.slick-prev', function(e) {
    //var slickSlider = $(this).parent().siblings('.slick-slider');
    //var image = slickSlider.find('.slick-active').find('.home-video-poster').attr('src');
    trackClickInteraction('oscars teaser', 'oscars teaser:gallery:arrow:prev:' + getLastSlash(src));
});
$('.js-preoscars').on('click', '.slick-next', function(e) {
    //var slickSlider = $(this).parent().siblings('.slick-slider');
    //var image = slickSlider.find('.slick-active').find('.home-video-poster').attr('src');
    trackClickInteraction('oscars teaser', 'oscars teaser:gallery:arrow:next:' + getLastSlash(src));
});

//Oscars
//Twitter
$('.oscars-twitter .button').on('click', function(e) {
    trackClickInteraction('oscars landing', 'oscars landing:button:' + $(this).text());
});
$('.oscars-article-grid').on('click', function(e) {
    var artTitle = $(this).find('.person-name').text();
    var target = e.target,
        $target = $(e.target);
    switch (target.tagName.toLowerCase()) {
        case 'img':
            trackClickInteraction('oscars landing', 'oscars landing:image:' + artTitle);
            break;
        case 'a':
            trackClickInteraction('oscars landing', 'oscars landing:title:' + artTitle);
            break;
        default:
            //trackClickInteraction('experience design center','experience design center'+$target);
    }
});

$('.oscars-ugc-grid').on('click', '.readmore', function(e) {
    trackClickInteraction('oscars landing', 'oscars landing:image grid:link:' + $(this).text());
});
$('.grid-lightbox .close-x').on('click', function(e) {
    trackClickInteraction('oscars landing', 'oscars landing:image grid:close');
});
$('.oscars-component .infinite-load').click(function(e) {
    trackClickInteraction('oscars landing', 'oscars landing:link:loading more');
});
$('.ugc-cta').click(function(e) {
    trackClickInteraction('oscars landing', 'oscars landing:link:' + $(this).text().trim());
});


/* S P O T L I G H T ============================== */

$('.spotlight-slick-desktop').on('click',function(e){
    var target = e.target;
    var $target = $(target);
    var linkName;
    
    var articleTitle = $(this).find('.slick-current h3>a').text();
    
    
    if($target.hasClass('learn-more')){
        // track cta
        linkName = $target.closest('.slick-slide').find('.cta>a').text().trim();
        trackingVar = "spotlight:link:"+articleTitle+":"+linkName;
    } else if($target.hasClass('slick-prev')) {
        //track prev
        trackingVar = "spotlight:gallery:arrow:prev:" + articleTitle;
    } else if ($target.hasClass('slick-next')) {
        // track next
        trackingVar = "spotlight:gallery:arrow:next:" + articleTitle;
    } else if ($target.parent().parent().hasClass('slick-dots')){
        trackingVar = "spotlight:gallery:dots:" + articleTitle;
    } else if($target.parent().is('h3')){
        trackingVar = "spotlight:title:" + articleTitle;
    } else if($target.hasClass('js-video-sizeable')){
        trackingVar = "spotlight:image:" + articleTitle;
    }
  //  console.log(trackingVar);
   // e.preventDefault();
    trackClickInteraction('spotlight',trackingVar);
    
});
$('.spotlight-assembly .slick-arrow').on('click',function(e){
    var $target = $(e.target);
    var trackingVar;
    var articleTitle = $('.spotlight-slick-desktop').find('.slick-current h3>a').text().trim();
    if($target.hasClass('slick-prev')) {
        //track prev
        trackingVar = "spotlight:gallery:arrow:prev:" + articleTitle;
    } else if ($target.hasClass('slick-next')) {
        // track next
        trackingVar = "spotlight:gallery:arrow:next:" + articleTitle;
    } 
   // console.log("tracking",trackingVar);
    trackClickInteraction('spotlight',trackingVar);
});

$('.spotlight-slick-mobile-image').on('click',function(e){

    var $target = $(e.target);
    
    var trackingVar;
    var articleTitle = $('.spotlight-slick-mobile-copy').find('.slick-current h3>a').text().trim();
    
    if ($target.parent().parent().hasClass('slick-dots')){
        trackingVar = "spotlight:gallery:dots:" + articleTitle;
    } else if($target.is('img')){
        trackingVar = "spotlight:image:" + articleTitle;
    }
   // e.preventDefault();
   // console.log("tracking",trackingVar);
    trackClickInteraction('spotlight',trackingVar);
});

$('.spotlight-slick-mobile-copy').on('click',function(e){
    var $target = $(e.target);
    var trackingVar;
    var articleTitle = $('.spotlight-slick-mobile-copy').find('.slick-current h3>a').text().trim();
    
    if($target.parent().is('h3')){
        trackingVar = "spotlight:title:" + articleTitle;
    } else if($target.hasClass('learn-more')){
        // track cta
        linkName = $target.closest('.slick-slide').find('.cta>a').text().trim();
        trackingVar = "spotlight:link:"+articleTitle+":"+linkName;
    }
    //e.preventDefault();
    //console.log(trackingVar);
    trackClickInteraction('spotlight',trackingVar);
});

/* E N D   S P O T L I G H T ============================== */

