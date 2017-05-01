<?php 

$image_url = get_sub_field('image')['url'];
$image_caption = get_sub_field('caption');
$image_subcaption = get_sub_field('subcaption');

$content = get_sub_field('content');
$embed_code = get_sub_field('embed_code');
$has_video = $embed_code != "";
?>
    <!-- article-copy-with-left-margin-image -->
    <div data-embed="<?php echo $embed_code; ?>" class="row article-copy-with-left-margin-image article-component small-collapse <?php if($has_video) { echo ' js-article-inline-video'; } ?>">
        <div class='article-left-margin-image medium-uncentered columns medium-3 small-8'>
        <div class='article-left-margin-image-with-play-button <?php if($has_video) { echo 'js-iframe-target margin-video'; } ?>' style='position: relative' >
            <img class=' <?php if($has_video) { echo 'js-video-sizeable'; } ?>' src="<?php echo $image_url; ?>">
            <?php if($has_video){ ?>
            <div class='play-button'><img src='<?php echo get_template_directory_uri(); ?>/img/playButton.png'></div>
            <?php } ?>
        </div>
            <div class='article-left-margin-caption-and-cta columns small-8 small-centered'>
                <div class='article-left-margin-caption'><?php echo $image_caption; ?></div>
                <div class='article-left-margin-cta'><?php echo $image_subcaption; ?></div>
            </div>
        </div>
        <div class='article-left-margin-image-copy large-uncentered medium-uncentered small-centered columns medium-4 large-3 small-8'>
            <?php echo $content ?>
        </div>
    </div>
