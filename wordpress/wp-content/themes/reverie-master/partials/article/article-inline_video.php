<?php 
$poster_image = get_sub_field('poster_image')['url'];
$poster_image_alt = get_sub_field('poster_image')['alt'];
$embed_code = get_sub_field('embed_code');
$image_caption = get_sub_field('caption');
$image_subcaption = get_sub_field('subcaption');


?>         
        <!-- inline-video -->
        <div data-embed="<?php echo $embed_code; ?>"  class='row article-inline-video article-component js-article-inline-video'>
            <div class='columns small-8 small-centered'>
                <div class='js-iframe-target' style='position: relative' />
               
                <img class='article-inline-video-poster js-video-sizeable' alt="<?php echo $poster_image_alt; ?>" src='<?php echo $poster_image?>'>
                 <div class='play-button'><img src='<?php echo get_template_directory_uri(); ?>/img/playButton.png'></div>
            </div>
                <div class='article-inline-video-caption'><?php echo $image_caption; ?></div>
                <div class='article-inline-video-cta'><?php echo $image_subcaption; ?></div>
        </div>
        </div>