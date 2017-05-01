# Article Modules

This document describes the article modules for Dare Greatly. Each is described by specific Content element within the Custom Fields section of the wordpress CMS.

PHP for each module is contained in `partials/article/` within the theme folder.

SCSS for each module is contained in `scss/partials/article/` within the theme folder.

Where necessary, javascript is located in `js-src/modules` within the theme folder. Generally, it will be triggered by querying a class with the appropriate `js-` prefix in the javascript file `js-src/app.js`. 

As an example, for the mondrian component:

* `partials/article/article-mondrian_parallax_image_1.php` contains the markup and php.

* `scss/partials/article/mondrian-a.scss` contains the scss. 

* `js-src/modules/Mondrian.js` contains the controlling javascript, which is triggered by querying `.js-mondrian` in the file `js-src/app.js`

## Flex Modules

The below are *interchangeable* throughout the page, using the Flex Content ACF system. They can be repeated, reordered, and any number are valid.

* hero_image

* hero_video
	Pillarboxes the embedded video. Embedded video is passed through `data-embed` attribute, then picked up by javascript with the js-hero-video hook. Embedded video uses several general modules which are used elsewhere on the site.

* article_title
	Displays the article title, pub date, "Presented with" and partner logo, and Category.

* rich_text
	Can also display images, but is basically a chunk of markup from wordpress within a foundation column.

* pull_quote_1

* pull_quote_2

* horizontal_image_side-by-side
	Collapses to slick carousel on mobile. Captions use :before pseudoclass to show "LEFT" and "RIGHT".

* mondrian_parallax_image_1
	Consists of a mask (fixed), an image (dynamic), and a javascript hook (described in the example above). On mobile, functionality is turned off, but still uses the mask and image as with desktop.

* vertical_images_side-by-side
	Similar to the above horizontal.

## Fixed modules

The below are *non-interchangeable*. They can exist a fixed number of times in a specific place.

* tag_and_share - contains several submodules:
	* *tags* shows any of the Group A (category) or Group B (topic) items which were selected for the article. This can be toggled on or off globally in the Global / Article section of the Admin. This is split off as a separate partial file, because it can be toggled on and off.
	* *attribution* Shows a series of attribute fields such as "Written by", "Photography by", etc. This is split off as a separate partial file, for historical reasons (it used to be fully logically separated from the sharing and tags)
	* *sharing* is a series of standard share buttons (facebook, twitter, etc.). This is contained in the main php file, `article-tag_and_share.php`

* related_and_promotional - contains two submodules:
	* vehicle_spotlight: If toggled on in the article admin, a specific vehicle name, image and deep link are specified and displayed.
	* related articles: shows either 2 articles if vehicle_spotlight is on, or 3 if it's off.

[back](README.md)