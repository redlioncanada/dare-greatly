<?php 
$image_url = get_sub_field('image')['url'];
$image_caption = get_sub_field('caption');
$pull_quote = get_sub_field('pull_quote');
$attribution = get_sub_field('attribution');
?>         

        <!-- article-quote-and-image -->
        <div class="row article-pullquote-and-image article-component">
            <div class='article-pullquote medium-6 columns small-8 small-centered medium-uncentered'>
                <?php echo $pull_quote;?>
                <div class='attribution'><?php echo $attribution ?></div>
            </div>
            <div class='article-image-and-caption columns medium-4 small-8 small-centered medium-uncentered'>
                <img class='article-image' src='<?php echo $image_url;?>'>
                <div class='article-caption'><?php echo $image_caption;?></div>
            </div>
        </div>