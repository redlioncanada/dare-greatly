<?php
/*
Template Name: Full Width
*/
header("Cache-Control: no-cache, max-age=0, must-revalidate, no-store"); // HTTP/1.1
get_header();

if ( ! post_password_required() ) {
	get_template_part('partial', 'ct6'); 
} else {
	echo get_the_password_form();
}


get_footer(); 

?>