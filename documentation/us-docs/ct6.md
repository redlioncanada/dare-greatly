CT6
===

CT6 is a wordpress page and ACF set. It consists of 5 "tiles" which each correspond to an article. The articles are scheduled for a future date. Prior to their publication, the tile shows with an overlay and a countdown. At the time of publication, these are removed, and the article can be clicked through.

Business Logic
--------------

The business logic is as follows (taken from JIRA CG-399):

1. When the ct6 landing page is first publicized: the first article will already be
published. Any unreleased articles will have an opacity overlay and be
unclickable. The countdown will only be displayed on the next article to
be published (as designed, the top right tile.) If any release consists of more than one article, only
one will display the countdown. For example, the second release is
two articles, but only article #2 will display the countdown, #3 will just
have the overlay.
Note that on mobile, only published articles, and the article which presently shows the countdown, will be visible.

2. when each article countdown reaches zero, the following happens:
	* to an observer looking at the page when the countdown reaches zero, the item with the countdown (and any items scheduled for release at the same time) will lose its overlay treatment and become clickable. The caption will appear.
	* the articles are available to anyone with the full link.
	* the articles are available from the ct6 landing page.
	* the articles do NOT show up in "explore", "latest", or "trending".

3. at a later date (and this can be a date and not a specific time), the article will be released from this last
condition, and will surface on the front page as would any other article.
It can be featured in the experience slots, hero slot, and will be
eligible to show up in explore, trending and latest as any normal article
would.

4. Currently, the admin is set up as follows.
From the articles admin, CMS user schedules the articles for the time the countdown should be released. They also set a new variable in those articles (defer_visibility_until) to the date when the articles should appear on the home page.
From the new CT6 page, the CMS user is presented with a series of five tabs specific to each tile, each entry of which contains the following:
	* tile article (a selector which allows the user to choose an article)
	* tile caption
	* tile image(s) - if not set, these default to the primary required images for the article.
	* radio button setting whether to display the countdown, in the event that more than one article share a release
	* if radio button selected, a text field for the copy which appears directly over the countdown itself.

PHP
---

* Partial-ct6.php (within the theme folder) contains the backend logic and markup for rendering each tile. This includes the following:

	* for each tile, get the number of seconds until its article is published. This results in 5 durations, which are negative if the article is already published.
	* given the 5 durations, find the lowest duration above 0. If there are multiple durations with the same value, find all of them.
	* also, find the NEXT lowest duration, as this will be used to turn on the subsequent counter if the user is watching the page when one countdown expires. Again, if there are multiple, find all of them.
	* Once the above is established, pull all the necessary fields to display each tile and loop through them to create the markup. Use the values for the current countdown and the values for the subsequent countdown to set javascript and css hooks for each countdown to operate correctly.
	* in setting javascript hooks, an attribute representing the seconds to live is created for any future article, so the countdown is operational.

Javascript
----------

* Countdown.js is a single javascript closure which is created for any js-countdown hook. It looks for the seconds to live and renders a days:hours:minutes:seconds countdown which updates in real time. 

* Countdown.js has another important job: it uses an AJAX call to hit the article page when the countdown expires (if someone is viewing the page at that time). This is important because it forces wp_cron to run before the user actually clicks, ensuring that the article will actually be published at the time the user visits. Without this check, the first user to click would get a 404 since the page would only move from scheduled to live after that first hit.

[back](README.md)
