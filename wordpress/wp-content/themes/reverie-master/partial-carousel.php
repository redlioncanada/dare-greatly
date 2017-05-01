<?php
		$count = 0;
$human = array('Easton','Laura','Christopher');
function generateNav($count,$human) {
		$total = count($human);

		echo ""; ?><ul class="slick-dots desktop-carousel show-for-medium-up" style="display: block;" role="tablist"><?php
		
		for($i = 0;$i<$total;$i++){
			$humanCount = $i + 1;
			if($i == $count){
				$class = "slick-active";
			} else {
				$class = "slick-inactive";
			}
		?>
			<li data-target-index="<?php echo $i; ?>" class="<?php echo $class; ?>">
		<button type="button" role="button" tabindex="0"></button><span class="number"><?php echo $human[$i]; ?></span></li>	
		<?php } ?>

		

		</ul>
<?php 
}
generateNav(0,$human); 
 $modules = get_field_object('modules');
   $initialcount = (count($modules['value']));

 while ( have_rows('modules') ) : the_row(); 

?>

<div class="full-width home-row show-for-medium-up ">
	<div class="large-10 medium-10 small-10 carousel-holder columns" data-index="<?php echo $count ?>">
		<div class="pre-oscars">
			<?php

			if(have_rows('carousel_entries')):

				while(have_rows('carousel_entries')): the_row();
			$poster= get_sub_field('poster_image');
			$youtubeURL = get_sub_field('youtube_url');
			$caption = get_sub_field('caption');

			?>


			<div class='slidable'>
				<div data-embed="<?php echo $youtubeURL ?>"  id="carousel-video" class='js-carousel-video'>
					<div class="js-iframe-target">
						<div class="play-button"><img src="<?php echo get_template_directory_uri() ?>/img/playButton.png"></div>
						<img src="<?php echo $poster ?>" class="home-video-poster js-video-sizeable">
					</div>
				</div>
				<!-- <div><?php #echo $caption ?></div> -->
			</div>


		<?php endwhile; endif; ?>   


	</div>
	
	<div class='slick-arrows'>
	<div class='slick-arrow-custom slick-prev'></div>
	<div class='slick-arrow-custom slick-next'></div>
	</div>
	</div>


</div>


<!-- MOBILE-->
<div class="row show-for-small-only home-row small-collapse">
	<div class="large-10 medium-10 small-10 columns">
		<div class="pre-oscar-mobile">
			<?php
			if(have_rows('carousel_entries')):

				while(have_rows('carousel_entries')): the_row();
			$poster= get_sub_field('poster_image');
			$youtubeURL = get_sub_field('youtube_url');
			$caption = get_sub_field('caption');
			$posterMobile = get_sub_field('1x1_poster_for_mobile');
			?>


			<div>
				<div data-embed="<?php echo $youtubeURL ?>" id="carousel-video" class='js-carousel-video'>
					<div class="js-iframe-target">
						<div class="play-button"><img src="<?php echo get_template_directory_uri() ?>/img/playButton.png"></div>
						<img src="<?php echo $posterMobile ?>" class="home-video-poster js-video-sizeable">
					</div>
				</div>
				<div><?php echo $caption ?></div>
			</div>


		<?php endwhile; endif; ?>   

	</div>
</div>
</div>
<?php $count++; 
endwhile;
?>
