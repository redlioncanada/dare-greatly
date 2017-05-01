<?php 

$left_label = get_field('left_label','options');
$right_label = get_field('right_label','options');
if(!$left_label){
    $left_label = "left";
}
if(!$right_label){
    $right_label = "right";
}

$left_image_url = get_sub_field('left_image')['url'];
$left_image_caption = get_sub_field('left_image_caption');
$right_image_url = get_sub_field('right_image')['url'];
$right_image_caption = get_sub_field('right_image_caption');
?>
    <!-- side-by-side-horizontal -->
    <div class='article-side-by-side-horizontal show-for-medium-up article-component'>
        <div class='article-side-by-side-horizontal-image'><img src='<?php echo $left_image_url ?>'></div>
        <div class='article-side-by-side-horizontal-image  '><img class='show-for-medium-up' src='<?php echo $right_image_url ?>'>
            <?php if($left_image_caption != "") : ?>
            <div class='columns small-8 small-centered  medium-10 medium-collapse article-side-by-side-horizontal-caption article-caption'>
                <span class='side-label'><?php echo $left_label;?></span> <?php echo $left_image_caption ?>
            </div>
            <?php endif; ?>

         <?php if($right_image_caption != "") : ?>
            <div class='columns small-8 small-centered medium-collapse medium-10 article-side-by-side-horizontal-caption article-caption show-for-medium-up'>
                <span class='side-label'><?php echo $right_label;?></span> <?php echo $right_image_caption ?>
            </div>
             <?php endif; ?>
        </div>
       
        <?php if($left_image_caption == "" and $right_image_caption == ""): ?>
            <div class='columns small-8 small-centered medium-collapse medium-10 article-caption show-for-medium-up article-caption-placeholder'>&nbsp;</div>
        <?php endif; ?>
    </div>
    <!-- side-by-side-horizontal-MOBILE -->
    <div class='row show-for-small-only article-component'>
        <div class='columns small-8 small-centered article-side-by-side-horizontal-mobile'>

        

       
       
            <div >
                <img src='<?php echo $left_image_url; ?>'>
                <?php  if($left_image_caption != "") : ?>
                    <div class='article-caption'>

                    <?php echo $left_image_caption; ?>

                </div>
            <?php endif; ?>
            </div>
        
        
            <div >
                <img src='<?php echo $right_image_url; ?>'>
                <?php  if($right_image_caption != "") : ?>
                <div class='article-caption'>
                    <?php echo $right_image_caption; ?>
                </div>
                 <?php endif;?>
            </div>
        
       

        </div>
    </div>
