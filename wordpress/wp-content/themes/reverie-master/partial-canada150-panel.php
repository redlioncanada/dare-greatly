<script>
	$(function() {
		<?php if ($isEnglish) {echo 'var isEnglish=true;';} else {echo 'var isEnglish=false;';} ?>
		$('.canada150-panel-panel .canada150-panel-see-more').click(function(event) {
			var parent = event.target.closest('.canada150-panel-panel'),
				preview = $(parent).find('.canada150-panel-preview'),
				body = $(parent).find('.canada150-panel-body').eq(1),
				seemore = $(parent).find('.canada150-panel-see-more'),
				isOpen = !$(body).hasClass('hide');

			if (isOpen) {
				$(body).addClass('hide');
				$(seemore).text(isEnglish ? 'SEE MORE' : 'PLUS');
			} else {
				$(body).removeClass('hide');
				$(seemore).text(isEnglish ? 'SEE LESS' : 'MOINS');
			}
		});

		$('.canada150-carousel-content .canada150-panel-see-more').click(function(event) {
			var parent = event.target.closest('.canada150-panel-carousel-content-item'),
				preview = $(parent).find('.canada150-panel-preview'),
				body = $(parent).find('.canada150-panel-body').eq(1),
				seemore = $(parent).find('.canada150-panel-see-more'),
				isOpen = !$(body).hasClass('hide');

			if (isOpen) {
				$(body).addClass('hide');
				$(seemore).text(isEnglish ? 'SEE MORE' : 'PLUS');
			} else {
				$(body).removeClass('hide');
				$(seemore).text(isEnglish ? 'SEE LESS' : 'MOINS');
			}
		});

		$('.canada150-carousel-wrapper').slick({
			centerMode: true,
			slidesToShow: 1,
			dots: true,
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 4000
		});

		$('.canada150-carousel-wrapper').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			var items = $('.canada150-panel-carousel-content-item');
			items.stop(true).animate({ opacity: 0 }, 200, function() {
				items.css({ 'zIndex': 1, display: 'none' });

				var currentItem = $('.canada150-panel-carousel-content-item-'+nextSlide)
				currentItem.css({ zIndex: 2, display: 'block' })
				currentItem.animate({ opacity: 1 }, 200);
			});
		});

		$('.canada150-carousel-wrapper, .slick-dots, .canada150-panel-see-more').on('click mousedown touchstart', function() {
			$('.canada150-carousel-wrapper').slick('slickPause');
		})
	})
</script>

<div class="canada150-panel">
	<div class="row spotlight-subheader">
        <div class="title-section text-left small-only-text-left mobile-stuff">
            <span>PANEL</span>
        </div>
        <div class="spotlight-line"></div>
    </div>
    <div class="canada150-panel-wrapper hide-for-small-only">
		<?php
			$panelData = get_field('panel');
			foreach($panelData as $index => $panel) {
				include(locate_template('partial-canada150-panel-panel.php'));
			}
		?>
	</div>
	<div class="canada150-panel-wrapper show-for-small-only">
		<div class="canada150-carousel-wrapper">
			<?php
				foreach($panelData as $index => $panel) {
					include(locate_template('partial-canada150-panel-carousel-image.php'));
				}
			?>
		</div>
		<div class="canada150-carousel-content">
			<?php
				foreach($panelData as $index => $panel) {
					include(locate_template('partial-canada150-panel-carousel-content.php'));
				}
			?>
		</div>
	</div>
</div>