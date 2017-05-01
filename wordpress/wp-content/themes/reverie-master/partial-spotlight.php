<?php

wp_reset_query();

if( have_rows('spotlight_articles') ):
    $spotlight_articles = array();
         // loop through the rows of data; 
         // use the name of the row layout to refer to partials/articles item.
    while ( have_rows('spotlight_articles') ) : the_row(); 
        $spotlight_article = (object) array();
        $spotlight_article->article = get_sub_field('spotlight_article');
        $spotlight_article->title = get_sub_field('spotlight_article_title');

        $spotlight_article->desktop_image = get_sub_field('spotlight_article_desktop_image');
        if(empty($spotlight_article->desktop_image)){
            $spotlight_article->desktop_image = get_field('8x5_horizontal',$spotlight_article->article->ID);
        }
        $spotlight_article->mobile_image = get_sub_field('spotlight_article_mobile_image');
        if(empty($spotlight_article->mobile_image)){
            $spotlight_article->mobile_image = get_field('1x1_square',$spotlight_article->article->ID);
        }

        
        $spotlight_article->description = get_sub_field('spotlight_article_description');
        $spotlight_article->cta  = get_sub_field('spotlight_cta');
        $spotlight_article->is_video = (get_field('is_video_article',$spotlight_article->article->ID) !== '' && get_field('is_video_article',$spotlight_article->article->ID)[0] == "Yes");
        if($spotlight_article->is_video){
            $spotlight_article->video_class = 'js-spotlight-video';
            $spotlight_article->video_url = get_field('video_url',$spotlight_article->article->ID);
        } else {
            $spotlight_article->video_class = '';
        }

        $spotlight_article->permalink = esc_url(get_permalink($spotlight_article->article->ID));

        $wp->used_posts[] = $spotlight_article->article->ID;
        $spotlight_articles[] = $spotlight_article;
    endwhile;

    endif;

?>

    <div class="row spotlight-subheader">
        <div class="title-section text-left small-only-text-center">
            <span><?php echo get_field('spotlight_title');?></span>
        </div>
    </div>
    <div class="row full-width latest-header title-section-border">
    </div>
    <div class='spotlight-assembly'>
    <button type="button" data-role="none" class="spotlight-slick-prev slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;">Previous</button>
    <div class='spotlight-slick-desktop show-for-medium-up'>
    <?php foreach($spotlight_articles as $spotlight_article) : ?>


    <div class="home-component slide-element">
          
            <div class="spotlight-copy-holder large-3 medium-3 columns">
            <div class='spotlight-center-vertical'>
                <h3><a href="<?php echo $spotlight_article->permalink; ?>"><?php  if (empty($spotlight_article->title)) {
                echo $spotlight_article->article->post_title;
                    }
            else {
                echo $spotlight_article->title;
            } ?></a></h3>
                <div class="small-grey"></div>
                <p>
                    <?php echo $spotlight_article->description; ?>
                </p>
                <div class='cta'><a class="learn-more" href="<?php echo $spotlight_article->permalink; ?>"><?php echo $spotlight_article->cta; ?> </a></div>
            </div>
            </div>
        
        <div data-embed="<?php echo $spotlight_article->video_url; ?>" class="large-7 medium-7 small-9 large-uncentered small-centered columns spotlight-image-holder <?php echo $spotlight_article->video_class; ?>" >
        <div class='slideable-image js-iframe-target'>
           <a class="learn-more" href="<?php echo $spotlight_article->permalink; ?>">
            <img class=' js-video-sizeable' src="<?php echo $spotlight_article->desktop_image['url']; ?>">
           <?php if($spotlight_article->is_video) : ?><div class='play-button'><img src='<?php echo get_template_directory_uri(); ?>/img/playButton.png'></div><?php endif; ?>
            </a>
            </div>
        </div>

    </div>
   
   <?php endforeach; ?>
   </div>
<button type="button" data-role="none" class="spotlight-slick-next slick-next slick-arrow" aria-label="Next" role="button" style="display:block">Next</button>
  <div class='show-for-small-only'>
    <div class="row spotlight-slick-mobile-image">
    <?php foreach($spotlight_articles as $spotlight_article) : ?>
  
        <div class="small-8">
            <a class="learn-more" href="<?php echo $spotlight_article->permalink; ?>"> 
            <img src="<?php echo $spotlight_article->mobile_image['url']; ?>">
            <?php if($spotlight_article->is_video) : ?><div class='play-button'><img src='<?php echo get_template_directory_uri(); ?>/img/playButton.png'></div><?php endif; ?>
            </a>
        </div>
     
     <?php endforeach; ?>
     </div>
     <div class="row spotlight-slick-mobile-copy">
     <?php foreach($spotlight_articles as $spotlight_article) : ?>
          
          
            <div class="small-8 small-centered">
                <div class='spotlight-mobile-copy'>
                <h3><a href="<?php echo $spotlight_article->permalink; ?>"><?php  if (empty($spotlight_article->title)) {
                echo $spotlight_article->article->post_title;
                    }
            else {
                echo $spotlight_article->title;
            } ?></a></h3>
                <div class="small-grey"></div>
                <p>
                    <?php echo $spotlight_article->description; ?>
                </p>
                <div class='cta'><a class="learn-more" href="<?php echo $spotlight_article->permalink; ?>"><?php echo $spotlight_article->cta; ?> </a></div>
            </div></div>
       
    
 <?php endforeach; ?>
</div>
    </div>
   
   </div>
   </div>

