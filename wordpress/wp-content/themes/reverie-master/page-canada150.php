<?php
/*
Template Name: Canada 150
*/
get_header(); ?>

<script>
$(function() {
	$('img.lazyload').lazyload({
		threshold: 300,
		effect: "fadeIn"
	});

	//send an event to ga for every 10% of page scrolled
	var win = $(window),
		doc = $(document),
		windowHeight = win.height(),
		documentHeight = doc.height(),
		lastSection = 0;

	win.resize(function(event) {
		windowHeight = win.height()
		documentHeight = doc.height()
	})

	win.scroll(function(event) {
		var scrollY = win.scrollTop(),
			section = Math.floor(((scrollY + windowHeight) / documentHeight) * 10);

		if (section !== lastSection) {
			if (section > 0 && 'ga' in window) {
				ga('send', 'event', 'Find151 LP', 'Scroll Reach', section*10);
			}
			lastSection = section;
		}
	})
	//end page scroll event
})
</script>

<div id="canada150">
	<?php
	$site = get_blog_details() -> path;
	$languageIndex = $site == '/fr/' ? 'fr' : 'en';
	$isEnglish = $languageIndex == 'en';

	if (get_field('show_hellobar') == "Yes") {
		$hellobarText = get_field('hellobar_text');
		$hellobarCTA = get_field('hellobar_cta');
		$hellobarCTAText = get_field('hellobar_cta_text');
		$hellobarCategory = 'Find151 LP';
		$hellobarAction = 'Email Entry Click';
		$hellobarLabel = 'Hello Bar';
		include(locate_template('partial-hellobar.php'));
	}

	include(locate_template('partials/article/article-top_button.php'));
	include(locate_template('partial-canada150-repeater-data.php'));

	if (get_field('show_mondrian') == "Yes") {
		include(locate_template('partial-mondrian.php'));
	}

	if (get_field('show_projects_divider') == "Yes") {
		$dividerTitle = get_field('projects_divider_title');
		$dividerBody = get_field('projects_divider_body');
		$dividerCTACopy = get_field('projects_divider_cta_body');
		$dividerCTALink = get_field('projects_divider_cta_link');
		$dividerCTAText = get_field('projects_divider_cta_text');
		$dividerCategory = 'Find151 LP';
		$dividerAction = 'Email Entry Click';
		$dividerLabel = 'Body Copy';
		include(locate_template('partial-canada150-divider.php'));
	}

	include(locate_template('partial-canada150-panel.php'));

	if (get_field('show_projects') == "Yes") {
		include(locate_template('partial-canada150-projects.php'));
	}

	if (get_field('show_moments_divider') == "Yes") {
		$dividerTitle = get_field('moments_divider_title');
		$dividerBody = get_field('moments_divider_body');
		$dividerCTACopy = null;
		$dividerCTALink = null;
		$dividerCTAText = null;
		$dividerCategory = null;
		$dividerAction = null;
		$dividerLabel = null;
		include(locate_template('partial-canada150-divider.php'));
	}

	include(locate_template('partial-canada150-rangepicker.php'));
	include(locate_template('partial-canada150-moments.php'));
	include(locate_template('partial-canada150-legal.php'));
	?>
</div>

<?php get_footer(); ?>
