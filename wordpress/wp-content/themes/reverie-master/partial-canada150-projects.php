<script>
<?php
   $site = get_blog_details() -> path;
    $language = $site == '/fr/' ? 'fr' : 'en';

    ?>

var videoLink =[];
	<?php if( have_rows('projects_video') ): ?>

	<?php while( have_rows('projects_video') ): the_row(); 
		// vars
		$videoLinks = get_sub_field('video_link');
		?>
		<?php if( $videoLinks ): ?>
				videoLink.push('<?php echo $videoLinks ?>');
			<?php endif; ?>

		<?php endwhile; ?>
<?php endif; ?>
	var videoController = function(target, videoIds, readyCallback) {
		var parentElement = $(target)
		var videos = []
		var readyCount = 0
		var video = function(id, callback) {
			var _video
			function onReady() {
				if (typeof callback === 'function') callback.call(this)
			}

			function play() {
				// _video.playVideo()
			}

			function stop() {
				_video.seekTo(0)
				_video.stopVideo()
			}

			function pause() {
				_video.pauseVideo()
			}


			var videoElement = $('<div class="video-wrapper" data-id="' + id + '"><div id="video-' + id + '"></div></div>')
			videoElement.appendTo(parentElement)

			_video = new YT.Player('video-'+id, {
				videoId: id,
				playerVars: {
					'modestbranding': 1,
					'showinfo': 0,
					'fs': 0,
					'autoplay': 0,
					'rel': 0,
				},
				events: {
					'onReady': onReady
				}
			})

			function onResize() {
				var width = videoElement.width()
				$(videoElement).css('height', width / 1.777777777)
			}
			window.addEventListener('resize', onResize)
			onResize()

			return {
				play: play,
				pause: pause,
				stop: stop
			}
		}

		function stopAll() {
			for (var id in videos) {
				videos[id].stop()
			}
		}

		function stop(index) {
			if (index >= 0 && index < videos.length) videos[index].stop()
		}

		function pauseAll() {
			for (var id in videos) {
				videos[id].pause()
			}
		}

		function pause(index) {
			if (index >= 0 && index < videos.length) videos[index].pause()
		}

		function play(index) {
			if (index >= 0 && index < videos.length) videos[index].play()
		}

		function videoReady() {
			if (++readyCount === Object.keys(videos).length) {
				readyCallback.call(this, parentElement)
			}
		}

		for (var index in videoIds) {
			var id = videoIds[index]
			videos.push(video(id, videoReady))
		}

		return {
			videos: videos,
			stopAll: stopAll,
			stop: stop,
			pauseAll: pauseAll,
			pause: pause,
			play: play,
			element: parentElement
		}
	}

	var ready = 0
	var iframeAPIInterval = setInterval(function() {	//sometimes the api will fail to call APIReady()
		if (ready == 1 && (!!window.YT && 'Player' in window.YT)) {
			clearInterval(iframeAPIInterval)
			initLightbox()
		}
	}, 100)

	function initLightbox() {
		var videos = videoController('.canada150-projects-lightbox-slick', videoLink, function(element) {
			$(element).slick()
		})
		var lightboxElement = $('.canada150-projects-lightbox')
		var lightboxSlickElement = $('.canada150-projects-lightbox-slick')
		var lightboxCloseElement = $('.canada150-projects-lightbox-close')
		var lightboxBackgroundElement = $('<div/>', {
			class: 'canada150-lightbox-background',
			style: 'position: fixed; top: 0; left: 0; background: black; opacity: 0.6; z-index: 1001; width: 100%; height: 100%; visibility: hidden; opacity: 0;'
		})

		$('body').append(lightboxBackgroundElement)

		$('.canada150-projects-see-more, .canada150-projects-image').click(function(event) {
			var index = $(event.target).closest('.canada150-projects-panel').index()
			lightboxSlickElement.slick('slickGoTo', index, true)
			showLightbox(index)
		})

		$('.canada150-projects-carousel-image img').click(function(event) {
			var index = +$(event.target).closest('.canada150-projects-carousel-image').attr('data-slick-index')
			lightboxSlickElement.slick('slickGoTo', index, true)
			showLightbox(index)
		})

		$('.home-mondrian-top .cta a, .home-mondrian-top .article-mondrian, .home-mondrian-top > .show-for-small-only > .show-for-small-only, .mondrian-play').click(function() {
			lightboxSlickElement.slick('slickGoTo', 0, true)
			showLightbox(0)
		})

		lightboxSlickElement.on('afterChange', function(event, slick, currentSlide) {
			videos.stop(currentSlide - 1)
			videos.play(currentSlide)
		})

		lightboxBackgroundElement.click(function() {
			videos.pauseAll()
			hideLightbox()
		})

		lightboxCloseElement.click(function() {
			videos.pauseAll()
			hideLightbox()
		})

		function showLightbox(index) {
			lightboxElement.stop(true).css('visibility', 'visible').animate({ opacity: 1 }, function() {
				videos.play(index)
			})
			lightboxBackgroundElement.css('visibility', 'visible').animate({ opacity: 0.6 })
		}

		function hideLightbox() {
			lightboxElement.stop(true).animate({ opacity: 0 }, function() {
				lightboxElement.css('visibility', 'hidden')
				videos.stopAll()
			})
			lightboxBackgroundElement.stop(true).animate({ opacity: 0 }, function() {
				lightboxBackgroundElement.css('visibility', 'hidden')
			})
		}
	}
	$(function() {
		ready++

		$('.canada150-projects-carousel-wrapper').slick({
			centerMode: true,
			slidesToShow: 1,
			dots: true,
			adaptiveHeight: true,
			autoplay: true,
			autoplaySpeed: 4000,
			arrows: false
		});

		$('.canada150-projects-carousel-wrapper').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
			var items = $('.canada150-projects-carousel-content-item');
			items.stop(true).animate({ opacity: 0 }, 200, function() {
				items.css({ 'zIndex': 1, display: 'none' });

				var currentItem = $('.canada150-projects-carousel-content-item-'+nextSlide)
				currentItem.css({ zIndex: 2, display: 'block' })
				currentItem.animate({ opacity: 1 }, 200);
			});
		});

		$('.canada150-projects-carousel-wrapper, .slick-dots, .canada150-projects-see-more').on('click mousedown touchstart', function() {
			$('.canada150-projects-carousel-wrapper').slick('slickPause');
		})
	})
</script>

<div class="canada150-projects">
	<div class="canada150-projects-lightbox">
		<div class="canada150-projects-lightbox-slick"></div>
		<div class="canada150-projects-lightbox-close"></div>
	</div>
	<div class="row spotlight-subheader">
        <div class="title-section text-left small-only-text-left mobile-stuff">
        <?php if($language=='en'){ ?>
           <span>PROJECTS</span>
            <?php } ?>
        <?php if($language=='fr'){ ?>
           <span>PROJETS</span>
            <?php } ?>
          
        </div>
        <?php if($language=='en'){ ?>
        <div class="spotlight-line"></div>
        <?php } ?>
        <?php if($language=='fr'){ ?>
        <div class="spotlight-line" style= "width: 1987px;" ></div>
        <?php } ?>
    </div>
    <div class="canada150-projects-wrapper hide-for-small-only">
		<?php
			$panelData = get_field('projects');
			foreach($panelData as $index => $panel) {
				include(locate_template('partial-canada150-projects-panel.php'));
			}
		?>
	</div>
	<div class="canada150-projects-wrapper show-for-small-only">
		<div class="canada150-projects-carousel-wrapper">
			<?php
				foreach($panelData as $index => $panel) {
					include(locate_template('partial-canada150-projects-carousel-image.php'));
				}
			?>
		</div>
		<div class="canada150-projects-carousel-content">
			<?php
				foreach($panelData as $index => $panel) {
					include(locate_template('partial-canada150-projects-carousel-content.php'));
				}
			?>
		</div>
	</div>
</div>