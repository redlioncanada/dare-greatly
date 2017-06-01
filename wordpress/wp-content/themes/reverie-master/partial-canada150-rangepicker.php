<div class="canada150-rangepicker">
	<input type="hidden" class="slider-input" value="150" />
</div>
<div class="canada150-rangepicker-anchored">
	<div class="canada150-rangepicker-container"><input type="hidden" class="slider-input" value="150" /></div>
</div>
<script>
	$(function() {
		$('.slider-input').jRange({
			from: 150,
			to: 1,
			width: 620,
			value: 150,
			step: 1,
			ondragend: goToMoment,
			onbarclicked: goToMoment
		})

		var Element = function(selector) {
			this.jQuery = $(selector)
			this.top = undefined
			this.height = undefined
			this.Update = function() {
				if (!this.jQuery.length) return
				this.top = this.jQuery.offset().top
				this.height = this.jQuery.height()
			}
			this.Update()
		}

		var elements = {
				inlineSlider: new Element('.canada150-rangepicker'),
				anchoredSlider: new Element('.canada150-rangepicker-anchored'),
				moments: cacheMoments()
			},
			windowHeight = $(window).height(),
			scrollTop = $(window).scrollTop(),
			lastMomentIndex = 0

		var resizeTimeout = undefined
		$(window).resize(function() {
			windowHeight = $(window).height()

			if (resizeTimeout !== undefined) {
				clearTimeout(resizeTimeout)
				resizeTimeout = undefined
			}
			resizeTimeout = setTimeout(function() {  //throttle caching of elements when resizing window manually
				resizeTimeout = undefined
				elements.moments = cacheMoments()
			}, 500)
		})

		$(window).scroll(function() {
			scrollTop = $(window).scrollTop()

			if (scrollTop > elements.inlineSlider.top - elements.inlineSlider.height) { //if we've scrolled past the slider element
				elements.anchoredSlider.jQuery.addClass('show')
			} else {
				elements.anchoredSlider.jQuery.removeClass('show')
			}

			if (scrollTop > elements.inlineSlider.top - elements.inlineSlider.height - windowHeight) {
				var currentMomentIndex = getCurrentMoment()
				if (currentMomentIndex !== lastMomentIndex) {
					$('.slider-input').jRange('setValue', elements.moments.length - currentMomentIndex)
					lastMomentIndex = currentMomentIndex
				}
			}
		})

		function goToMoment(index) {
			$('html, body').animate({
				scrollTop: elements.moments[index].top
			})

			if ('ga' in window) {
				ga('send', 'event', 'Find151 LP', 'Slider Clicked', index+1)
			}
		}

		function cacheMoments() {
			var arr = []
			for (var index = 0; index < 150; index++) {
				if (!!elements && 'moments' in elements && !!elements.moments) {
					elements.moments[index].Update()
				} else {
					arr.push(new Element('.canada150-moment-' + (index+1)))
				}
			}
			return arr.length ? arr : elements.moments
		}

		function getCurrentMoment() {
			for (var index = 0; index < elements.moments.length; index++) {
				var moment = elements.moments[elements.moments.length - index - 1]

				if (scrollTop <= moment.top + moment.height / 2 - windowHeight / 2) return Math.max(index - 1, 0)
			}
			return false
		}
	})
</script>