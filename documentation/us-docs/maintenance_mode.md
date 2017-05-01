WP Maintenance Mode
===================

WP Maintenance Mode is a public plugin with several modules like a "contact" button, countdown, social links, etc.

However, because it's an option for emergencies or for conditions when the site may be temporarily broken, it's designed to have as few dependencies as possible.

The plugin allows for customization through several filters and by creating a template file, wp-content/wp-maintenance-mode.php. Unfortunately, this has to be placed outside the theme, a bit non-standard for our architecture.

Filters `wpmm_styles` and `wpmm_scripts` exist so that additional javascript and css can be used. However, our wp-maintenance-mode.php page has been designed with the styles inline. The function added to the `wpmm_styles` filter actually *removes* the default stylesheet. Similarly, the `wpmm_scripts` filter *removes* jquery if none of the added modules are being used.