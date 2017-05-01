var $ = window.jQuery;
var jquery = window.jQuery;
var slick = window.slick;
//var Cropper = require('cropperjs');
window.isMobileSafari = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
window.mobileAndTabletCheck = function() {
    var check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
};
var videoSingleton = require('./modules/video/VideoSingleton');
var makeMondrian = require('./modules/Mondrian');
var makeHeader = require('./modules/Header');
var makeHomeOrInlineVideo = require('./modules/HomeOrInlineVideo');
var makeSpotlightVideo = require('./modules/SpotlightVideo');
var makeParaslick = require('./modules/ParaSlick');
var makeHeroVideo = require('./modules/HeroVideo');
var makeHeroImage = require('./modules/HeroImage');
var makeCinemagraph = require('./modules/Cinemagraph');
var mobileVideo = require('./modules/MobileVideo');
var makeMobileMenu = require('./modules/MobileMenu');
var makeTopButton = require('./modules/TopButton');
var makeTrending = require('./modules/Trending');
var headerCalc = require('./modules/HeaderCalc');
var makeLazyLoader = require('./modules/LazyLoader');
var makeExploreEqualizer = require('./modules/ExploreEqualizer');
var Share = require('./modules/Share');
var makeCountdown = require('./modules/Countdown');
var makeSpotlight = require('./modules/Spotlight');
var makeDesktopSeries = require('./modules/DesktopSeries');
var makeSlickDotGrabber = require('./modules/SlickDotGrabber');
var makeTwitterFeed = require('./modules/TwitterFeed');
var makePreoscarCarousel = require('./modules/PreoscarCarousel');
var makePreoscars = require('./modules/Preoscars');
var UGC = require('./modules/UGC.js');
var makeUGCGrid = require('./modules/UGCGrid.js');
var TypeWriter = require('./modules/TypeWriter');
var environment = require('./modules/Environment')();
var makeUGCCta = require('./modules/UGCCta');
//console.log("ENVIRONMENT: ", environment.env);
var ugcGrids = [];
var ugcs = [];
var spotlights = [];
var mondrians = [];
var inlineVideos = [];
var homeVideos = [];
var spotlightVideos = [];
var heroVideos = [];
var heroImages = [];
var cinemagraphs = [];
var mobileVideos = [];
var topButtons = [];
var mobileVideos = [];
var headerText = [];
var exploreEqualizers = [];
var paraSlicks = [];
var desktopSeriesGroup = [];
var header;
var mobileMenu;
var preoscars = [];
var slickDotGrabbers = [];
var NUMBER_OF_SLIDES_BEFORE_USING_NUMERALS = 9;

var DO_SMOOTH_SCROLL = false;

$(document).ready(function() {
    function isSmall() {
        return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches;
    }

    function isMediumUp() {
        return matchMedia(Foundation.media_queries.medium).matches || matchMedia(Foundation.media_queries.large).matches;
    }
    window.isMediumUp = isMediumUp;
    $('#color_widget li').on('mouseover', function() {
        $('#color_widget li').removeClass('active');
        $(this).addClass('active');
    });
    $('.js-desktop-series').each(function() {
        desktopSeriesGroup.push(makeDesktopSeries($(this), mobileAndTabletCheck()));
    });
    $('.js-series-carousel').each(function() {
        slickDotGrabbers.push(makeSlickDotGrabber($(this)));
        $(this).slick({
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            autoplaySpeed: 2000,
            dots: true,
            arrows: false,

        });
    });


    
    if ($('#shareFacebook').length > 0) {
        console.log("doing share facebook");
        var ConfigureShare = (function() {
            var fbUrl = getMetaContent('og:url', 'property');
            var fbTitle = getMetaContent('og:title', 'property');
            var fbDescription = getMetaContent('og:description', 'property');
            var fbImage = getMetaContent('og:image', 'property');
            var twitterTitle = getMetaContent('twitter:description', 'name');
            var googleName = getMetaContent('name', 'itemprop');
            var googleDesc = getMetaContent('description', 'itemprop');
            var googleImage = getMetaContent('image', 'itemprop');

            function getMetaContent(name, nameOrProperty, content) {
                content = (content === undefined) ? 'content' : content;
                var meta = $("meta[" + nameOrProperty + "='" + name + "']").attr(content);
                return meta;
            }
            var init = function() {
                $('#shareFacebook').attr({
                    'data-share-title': fbTitle,
                    'data-share-url': fbUrl,
                    'data-share-text': fbDescription,
                    'data-share-image': fbImage
                });
                $('#shareTwitter').attr({
                    'data-share-text': twitterTitle,
                    'data-share-url': fbUrl
                });
                $('#shareGoogle').attr({
                    'data-share-text': googleName,
                    'data-share-url': fbUrl
                });


                $('#shareLinkedIn').attr({
                    'data-share-title': linkedIn_sharing.title,
                    'data-share-url': fbUrl,
                    'data-share-text': linkedIn_sharing.desc
                });

                $('#shareEmail').attr('href', 'mailto:?subject=' + email_vars.subject + '&body=' + email_vars.body);
            };
            return {
                init: init
            };
        })();
        ConfigureShare.init();
        var share = new Share();
         console.log("OUT SHARE");

    }
    $('.article-side-by-side-vertical-mobile, .article-side-by-side-horizontal-mobile').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false
    });
    $('.ugc-cta').each(function(){
        makeUGCCta($(this));
    });
/*    $('.js-oscars-articles-carousel').slick({

    })*/

    var lazyLoader = makeLazyLoader(startCarousels);
    $('.js-carousel-image').each(function() {
        lazyLoader.add($(this));
    });

    $('.js-carousel').on('init', function(event, slick) {
        refreshParaslicks();
        if (slick.slideCount > NUMBER_OF_SLIDES_BEFORE_USING_NUMERALS) {
            $(slick.$dots).addClass('numeric-dots');
        } else {}

    });
    $('.js-twitter').each(function() {
        makeTwitterFeed($(this));
    });

    $('.js-ugc-grid').each(function() {
        ugcGrids.push(makeUGCGrid($(this)));
    });

    function startCarousels() {
        $('.js-carousel').each(function() {

            var prevArrow = $(this).find('.article-carousel-prev');
            var nextArrow = $(this).find('.article-carousel-next');
            var slickTarget = $(this).find('.js-carousel-slicktarget');
            var paraSlick = makeParaSlick($(this));
            paraSlicks.push(paraSlick);
            slickTarget.on('init', function(e, slick) {

                if (slick.slideCount === 1) {

                    $(prevArrow).remove();
                    $(nextArrow).remove();
                }
                refreshParaslicks();
            });
            slickTarget.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                // autoplay: true,
                autoplaySpeed: 2000,
                dots: true,
                arrows: true,

                prevArrow: prevArrow,
                nextArrow: nextArrow,


            });



        });
    }


    $('.js-countdown').each(function(i) {

        makeCountdown($(this), $(this).attr('data-src'));
    });

    $('.the-latest-mobile').slick({
        centerMode: true,
        centerPadding: '40px',
        arrows: false,
        dots: true,
        slidesToShow: 1,
    });
    $('.js-oscars-articles-carousel').slick({
       centerMode: true,
        centerPadding: '40px',
        arrows: false,
        dots: true,
        slidesToShow: 1, 
    });


    $('.pre-oscar-mobile').slick({
        centerMode: true,
        centerPadding: '40px',
        arrows: false,
        dots: true,
        slidesToShow: 1,
        
    });
    
    if (typeof ugc_vars !== 'undefined') {
        $('#daretofirst').tw_input_placeholder({
            speed: 100,
            delay: 2000,
            keywords: ugc_vars,
        });
    }


    $('.js-trending').each(function() {
        makeTrending($('.js-trending-dropdown'), $('.js-trending-results'), $('.js-trending-container'));
    });

    $('.js-top-button').each(function() {
        var topButton = makeTopButton($(this), $('.article-tags-and-share'));
        topButtons.push(topButton);
    });
    $('.js-top-button-oscars').each(function() {
        var topButton = makeTopButton($(this), $('footer .inner-grid'),-20);
        topButtons.push(topButton);
    });

    $('.js-hero-image').each(function() {
        var heroImage = makeHeroImage($(this));
        heroImages.push(heroImage);
    });

    $('.js-article-cinemagraph').each(function() {
        var cinemagraph = makeCinemagraph($(this));
        cinemagraphs.push(cinemagraph);
    });

    $('.latest-header').each(function() {
        var headerSub = headerCalc($(this));
        headerText.push(headerSub);
    });

    //$('.latest-header').css('width', 500);
    $('.f-dropdown a').click(function() {
        $('.f-dropdown').removeClass('open');
    });
    $('.mobile-dropdown-menu a').click(function() {
        $('.mobile-dropdown-menu').removeClass('open');
    });

    if ($('.js-article-inline-video, .js-hero-video,  .js-home-video,  .js-article-home-video,  .js-carousel-video, .js-spotlight-video').length) { // only instantiate video api if there are videos.

        videoSingleton.loadAPI(function() {
            $('.js-article-inline-video').each(function(i) {
                var inlineVideo = makeHomeOrInlineVideo($(this));
                inlineVideos.push(inlineVideo);
            });
            $('.js-hero-video').each(function(i) {
                var heroVideo = makeHeroVideo($(this));
                heroVideos.push(heroVideo);
            });
            $('.js-home-video').each(function(i) {
                var homeVideo = makeHomeOrInlineVideo($(this));
                homeVideos.push(homeVideo);
            });
            $('.js-spotlight-video').each(function(i) {
                if (!window.mobileAndTabletCheck()) {
                    var spotlightVideo = makeSpotlightVideo($(this));
                    spotlightVideos.push(spotlightVideo);
                }
            });
            $('.js-carousel-video').each(function(i) {
                var mobileVideo = makeMobileVideo($(this));
                mobileVideos.push(mobileVideo);
            });
             preoscars.forEach(function(preoscar){
                preoscar.setVideos(mobileVideos);
             });
        }.bind(this));


    }
    $('.js-preoscars').each(function(){
        
        preoscars.push( makePreoscars($(this)));
        
    });

    $('.spotlight-assembly').each(function() {
        spotlights.push(makeSpotlight($(this), spotlightVideos));
    });

    $('.js-explore-equalizer').each(function(i) {

        var exploreEqualizer = makeExploreEqualizer($(this));
        exploreEqualizers.push(exploreEqualizer);
    });

    $('.js-mondrian').each(function(i) {
        var mondrian = makeMondrian(this);
        mondrians.push(mondrian);
    });
    $('.js-mondrian-home').each(function(i) {
        var mondrian = makeMondrian(this, true);
        mondrians.push(mondrian);
    });

    $('#UGC').each(function(){
       ugcs.push(UGC());    
     });


    header = makeHeader($('.sticky-header'));

    mobileMenu = makeMobileMenu($('.mobile-menu'));

    $('.header-menuburger').on('click', function() {
        mobileMenu.open();
    });


    var $window = $(window);

    window.onscroll = function() {
        updateScrolling($(this).scrollTop());
    };

    function updateScrolling(y) {
            ugcGrids.forEach(function(ugcGrids) {
                ugcGrids.respondToScrollEvent($window.width());
            }); 
        if (isMediumUp()) {

            preoscars.forEach(function(preoscar) {
                    preoscar.respondToScrollEvent();
                });
            if (!window.mobileAndTabletCheck()) {
                
                mondrians.forEach(function(mondrian) {
                    mondrian.respondToScrollEvent();
                });
                heroImages.forEach(function(hero) {
                    hero.respondToScrollEvent(y);
                });
                heroVideos.forEach(function(hero) {
                    hero.respondToScrollEvent(y);
                });
                cinemagraphs.forEach(function(hero) {
                    hero.respondToScrollEvent(y);
                });
                desktopSeriesGroup.forEach(function(desktopSeries) {
                    desktopSeries.respondToScrollEvent(y);
                });
            }
            if (header) {

                header.respondToScrollEvent(y);
            }

            topButtons.forEach(function(topButton) {
                topButton.respondToScrollEvent();
            });
        }



    }

    window.onresize =  function() {
        
        spotlights.forEach(function(spotlight) {
            spotlight.respondToResizeEvent($window.width());
        });
        ugcGrids.forEach(function(ugcGrids) {
            ugcGrids.respondToResizeEvent($window.width());
        });
        topButtons.forEach(function(topButton) {
            topButton.respondToResizeEvent();
        });
        exploreEqualizers.forEach(function(exploreEqualizer) {
            exploreEqualizer.respondToResizeEvent();
        });
        mondrians.forEach(function(mondrian) {
            mondrian.respondToResizeEvent();
        });
        inlineVideos.forEach(function(inlineVideo) {
            inlineVideo.respondToResizeEvent();
        });
        homeVideos.forEach(function(homeVideo) {
            homeVideo.respondToResizeEvent();
        });
        heroVideos.forEach(function(heroVideo) {

            heroVideo.respondToResizeEvent();
        });
        ugcs.forEach(function(ugc){
            ugc.respondToResizeEvent();
        });
        refreshParaslicks();
        cinemagraphs.forEach(function(cinemagraph) {
            cinemagraph.respondToResizeEvent();
        });
        headerText.forEach(function(headerSub) {
            headerSub.respondToResizeEvent();
        });
        if (header) {
            header.respondToResizeEvent($window.scrollTop());

        }
        mobileMenu.respondToResizeEvent();
        slickDotGrabbers.forEach(function(slickDotGrabber){
            slickDotGrabber.respondToResizeEvent();
        });
        desktopSeriesGroup.forEach(function(desktopSeries) {
            desktopSeries.respondToResizeEvent();
        });
        ///100000 evetnts
        // $('#UGC').each(function(){
        //    UGC.respondToResizeEvent();  
        //  });


    };

    function refreshParaslicks() {
        paraSlicks.forEach(function(paraSlick) {

            paraSlick.respondToResizeEvent();
        });

    }



});
