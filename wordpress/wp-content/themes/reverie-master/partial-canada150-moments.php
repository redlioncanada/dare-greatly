<?php if( have_rows('moments') ): ?>
	<div class="canada150-moments row">

	<?php
		$index = 150;
		$imageLeft = true;
		while ( have_rows('moments') ) {
			the_row();
			include(locate_template('partial-canada150-moment.php'));
			$index--;
			$imageLeft = !$imageLeft;
		}
	?>

	</div>
<?php endif; ?>