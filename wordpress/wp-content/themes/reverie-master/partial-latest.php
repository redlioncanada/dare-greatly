<?php 

$today = date('Ymd');
$vidArgs = array(
 'posts_per_page' => 1,
 'post_type'     => 'articles',
 'orderby'        => 'most_recent',
 'meta_key' => 'is_video_article',
 'post_status' => 'publish',
 'post__not_in' => $wp->used_posts,
  
 'meta_query'    => 
                    array(
                      'relation' => 'AND',
                      array(
                        'key' => 'is_video_article', 
                        'value' => '"Yes"', 
                        'compare' => 'LIKE',
                        ),
                      array(
                        'relation' => 'OR',
                        array(
                             'key' => 'defer_visibility_until',
                             'value' => '',
                             'compare' => 'NOT EXISTS'
                             ),
                          array(
                              'key'   => 'defer_visibility_until',
                              'compare' => '<=',
                              'value'   => $today
                              ),
  
                      )
                    )
 
  );
 
$video_query = new WP_Query( $vidArgs );

//print_r($video_query);

$args = array(
  'posts_per_page' => 2,
  'post_type'     => 'articles',
  'orderby'        => 'most_recent',
  'post_status' => 'publish',
  'post__not_in' => $wp->used_posts,
  'meta_query' => array(
      'relation' => 'AND',
      array(
                      'relation' => 'OR',
                      array(
                           'key' => 'defer_visibility_until',
                           'value' => '',
                           'compare' => 'NOT EXISTS'
                           ),
                        array(
                            'key'   => 'defer_visibility_until',
                            'compare' => '<=',
                            'value'   => $today
                            ),

                    ),
      array(
        'key' => 'is_video_article',
        'value' => 'Yes',
        'compare' => 'NOT LIKE'
        ),
    )
  );
$recent_query = new WP_Query( $args );
//Check if there are at least 2 posts (aka posts[1])
if(isset($recent_query->posts[1])) {
  $first = $recent_query->posts[0];
  $second = $recent_query->posts[1];

  $wp->used_posts[] = $first->ID;
  $wp->used_posts[] = $second->ID;
}
else {
  echo 'You need at least 2 Articles';
}
function get_category_for($post){
  return get_group_a($post->ID); 
}
?>
 <div class='home-component the-latest-component'>
<div class="row">
 <div class="title-section text-left columns large-5 small-only-text-center">
  <span><?php echo get_field('latest_title'); ?></span>            
</div>

</div>
<div class="row full-width latest-header real-latest-header title-section-border"></div>
<div class="row show-for-medium-up">
<div class="cta desktop-cta columns medium-10"><a href="<?php echo get_field('explore_page_link'); ?>" class="latest-explore"><?php echo get_field('latest-explore-more')?></a>
  </div>
  </div>

<!-- THE LATEST MODULE DESKTOP -->
<div class="row the-latest show-for-medium-up home-row home-component">
     <div class="large-6 medium-6 small-10 columns">
       <div class="row">
    <?php if( $video_query->have_posts() ): ?>
      <?php while( $video_query->have_posts() ) : $video_query->the_post(); ?>
       <?php $wp->used_posts[] = $post->ID;?>
       <div class="large-10 padding-bottom-12 js-home-video" data-embed="<?php echo get_field('video_url');?>">
        <div class="js-iframe-target">
         <div class="play-button"><img src="<?php echo get_template_directory_uri() ?>/img/playButton.png"></div>
         <img class='home-video-poster js-video-sizeable' src="<?php echo get_field('video_article_poster_image')['url'];?> ">
       </div>
     </div>
   </div>
   <div class="row">
     <div class="large-10">
      <div class="row">
       <div class="caption large-5 medium-4 small-10 columns negative-padding-12">
        <p class="category"><?php echo get_category_for($post); ?></p>
        <p  class="latest-caption-p title"> <a href="<?php echo the_permalink(); ?>" class="latest-title"><?php the_title();?></a></p>
        </a>
        <?php 
        # from functions.php
        generate_produced_with($post->ID,'p','produced-with',get_the_permalink())?>
     </div>
   <?php endwhile; ?>
   <?php else: ?>
<!--     <p> No Videos are here</p>
 -->     <div class="large-10 padding-bottom-12 js-home-video" data-embed="<?php echo get_field('video_url');?>">
        <div class="js-iframe-target">
         <div class="play-button"><img src="<?php echo get_template_directory_uri() ?>/img/playButton.png"></div>
         <img class='home-video-poster js-video-sizeable' src="<?php echo get_field('video_article_poster_image')['url'];?> ">
       </div>
     </div>
   </div>
   <div class="row">
     <div class="large-10">
      <div class="row">
       <div class="caption large-5 medium-4 small-10 columns negative-padding-12">
        <p class="category"><?php echo get_category_for($post); ?></p>
        <p  class="latest-caption-p title"> <a href="<?php echo the_permalink(); ?>" class="latest-title"><?php the_title();?></a></p>
        </a>
        <?php 
        # from functions.php
        generate_produced_with($post->ID,'p','produced-with',get_the_permalink())?>
     </div>
 <?php endif; ?>
 <?php wp_reset_postdata(); ?>
 <div class="large-5 medium-4 small-10  columns">
   <a href="<?php echo esc_url(get_permalink($first->ID)); ?>">  <img src="<?php echo get_field('1x1_square',$first->ID)['url'] ?>">
     <div class="row">
       <div class="caption large-10 medium-10 small-10 columns">
         <p class="category"><?php echo get_category_for($first); ?></p>
         <p class="title"><?php echo $first->post_title; ?></p>
         <?php 
         # from functions.php
         generate_produced_with($first->ID,'p','produced-with');?>
       </div></div></a>
     </div>
   </div>
 </div>
</div>
</div>
<div class="large-4 medium-4 small-10 columns latest-padding-top">
  <a href="<?php echo esc_url(get_permalink($second->ID)); ?>">
   <img src="<?php echo get_field('4x5_vertical',$second->ID)['url'] ?>">
   <div class="row">
    <div class="caption large-10 medium-10 small-5 columns">
     <p class="category"><?php echo get_category_for($second); ?></p>
     <p class="title"><?php echo $second->post_title; ?></p>
     <?php 
     # from functions.php
     generate_produced_with($second->ID,'p','produced-with');?>
   </div>
 </div>
</a>
</div>
</div>
<!--/END THE LATEST DESKTOP MODULE -->
<!-- THE LATEST MODULE MOBILE -->
<!--/END THE LATEST  MOBILE -->
<div class="row the-latest show-for-small-only home-row small-collapse">
<?php if( $video_query->have_posts() ): ?>
  <?php while( $video_query->have_posts() ) : $video_query->the_post(); ?>
     <div class="medium-10 small-10 columns">
      <div class="the-latest-mobile">
       <div>
        <div id="carousel-video" class='' data-embed="<?php echo get_field('video_url');?>">
         <a href="<?php echo the_permalink(); ?>"><div class="js-iframe-target">

          <div class="play-button"><img src="<?php echo get_template_directory_uri() ?>/img/playButton.png"></div>
          <img class='home-video-poster js-video-sizeable' src="<?php echo get_field('1x1_square')['url'];?> ">
        </div></a>
      </div>
      <div class="caption large-10 medium-10 small-10 columns">
       <a href="<?php echo the_permalink(); ?>">
        <p class="category"><?php echo get_category_for($post); ?></p>
        <p class="title"><?php the_title();  ?></p>
        <?php 
        # from functions.php
        generate_produced_with($post->ID,'p','produced-with');?>
      </a>
    </div>
  </div>
   <?php endwhile; ?>
   <?php else: ?>
      <div class="medium-10 small-10 columns">
      <div class="the-latest-mobile">
       <div>
<!--        <p>No video here</p>
 -->        <div id="carousel-video" class='' data-embed="<?php echo get_field('video_url');?>">
         <a href="<?php echo the_permalink(); ?>"><div class="js-iframe-target">

          <div class="play-button"><img src="<?php echo get_template_directory_uri() ?>/img/playButton.png"></div>
          <img class='home-video-poster js-video-sizeable' src="<?php echo get_field('1x1_square')['url'];?> ">
        </div></a>
      </div>
      <div class="caption large-10 medium-10 small-10 columns">
       <a href="<?php echo the_permalink(); ?>">
        <p class="category"><?php echo get_category_for($post); ?></p>
        <p class="title"><?php the_title();  ?></p>
        <?php 
        # from functions.php
        generate_produced_with($post->ID,'p','produced-with');?>
      </a>
    </div>
  </div>
<?php endif; ?>
<?php wp_reset_postdata(); ?>
<div>
  <a href="<?php echo esc_url(get_permalink($first->ID)); ?>">
   <img src="<?php echo get_field('1x1_square',$first->ID)['url'] ?>">
   <div class="caption large-10 medium-10 small-10 columns">
    <p class="category"><?php echo get_category_for($first); ?></p>
    <p class="title"><?php echo $first->post_title; ?></p>
    <?php 
    # from functions.php
    generate_produced_with($first->ID,'p','produced-with');?>
  </a>
</div>
</div>
<div>
  <a href="<?php echo esc_url(get_permalink($second->ID)); ?>">
   <img src="<?php echo get_field('1x1_square',$second->ID)['url'] ?>">
   <div class="caption large-10 medium-10 small-10 columns">
    <p class="category"><?php echo get_category_for($second); ?> </p>
    <p class="title"><?php echo $second->post_title; ?></p>
    <?php 
    # from functions.php
    generate_produced_with($second->ID,'p','produced-with');?>
  </a>
</div>
</div>
</div>
<div class="show-for-small-only explore-more-mobile text-center home-cta">
  <a href="<?php echo get_field('explore_page_link'); ?>">  <div class="cta">
   <?php echo get_field('latest-explore-more')?>
 </div></a>
</div>
</div>
</div>
</div>