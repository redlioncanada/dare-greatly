<?php
$image = get_field('hero_video_poster')['url'];
$h = get_field('hero_video_poster')['height'];
$w = get_field('hero_video_poster')['width'];
$overlay_title = get_field('overlay_title');
if(isset($h) && $h !== 0){
$ar = $w/$h;
} else {
	$ar = 1;
}
$embed_code = get_field('youtube_embed_code');
?>
    <div data-embed="<?php echo $embed_code; ?>" ar="<?php echo $ar; ?>" class='full-width js-hero-video hero-video article-component oscars-marquee-wrapper '>
        <div class='marquee-inside' >
        	<div class='js-iframe-target pillarboxed-video' ></div>
        	<div class='hero-background-image-target'  style='background-image:url(<?php echo $image ?>)'></div>
            <div class='play-button'><div class='play-button-inside'><div class='overlay-dare-greatly'><?php echo $overlay_title; ?></div><img src='<?php echo get_template_directory_uri(); ?>/img/playButton.png'></div></div>
        </div>
    </div>
