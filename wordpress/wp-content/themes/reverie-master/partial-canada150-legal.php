<div class='canada150-legal home-component row'>
	<?php
		foreach($legal[$languageIndex] as $index => $legalCopy) {
			include(locate_template('partial-canada150-legal-copy.php'));
		}
	?>
</div>