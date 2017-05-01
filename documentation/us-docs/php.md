PHP
===

The site uses the reverie-master, heavily customized (and not, as of this writing, branched into a child theme)

`functions.php` contains a series of items to avoid repetition. Among these:

`generate_produced_with($postid,$tag,$classes,$permalink = null)`

a function to generate the produced with line from the appropriate custom field, given a post id, and to generate nothing if said field is blank. This is used throughout the site.

`get_title_with_fallback($post = null)`

returns the title, using the custom article_title field first, then defaulting to the wordpress title.


## adding password protected pages

Any time a password-protected page is added to the site, its slug needs to be added to a conditional in `exclude_protected_action()` under `functions.php`.

## actions

Anything custom which is dependent on a wordpress action lives in functions.php. For instance:

`create_author_metatag` is attached to `wp_head`, and adds an og metatag so facebook shares get the partner site, if one exists.

Other functions are attached to actions for the admin panel, providing support for category radio buttons, hiding default taxonomies and other utility features.

[back](README.md)