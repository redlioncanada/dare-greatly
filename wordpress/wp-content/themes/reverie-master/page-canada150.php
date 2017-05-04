<?php
/*
Template Name: Canada 150
*/
get_header(); ?>

<?php
if (get_field('show_mondrian') == "Yes") {
	include(locate_template('partial-mondrian.php'));
}

if (get_field('show_projects_divider') == "Yes") {
	$dividerTitle = get_field('projects_divider_title');
	$dividerBody = get_field('projects_divider_body');
	include(locate_template('partial-canada150-divider.php'));
}

if (get_field('show_projects') == "Yes") {
	include(locate_template('partial-canada150-projects.php'));
}

if (get_field('show_moments_divider') == "Yes") {
	$dividerTitle = get_field('moments_divider_title');
	$dividerBody = get_field('moments_divider_body');
	include(locate_template('partial-canada150-divider.php'));
}

include(locate_template('partial-canada150-moments.php'));
?>

<?php get_footer(); ?>
