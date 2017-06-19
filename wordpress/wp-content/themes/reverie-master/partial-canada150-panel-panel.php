<?php
	$title = $panel['panel_title'];
	$subtitle = $panel['panel_subtitle'];
	$imageURL = $panel['panel_image'];
	$preview = $panel['panel_preview'];
	$body = $panel['panel_body'];
?>

<div class="canada150-panel-panel canada150-panel-desktop">
	<div class="canada150-panel-image">
		<img src="<?php echo $imageURL; ?>" />
	</div>
	<div class="canada150-panel-content">
		<h3 class="canada150-panel-title"><?php echo $title; ?></h3>
		<h3 class="canada150-panel-subtitle"><?php echo $subtitle; ?></h3>
		<p class="canada150-panel-preview canada150-panel-body"><?php echo $preview; ?></p>
		<p class="canada150-panel-body hide"><?php echo $body; ?></p>
		<span class="canada150-panel-see-more">SEE MORE.</span>
	</div>
</div>