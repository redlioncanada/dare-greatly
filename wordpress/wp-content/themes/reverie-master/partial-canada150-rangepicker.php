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
			ondragend: goToMoment,
			onbarclicked: goToMoment
		})

		var pickerElement = $('.canada150-rangepicker')
		$(window).scroll(function() {
			var scrollTop = $(window).scrollTop(),
				top = pickerElement.offset().top,
				height = pickerElement.height()

			if (scrollTop > top - height) {
				$('.canada150-rangepicker-anchored').addClass('show')
			} else {
				$('.canada150-rangepicker-anchored').removeClass('show')
			}
		})

		function goToMoment(val) {
			$('html, body').animate({
				scrollTop: $('.canada150-moment-' + val).offset().top - 150
			})
		}
	})
</script>