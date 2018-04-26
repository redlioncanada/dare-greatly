<?php
$content_block = get_sub_field('content');
$image_url = get_sub_field('image')['url'];
$embed_code = get_sub_field('embed_code');
$has_video = $embed_code != "";
$no_video = $embed_code == "";

?>
<style>
@media only screen and (max-width: 40em){
.rightImage{
    margin-bottom: 50px;
}
.withImage{
    padding-left: 0px;
    padding-right: 0px;
}
}
@media only screen and (min-width: 64.0625em){
.article-left-margin-image-with-play-button{
	margin-bottom:5%;
}
}
</style>
<?php if($no_video){ ?>
   <!--  Content without video-->
      <div class="row" style="display: inline; ">
       <div class="rightImage rightMarginImage" style="float:right;">
          <img class='' src="<?php echo $image_url; ?>">
          </div>
        <div class="" style="display: inline;">
          <div class="withImage large-uncentered medium-uncentered small-centered columns medium-4 large-5 small-8">
          <?php echo $content_block ?>
          </div>
        </div>
    </div>
       <?php } ?>
    <?php if($has_video){ ?>
    <!--       content with video -->
    <div class="row" style="display: inline; ">
    <div data-embed="<?php echo $embed_code; ?>" class="article-copy-with-left-margin-image article-component small-collapse <?php if($has_video) { echo ' js-article-inline-video'; } ?>">
        <div class='rightImage rightMarginImage article-left-margin-image-with-play-button <?php if($has_video) { echo 'js-iframe-target margin-video'; } ?>' style='position: relative; margin-top:9px;' >
            <img class=' <?php if($has_video) { echo 'js-video-sizeable'; } ?>' src="<?php echo $image_url; ?>">
            <?php if($has_video){ ?>
            <div class='play-button'><img src='<?php echo get_template_directory_uri(); ?>/img/playButton.png'></div>
            <?php } ?>
          </div>
        </div>
          <div class="" style="display: inline;">
          <div class="withImage large-uncentered medium-uncentered small-centered columns medium-4 large-5 small-8">
          <?php echo $content_block ?>
          </div>
        </div>
      </div>

    <?php } ?>
        