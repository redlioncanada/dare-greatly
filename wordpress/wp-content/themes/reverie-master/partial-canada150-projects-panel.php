<?php
	$title = $panel['project_title'];
	$imageURL = $panel['project_image'];
	$body = $panel['project_body'];
?>

<div class="canada150-projects-panel canada150-projects-desktop">
	<div class="canada150-projects-image">
		<img src="<?php echo $imageURL; ?>" />
	</div>
	<div class="canada150-projects-content">
		<h3 class="canada150-projects-title"><?php echo $title; ?></h3>
		<p class="canada150-projects-body"><?php echo $body; ?></p>
		<span class="canada150-projects-see-more"><?php if ($isEnglish) {echo 'WATCH VIDEO';} else {echo 'WATCH VIDEO';} ?></span>
	</div>
</div>