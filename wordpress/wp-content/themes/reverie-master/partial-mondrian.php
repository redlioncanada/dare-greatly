<?php 



$mondrian_post = get_field('featured_article_for_mondrian');
$mondrian_image = get_field('featured_article_image')['url'];
$mondrian_mask = get_field('mondrian_image_template');
$mondrian_summary = get_field('featured_article_summary');
$mondrian_CTA = get_field('mondrian_cta');
$mondrian_title = get_the_title($mondrian_post->ID);
$mondrian_link = get_permalink($mondrian_post->ID);
$wp->used_posts[] = $mondrian_post->ID;
/*// The Loop
if ( $the_query->have_posts() ) {
	
	if ( $the_query->have_posts() ) {
		$the_query->the_post();
		
		$mondrian_image = get_field('featured_post_image')['url'];
		$mondrian_summary = get_field('article_summary');
		$mondrian_title = get_the_title();
        $mondrian_link = get_permalink();
	} else {
	// no posts found

	}
}*/
?>
<div class="row article-mondrian-a home-mondrian-a home-mondrian-top  medium-collapse article-component home-component">
  <div class='large-centered medium-10 small-10 medium-centered small-centered columns show-for-medium-up'>
     <div class='article-mondrian js-mondrian-home' data-href='<?php echo $mondrian_link;?>'>
     
        <div class='mondrian-image-clipper'><img class='mondrian-image' src='<?php echo $mondrian_image;?>'></div>
        <img class='mondrian-mask' src='<?php echo get_template_directory_uri(); ?>/img/home/mondrian_mask_<?php echo $mondrian_mask; ?>.png'>
   
    </div>


    <div class='home-mondrian-summary medium-offset-6' style="pointer-events:visible;">
        <h3><?php echo $mondrian_title ?></h3>
        <div class="small-grey"></div>
        <p><?php echo $mondrian_summary ?></p><div class="cta"><a href="<?php echo $mondrian_link;?>"><?php echo $mondrian_CTA; ?></a></div>
    </div>
</div>

<div class='small-10 small-centered columns show-for-small-only'>
    <div class='large-centered medium-10 small-10 medium-centered small-centered columns show-for-small-only'>
        <img src='<?php echo $mondrian_image;?>'>
    </div>
    <div class='home-mondrian-summary columns medium-3 medium-offset-3'>
        <h3><a class="no-gold" href="<?php echo $mondrian_link;?>"><?php echo $mondrian_title ?></a></h3>
        <div class="small-grey"></div>
        <p><?php echo $mondrian_summary ?></p>
        <div class="cta"><a href="<?php echo $mondrian_link;?>"><?php echo $mondrian_CTA; ?></a></div>
    </div>
</div>
</div>
