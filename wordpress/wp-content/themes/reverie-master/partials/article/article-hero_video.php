<?php
$image = get_sub_field('hero_video_poster')['url'];

$h = get_sub_field('hero_video_poster')['height'];
$w = get_sub_field('hero_video_poster')['width'];
if(isset($h) && $h !== 0){
$ar = $w/$h;
} else {
	$ar = 1;
}
$embed_code = get_sub_field('youtube_embed_code');
?>
    <div data-embed="<?php echo $embed_code; ?>" ar="<?php echo $ar; ?>" class='full-width js-hero-video hero-video article-component article-marquee-wrapper '>
        <div class='marquee-inside' >
        	<div class='js-iframe-target pillarboxed-video' ></div>
        	<div class='hero-background-image-target'  style='background-image:url(<?php echo $image ?>)'></div>
            <div class='play-button'><img src='<?php echo get_template_directory_uri(); ?>/img/playButton.png'></div>
        </div>
    </div>
