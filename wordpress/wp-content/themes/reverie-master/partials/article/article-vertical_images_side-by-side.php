<?php $left_image_url = get_sub_field('left_image')['url'];
$left_image_caption = get_sub_field('left_image_caption');
$right_image_url = get_sub_field('right_image')['url'];
$right_image_caption = get_sub_field('right_image_caption');
?>
    <!-- side-by-side-vertical -->
    <div class='row side-by-side-vertical article-component show-for-medium-up'>
        <div class='columns medium-4 medium-offset-1 large-4 large-offset-2 medium-uncentered small-8 small-centered'>
            <img class='article-side-by-side-vertical-image-left' src='<?php echo $left_image_url ?>'>
            <div class='article-side-by-side-vertical-caption-left article-caption'>
                <?php echo $left_image_caption ?>
            </div>
        </div>
        <div class='columns medium-4 large-4 small-8 medium-uncentered small-centered'>
            <img class='article-side-by-side-a-image-right' src='<?php echo $right_image_url ?>'>
            <div class='article-caption'>
                <?php echo $right_image_caption ?>
            </div>
        </div>
    </div>
    <!-- side-by-side-MOBILE-vertical -->
    <div class='show-for-small-only row article-component '>
        <div class='columns small-8 small-centered article-side-by-side-vertical-mobile'>
            <div class=''>
                <img class='' src='<?php echo $left_image_url ?>'>
                <div class='article-caption'>
                    <?php echo $left_image_caption ?>
                </div>
            </div>
            <div class=''>
                <img class='' src='<?php echo $right_image_url ?>'>
                <div class='article-caption'>
                    <?php echo $right_image_caption ?>
                </div>
            </div>
        </div>
    </div>
