<?php
	$title = $moment['moments_title'];
	$imageURL = $moment['moments_image'];
	$imageTemplateID = $moment['moments_image_size'];
	$body = $moment['moments_body'];

	$classes = "canada150-moment ";
	$classes .= "canada150-moment-" . $momentCount . " ";
	$classes .= "canada150-moment-template-" . $imageTemplateID . " ";
	$classes .= "image-" . ($imageLeft == true ? "left" : "right");
?>

<div class="<?php echo $classes; ?>">
	<div class="canada150-moment-image">
		<div class="canada150-moment-number"><?php echo $momentCount; ?></div>
		<img class="lazyload" src="<?php echo get_template_directory_uri(); ?>/img/canada150/canada150-placeholder-<?php echo $imageTemplateID; ?>.jpg" data-original="<?php echo $imageURL; ?>">
	</div>
	<div class="canada150-moment-content">
		<h3 class="canada150-moment-title"><?php echo $title; ?></h3>
		<div class="small-grey"></div>
		<p class="canada150-moment-body"><?php echo $body; ?></p>
	</div>
</div>