<?php
	$title = get_sub_field('moments_title');
	$image = get_sub_field('moments_image');
	$imageTemplateID = get_sub_field('moments_image_size');
	$imageURL = $image['url'];
	$body = get_sub_field('moments_body');

	$classes = "canada150-moment ";
	$classes .= "canada150-moment-" . $index . " ";
	$classes .= "canada150-moment-template-" . $imageTemplateID . " ";
	$classes .= "image-" . ($imageLeft == true ? "left" : "right");
?>

<div class="<?php echo $classes; ?>">
	<div class="canada150-moment-image columns">
		<div class="canada150-moment-number"><?php echo $index; ?></div>
		<img class="lazyload" data-original="<?php echo $imageURL; ?>">
	</div>
	<div class="canada150-moment-content columns">
		<h3 class="canada150-moment-title"><?php echo $title; ?></h3>
		<div class="small-grey"></div>
		<p class="canada150-moment-body"><?php echo $body; ?></p>
	</div>
</div>