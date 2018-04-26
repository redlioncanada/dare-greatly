<?php 

$content_block = get_sub_field('content');

$image_url = get_sub_field('image')['url'];
$has_image = $image_url != "";
$no_image = $image_url == "";

 ?>


 	<?php if($no_image){ ?>
 	 <!--  Content without picture-->
    <div class="row article-copy article-component">
        <div class="large-6 medium-8 small-8 small-centered columns">
       <?php echo $content_block ?>
     </div>
       <?php } ?>
		<?php if($has_image){ ?>
		<!--       content with picture -->
        <div class="row small-collapse" style="display: inline;">
        	<div class="article-component withImage large-uncentered medium-uncentered small-centered columns medium-4 large-5 small-8">
          <?php echo $content_block ?>
          </div>

		<?php } ?>

            <?php if($has_image){ ?>
            <div class="rightMarginImage">
            <img class='' src="<?php echo $image_url; ?>">
            </div>
            <?php } ?>
        </div>
