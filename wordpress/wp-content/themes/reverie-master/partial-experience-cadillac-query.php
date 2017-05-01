<?php

wp_reset_query();

if( have_rows('experience_cadillac') ):

         // loop through the rows of data; 
         // use the name of the row layout to refer to partials/articles item.
    while ( have_rows('experience_cadillac') ) : the_row(); 
        $experience_cadillac = (object) array();
        $experience_cadillac->title = get_sub_field('title');
        $experience_cadillac->customTitle = get_sub_field('custom_title');
        $experience_cadillac->customDesc = get_sub_field('custom_text');
        $experience_cadillac->customImg  = get_sub_field('custom_image');
        $experience_cadillac->article = get_sub_field('article_project');
        $experience_cadillac->cta = get_field('experience_cadillac_cta'); 
        $experience_cadillac->permalink = esc_url(get_permalink($experience_cadillac->article->ID));
        $wp->used_posts[] = $experience_cadillac->article->ID;

    endwhile;

    endif;

?>
