<?php 
$top_button_copy = get_field('top_button_copy','options');
if(!($top_button_copy)){
	$top_button_copy = "top";
}
?>
<div class="article-top-button js-top-button">
	<span class="article-top-button-copy"><?php echo $top_button_copy; ?></span> <img src='<?php echo get_template_directory_uri(); ?>/img/top_arrow.png'>
</div>