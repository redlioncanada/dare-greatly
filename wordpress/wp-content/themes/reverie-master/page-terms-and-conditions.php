<?php get_header();

if ( ! post_password_required() ) {
 if(have_posts()) :?>
	<?php while (have_posts()) : the_post(); ?>
		<div class="row page-terms-and-conditions">
    <div class="columns small-8 small-centered medium-uncentered medium-7">
				<h1><?php the_title(); ?></h1>
                <?php the_content(); ?>
                </div>
<?php endwhile; endif; 
}else {
	echo get_the_password_form();
}
get_footer();
?>