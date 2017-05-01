Dare Greatly Phase 2
====================

### [See release notes for v1.2, released 2/1/16](documentation/ReleaseNotes-1.2.md)

## Project Summary

Dare Greatly is a responsive website, built on Wordpress, with the following hierarchy:

* Home
	* **Hero** module, showing a parallax mondrian image and a featured article
	* **The Latest module**, showing three of the most recent articles, one of which features inline video, but excluding any articles explicitly chosen on the home page (in the **Hero** or **Experience** sections).
	* **Experience design center**, linking to another featured article
	* **Email subscription module**, an email entry field and button
	* **Experience cadillac module**, linking to another featured article
	* **Trending module**, showing the 4 most visited stories and allowing the user to toggle between varying timespans. Excludes any article explicitly chosen for a home module, and excludes articles presently in **the latest**
	
* About
	* mission statement
	* full bleed image
	* letter from the President of Cadillac.
* Explore
	* Email module
	* full listing of all articles, paged with a non-infinite LOAD MORE button.
* Articles
	* linked from Home, Explore, and other articles. 
	* contain a series of interchangeable content modules like pullquotes, mondrian parallax elements, carousels, and running copy. 
	* To manage these modules, the ACF Repeater and Flexible content plugins are used. The CMS user can insert, delete and reorder modules to compose an article.
* CT6
	* A special event for February 2016, not linked from elsewhere in the site.
	* contains 5 tiles which each reference an article. Each tile can display a countdown prior to the article's scheduled publication.

### Taxonomy

For this phase, there are no second-tier pages showing specific categories or tags, and there's no search functionality. However, a taxonomy system has been established, with the following three groups:

	* Category - Single-level custom taxonomy, though built on the wordpress hierarchical taxonomy model. One category is required for each article and no article can have more than one Category.
	* Topic - Single-level custom taxonomy. Rules TBD.
	* Vehicle - Single-level custom taxonomy. Rules TBD.

### Partners

Many articles have been produced with a partner media site, such as Esquire or The Verge. For this reason, articles can possess a Produced With credit and logo. Both of these are custom fields and appear in many locations throughout the site.

### Header

There's a unified header throughout the site which allow the user to link to Home, About, or Explore, or visit an alternate language version of the site (which has not been updated to this phase as of this writing) The header responds to scroll position and rollover, collapsing when not needed. On mobile the menu choices collapse into a mobile menu controlled by a menu icon, the **menuburger**.

### Footer

The universal footer contains a legal notice, links to various Cadillac terms and utility links, another prompt for email subscription, and links to Cadillac social properties. 

### Table of Contents

- [Getting Started](getting_started.md)
- [Credentials](credentials.md)
- [Article Modules](article_modules.md)
- [Javascript architecture](javascript.md)
- [PHP](php.md)
- [The CT6 Page](ct6.md)
- [SASS architecture](sass.md)
- [Wordpress Admin](wp.md)
- [Plugins](plugins.md)
- [Server Config](server.md)
- [How to update Production](updateProduction.md)
- [Maintenance mode](maintenance_mode.md)





