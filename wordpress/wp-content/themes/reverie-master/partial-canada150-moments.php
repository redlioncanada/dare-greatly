<div class="canada150-moments row">
<?php
	$imageLeft = true;

	foreach($moments as $index => $momentData) {
		$moment = $momentData[$languageIndex];
		$moment['moments_image'] = $momentData['moments_image'];
		$moment['moments_image_size'] = $momentData['moments_image_size'];
		$moment['index'] = $momentData['index'];
		$momentCount = 150 - $index;

		include(locate_template('partial-canada150-moment.php'));
		$imageLeft = !$imageLeft;
	}
?>
</div>