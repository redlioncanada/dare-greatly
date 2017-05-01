<?php
$image = get_sub_field('image')['url'];
$h = get_sub_field('image')['height'];
$w = get_sub_field('image')['width'];
if(isset($h) && $h !== 0){
$ar = $w/$h;
} else {
	$ar = 1;
}
?>
<div 
	class='full-width js-hero-image article-component article-marquee-wrapper' 
	ar='<?php echo $ar; ?>'>
	<div class='hero-background-image-target'  style='background-image:url(<?php echo $image ?>)'></div>
		<div class='marquee-inside'></div>
</div>