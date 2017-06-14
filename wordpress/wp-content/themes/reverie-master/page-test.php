<?php
/*
Template Name: Test
*/
get_header(); ?>
<style>#wpadminbar {display: none;}</style>
<div id="test">
	<?php

	$hellobarText = "Have a daring idea? Submit it in 151 words or less via email to: %s";
	$hellobarCTA = "mailto:FIND151@CADILLAC.COM";
	$hellobarCTAText = "FIND151@CADILLAC.COM";
	$hellobarCategory = "Find151 LP";
	$hellobarAction = "Email Entry Click";
	$hellobarLabel = "Hello Bar";
	include(locate_template('partial-hellobar.php'));
	?>
</div>

<?php get_footer(); ?>
