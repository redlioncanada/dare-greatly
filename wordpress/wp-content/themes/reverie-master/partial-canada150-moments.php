<div class="canada150-moments row">
<?php
	$imageLeft = true;
	include(locate_template('partial-canada150-repeater-data.php'));

	foreach($moments as $index => $moment) {
		$momentCount = 150 - $index;
		include(locate_template('partial-canada150-moment.php'));
		$imageLeft = !$imageLeft;
	}
?>
</div>