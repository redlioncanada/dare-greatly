<?php 
$top_button_copy = get_field('top_button_copy','options');
if(!($top_button_copy)){
	$top_button_copy = "top";
}
?>
<div class="article-top-button show-for-medium-up js-top-button">
	<?php echo $top_button_copy; ?> <img src='<?php echo get_template_directory_uri(); ?>/img/top_arrow.png'>
</div>