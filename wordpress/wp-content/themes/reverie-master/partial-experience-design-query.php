<?php

wp_reset_query();

if( have_rows('experience_design_center') ):

         // loop through the rows of data; 
         // use the name of the row layout to refer to partials/articles item.
    while ( have_rows('experience_design_center') ) : the_row(); 
        $experience_design = (object) array();
        $experience_design->title = get_sub_field('title');
        $experience_design->customTitle = get_sub_field('custom_title');
        $experience_design->customDesc = get_sub_field('custom_text');
        $experience_design->customImg  = get_sub_field('custom_image');
        $experience_design->article = get_sub_field('article_project');
         $experience_design->cta = get_field('experience_design_cta');
        $experience_design->permalink = esc_url(get_permalink($experience_design->article->ID));
        $wp->used_posts[] = $experience_design->article->ID;

    endwhile;

    endif;

?>
