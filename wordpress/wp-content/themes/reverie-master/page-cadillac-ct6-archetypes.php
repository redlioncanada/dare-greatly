<?php get_header();


 if(have_posts()) :?>
	<?php while (have_posts()) : the_post(); ?>

                <?php echo get_the_content(); ?>
<?php endwhile; endif; 

get_footer();
?>