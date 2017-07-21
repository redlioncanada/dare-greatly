<?php
	$title = $panel['project_title'];
	$imageURL = $panel['project_image'];
	$body = $panel['project_body'];
?>

<div class="canada150-projects-carousel-content-item canada150-projects-carousel-content-item-<?php echo $index; ?>">
	<h3 class="canada150-projects-title"><?php echo $title; ?></h3>
	<div class="canada150-projects-divider"></div>
	<p class="canada150-projects-body"><?php echo $body; ?></p>
	<span class="canada150-projects-see-more"><?php if ($isEnglish) {echo 'WATCH VIDEO';} else {echo 'WATCH VIDEO';} ?></span>
</div>