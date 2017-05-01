Javascript Architecture
=======================

Scripts are included in the build using the Wordpress `wp_enqueue_script` functionality, to avoid directly placing script tags in the header. This can be found in the theme folder under `wp-content/lib/clean.php`.

This includes the following external dependencies:

	* JQuery - used throughout due to Wordpress and Slick dependencies
	* Greensock - animations
	* Greensock scrollTo Plugin - scrolling animations
	* Slick - carousels
	* Foundation - Logic to select media queries, dropdown UI.
	* Modernizr - Feature detection
	* SiteCatalyst - Analytics
	* Omniture - Analytics
	* dg.js - our application.

JQuery, Greensock (and plugin), and Slick are registered using the cloudflare CDN library. **However** -- as a fallback, in `footer.php`, there's a block of script which determines whether or not these have loaded, and loads a local copy if not. That block is as follows:

Inline
------
Several analytics calls live in the footer at the time of this writing. Whether that's absolutely necessary is uncertain, but we're using the code given to us in the manner described by the vendor.

Plugins
-------
Plugins may have their own javascript. For instance, `easy-load-more` enqueues itself. Because of the CDN jquery approach above, this plugin, which attempted to store data on behalf of jquery, had to be slightly rewritten, and the version exists as an included artifact rather than a package from wpackagist.

Admin Validation
----------------
in the `<themefolder>/js/validate_article.js` file, a series of checks are made in javascript to determine whether the article contains a valid Facebook image, at least one Category and topic have been selected. **note that this is in js, not js-src, because it's not transpiled!**

DG.js
-----

dg.js is the main application. It's build from js-src/app.js and various required modules, and is built from source using Browserify / Gulp.

At load, it looks for any class associated with a javascript module and generally runs an `each` loop on elements of that class, and instantiates a module for each. In the resize and scroll events, these are looped through again. The looping eliminates the need for a conditional and allows all elements to function with multiple instances onscreen.

The modules are fairly self-contained with the exception of the video system. There are several classes which use inline youtube embeds.

```
<themefolder>/js-src
├── app.js
└── modules
    ├── Cinemagraph.js - keeps cinemagraph at correct size and aspect ratio
    ├── Header.js - roll-over and scroll animations for the header
    ├── HeaderCalc.js - actually for the look of the page subheaders, which have a rule that gets width
    │                   based on the font. polls the page looking for a change in the span, then sets the 
    │                   underline accordingly.
    ├── ExploreEqualizer - makes sure the "sign up" tile and the first small article 
    │                       tile add up to the correct height on the Explore page.
    ├── HeroVideo.js - video at the top of an article
    ├── HomeOrInlineVideo.js - video on the homepage or inline within an article
    ├── MobileMenu.js - the animation for the mobile menu
    ├── MobileTrendingHovers.js - gives mobile trending a single tap state, allows only one to be 
    │							  active at a time
    ├── MobileVideo.js - allows video with in the mobile "latest" carousel used on the home page.
    ├── Mondrian.js - the mondrian element which appears on the home page and in some articles.
    ├── Share.js - sharing functionality.
    ├── TopButton.js - button that allows user to scroll to the top.
    ├── Spotlight.js - spotlight carousel (fairly specialized, since it overrides Slick functionality on desktop)
    ├── SpotlightVideo.js - spotlight video (basically a copy of HomeOrInlineVideo... could be refactored)
    ├── DesktopSeries.js - Handles desktop seriazlied content on articles. Captures scroll to allow user to flip through the items. Mobile version is still in app.js (it's a 
    │   vanilla slick carousel)
    ├── PreoscarCarousel.js - Handles somewhat customized carousel for preoscars page.
    ├── ParaSlick.js - this is an adjunct to the slick carousel behavior for the main carousel. 
    │                   It finds the widest aspect ratio in the carousel and uses that as a basis for max height.
    ├── Trending.js - handles the button that swaps the three trending states, 
    │			  	  fades content in and out as appropriate.
    ├── WhereIsElementInViewport.js - used for Mondrian to know what point in the animation to be at.
    └── video
        ├── VideoEmbedController.js - composed within each element above that uses inline video; does 
        │							  the basic task of using the youtube api.
        └── VideoSingleton.js - tracks ALL videos on the page, 
        						making sure that at any given time only one is playing.
```


[back](README.md)

