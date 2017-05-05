<div class="canada150-rangepicker">
	<input type="hidden" class="slider-input" value="150" />
</div>
<script>
	$(function() {
		var init = false

		$('.slider-input').jRange({
			from: 150,
			to: 1,
			width: 620,
			onstatechange: function(value) {
				if (!init) {	//don't trigger on initial load
					init = true
					return
				}

				$('html, body').animate({
					scrollTop: $('.canada150-moment-' + value).offset().top - 150
				})
			}
		})

		$(window).scroll(function() {
			var scrollTop = $(window).scrollTop()
			console.log(scrollTop)
		})
	})
</script>