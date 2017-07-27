<?php
$content_block = get_sub_field('content');
$image_url = get_sub_field('image')['url'];

?>
<style>
@media only screen and (max-width: 40em){
.rightImage{
    margin-bottom: 50px;
}
}
@media only screen and (min-width: 64.0625em){
.article-left-margin-image-with-play-button{
	margin-bottom:5%;
}
}
</style>
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