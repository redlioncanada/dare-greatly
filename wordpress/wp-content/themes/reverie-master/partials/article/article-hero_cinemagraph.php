<?php
$image = get_sub_field('poster_image')['url'];
$mp4 = get_sub_field('mp4')['url'];
$ogg = get_sub_field('ogg')['url'];
$webm = get_sub_field('webm')['url'];

?>
    <div class='article-hero-cinemagraph js-article-cinemagraph ' style='background-image:url(<?php echo $image ?>)'>
        <div class='content' style='height:500px' >
        	<video class='show-for-medium-up' autoplay loop muted poster="<?php echo $image ?>">
        		<source src="<?php echo $mp4 ?>" type="video/mp4">
  				<source src="<?php echo $ogg ?>" type="video/ogg">
  				<source src="<?php echo $webm ?>" type="video/webm">
        	</video>
            
        </div>
    </div>
