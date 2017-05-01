<?php
$image = get_field('hero_image')['url'];
$h = get_field('hero_image')['height'];
$w = get_field('hero_image')['width'];
$overlay_title = get_field('overlay_title');
if(isset($h) && $h !== 0){
$ar = $w/$h;
} else {
	$ar = 1;
}
?>
    <div class='full-width js-hero-image hero-image article-component oscars-marquee-wrapper' ar='<?php echo $ar; ?>'>
        <div class='hero-background-image-target' style='background-image:url(<?php echo $image ?>)'></div>
        <div class='play-button'>
            <div class='play-button-inside'>
                <div class='overlay-dare-greatly'><?php echo $overlay_title; ?></div>
                
                </div>
        </div>
    </div>
