<?php
$image = get_field('poster_image')['url'];
$mp4 = get_field('mp4')['url'];
$ogg = get_field('ogg')['url'];
$webm = get_field('webm')['url'];
$overlay_title = get_field('overlay_title');
?>
    <div class='oscars-hero-cinemagraph js-article-cinemagraph ' style='background-image:url(<?php echo $image ?>)'>
        <div class='content' style='height:500px'>
            <video class='show-for-medium-up' autoplay loop muted poster="<?php echo $image ?>">
                <source src="<?php echo $mp4 ?>" type="video/mp4">
                <source src="<?php echo $ogg ?>" type="video/ogg">
                <source src="<?php echo $webm ?>" type="video/webm">
            </video>
            <div class='play-button'>
                <div class='play-button-inside'>
                    <div class='overlay-dare-greatly'><?php echo $overlay_title; ?></div>
                </div>
            </div>
        </div>
    </div>
