
<?php get_header(); ?>
 <div class="row">
<!-- Row for main content area -->
<div class="small-8 large-6 columns small-centered large-uncentered medium-uncentered" id="content" role="main">
	
	<article <?php post_class() ?> id="post-<?php the_ID(); ?>">
		<header>
			<h1 class="entry-title"><?php _e('Page Not Found.', 'reverie'); ?></h1>
		</header>
		<div class="entry-content">
			<div class="error">
				<p class="bottom"><?php _e('The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Please check your spelling or click the back button.', 'reverie'); ?></p>
			</div>
			<a href="/" class="learn-more">Return to the homepage</a>
		</div>
	</article>
</div>
</div>
<?php get_sidebar(); ?>

<?php get_footer(); ?>