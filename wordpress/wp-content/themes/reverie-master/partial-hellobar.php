<?php
/**
	$hellobarCategory: the ga tracking category
	$hellobarAction: the ga tracking action
	$hellobarLabel: the ga tracking label
	$hellobarCTA: the a tag url
	$hellobarCTAText: the display text for the a tag
	$hellobarText: The text surrounding the a tag, %s is replaced with the a tag
*/

	if ($hellobarText !== null && $hellobarCTA !== null && hellobarCTAText !== null) :
	//replaces all instances of %s in $hellobarText with the a tag
	$tag = "<a href='" . $hellobarCTA . "'>" . $hellobarCTAText . "</a>";
	$hellobarText = str_replace("%s", $tag, $hellobarText);
?>

<script>
(function() {
	//have to inject via JS since it needs to be inline above the header
	var html = "<div class='hellobar'>\
					<div class='text'><?php echo $hellobarText; ?></div>\
					<div class='close-button'>X</div>\
				</div>";

	$(function() {
		$('body').prepend(html);
		$('.hellobar .close-button').click(function() {
			$('.hellobar').addClass('close');
		});

		<?php if ($hellobarCategory !== null && $hellobarAction !== null): ?>
			if ('ga' in window) {
				$('.hellobar a').click(function() {
					<?php if ($hellobarLabel !== null): ?>
						ga('send', 'event', '<?php echo $hellobarCategory; ?>', '<?php echo $hellobarAction; ?>', '<?php echo $hellobarLabel; ?>');
					<?php else: ?>
						ga('send', 'event', '<?php echo $hellobarCategory; ?>', '<?php echo $hellobarAction; ?>');
					<?php endif; ?>
				})
			}
		<?php endif; ?>
	});
})();
</script>
<?php endif; ?>