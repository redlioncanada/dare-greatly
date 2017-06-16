<script>
	$(function() {
		$('.canada150-panel-see-more').click(function(event) {
			var parent = event.target.closest('.canada150-panel-panel'),
				preview = $(parent).find('.canada150-panel-preview'),
				body = $(parent).find('.canada150-panel-body').eq(1),
				seemore = $(parent).find('.canada150-panel-see-more'),
				isOpen = !$(body).hasClass('hide');

			if (isOpen) {
				$(body).addClass('hide');
				$(seemore).text('SEE MORE.');
			} else {
				$(body).removeClass('hide');
				$(seemore).text('SEE LESS.');
			}
		})
	})
</script>

<div class="canada150-panel row">
	<div class="row spotlight-subheader">
        <div class="title-section text-left small-only-text-left mobile-stuff">
            <span>PANEL</span>
        </div>
        <div class="spotlight-line"></div>
    </div>
<?php
	$panelData = get_field('panel');
	foreach($panelData as $index => $panel) {
		include(locate_template('partial-canada150-panel-panel.php'));
	}
?>
</div>