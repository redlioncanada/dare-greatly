<?php
	if( have_rows('moments') ):
		while ( have_rows('moments') ) : the_row();
?>
			<div class="row">
		        <div class="title-section text-left columns large-5 small-only-text-center">
		            <span><?php echo get_sub_field('moments_title') ?></span>
		        </div>
		    </div>
		    <div class="row full-width latest-header title-section-border">
		    </div>
		    <div class="row experience-cadillac home-row home-component">
		        <div class="large-7 medium-10 small-9 large-uncentered small-centered columns">
		            <img src="<?php echo get_sub_field('moments_image')['url'] ?>">
		        </div>
		        <div class="large-3 medium-10 small-9 columns small-centered large-uncentered right-col experience-copy">
					<?php echo get_sub_field('moments_body') ?>
		        </div>
		    </div>
	<?php endwhile; ?>
<?php endif; ?>