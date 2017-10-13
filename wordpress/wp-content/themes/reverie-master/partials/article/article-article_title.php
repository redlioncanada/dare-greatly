<?php

$main_category = get_group_a($post->ID);   

$article_date = the_date('','','',FALSE);      
$article_title = get_sub_field('article_title');
if(!$article_title){
	$article_title = get_title_with_fallback();
}
$article_presented_with_logo = get_sub_field('presented_with_logo');
$article_presented_with_text = get_sub_field('presented_in_partnership_with');
$article_presented_with = $article_presented_with_text or $article_presented_with_logo;

$produced_with_bottom_label = get_field('produced_with_bottom_label','options');
function image_tag_with_size_or_text($image_object,$text,$max_height){
	if($image_object){
		$width = $image_object['width'];
		$height = $image_object['height'];
		$newheight = min($max_height,$height);
		$newwidth = round( $width * $newheight/$height );
		return "&nbsp;<img alt='" . $text ."' src='" . $image_object['url'] . "' style='width:".$newwidth."px; height:". $newheight ."px;'>";
	} else {
		return "<span>" . $text . "</span>";
	}
}

?>

<div class="row article-component" role="main">
	<div class="inner-grid large-8 medium-8 small-8 small-centered  large-collapse medium-collapse small-collapse columns article-title-and-slug">
		<div class='article-category-and-date-slug'>
		<span class='article-category'><?php echo $main_category ?></span>
		<span class='article-date'><?php echo $article_date ?></span>
	</div>
	<h1><?php echo $article_title ?></h1>
	
	
	</div>
	<?php if($article_presented_with) : ?>
	<div class="row article-component">
		<div class='presented-with columns large-8 medium-8 small-8 small-centered'><span><?php echo $produced_with_bottom_label; ?></span>

			<?php echo image_tag_with_size_or_text($article_presented_with_logo,$article_presented_with_text,20); ?>

		</div>
		</div>

	<?php endif; ?>
</div>