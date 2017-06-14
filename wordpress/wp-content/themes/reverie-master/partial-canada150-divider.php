<div class='canada150-divider home-component row'>
	<div class="large-centered medium-10 small-10 medium-centered small-centered columns">
		<h2 class="text-center canada150-divider-title"><?php echo $dividerTitle ?></h2>
		<p class="text-center canada150-divider-body"><?php echo $dividerBody ?></p>

		<?php if ($dividerCTACopy !== null && $dividerCTALink !== null && $dividerCTAText !== null): ?>
		<p class="text-center canada150-divider-body">
			<?php echo $dividerCTACopy ?> <a href="<?php echo $dividerCTALink ?>"><?php echo $dividerCTAText ?></a>
		</p>
		<?php endif; ?>
	</div>
</div>

<script>
<?php if ($dividerCategory !== null && $dividerAction !== null): ?>
	if ('ga' in window) {
		$('.canada150-divider a').click(function() {
			<?php if ($dividerLabel !== null): ?>
				ga('send', 'event', '<?php echo $dividerCategory; ?>', '<?php echo $dividerAction; ?>', '<?php echo $dividerLabel; ?>');
			<?php else: ?>
				ga('send', 'event', '<?php echo $dividerCategory; ?>', '<?php echo $dividerAction; ?>');
			<?php endif; ?>
		})
	}
<?php endif; ?>
</script>