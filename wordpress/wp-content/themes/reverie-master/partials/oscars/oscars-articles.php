<div class='oscars-component oscars-articles show-for-medium-up'> 

	<div class='columns small-centered small-8 article-section-title' >Daring Origins</div>
<?php 


if( have_rows('person_articles') ):
	$rows = get_field('person_articles');
	$count = 0;
    while( have_rows('person_articles') ) :
    	
    	the_row();
    	if($count % 3 == 0){
    		echo "<div class='row show-for-medium-up'>";
    	}
			#the_sub_field('person_name');
			$person_name = get_sub_field('person_name');
			$person_role = get_sub_field('person_role');
			$post = get_sub_field('person_article');
	
	  		
    
   			?>	

	
	
	<div  class="oscars-article-grid small-10 medium-3 columns medium-uncentered small-centered">

		<div class='image-container-8x5'>
<a href="<?php echo get_the_permalink(); ?>">
		<img class='inside_image_container' src="<?php echo get_field('8x5_horizontal')['url']; ?>">
		<?php if (get_field('is_video_article') !== '' and get_field('is_video_article')[0] == "Yes") : ?>
		<div class="play-button"><img src="<?php echo get_template_directory_uri() ?>/img/playButton.png"></div>
		<?php endif; ?>


</a>
		</div>
		<div alt="<?php echo get_field('8x5_horizontal')['caption']; ?>" class=" large-8 medium-10 small-10">
			<p class='person-name'><a href="<?php echo get_the_permalink(); ?>"><?php echo $person_name; ?></a></p>
			<p class='person-role'><?php echo $person_role; ?></p>

		</div>
		</div>
		



<?php  

    	if($count % 3 == 2){
    		echo "</div>";
    	}
    	$count++;
wp_reset_postdata();

endwhile; 
if($count % 3 == 0){
	echo "</div>";
}
endif;


?>
</div>



<div class='oscars-component oscars-articles show-for-small-only'> 
	<div class='columns small-centered small-8 article-section-title' >Daring Origins</div>

<?php 


if( have_rows('person_articles') ):
	$count = 0;
	$rows = get_field('person_articles');
	
    while( have_rows('person_articles') ) :
    	the_row();
    	if($count % 2 == 0){
    		echo "<div class='row small-uncollapsed'>";
    	}
			#the_sub_field('person_name');
			$person_name = get_sub_field('person_name');
			$person_role = get_sub_field('person_role');
			$post = get_sub_field('person_article');
		
	  		
    
   			?>	

	
	
	<div class="oscars-article-grid columns show-for-small-only small-5  ">
		<div class='image-container-1x1'>
<a href="<?php echo get_the_permalink(); ?>">
		<img class='inside_image_container' src="<?php echo get_field('1x1_square')['url']; ?>">
		<?php if (get_field('is_video_article') !== '' and get_field('is_video_article')[0] == "Yes") : ?>
		<div class="play-button"><img src="<?php echo get_template_directory_uri() ?>/img/playButton.png"></div>
		<?php endif; ?>


</a>
		</div>
		<div alt="<?php echo get_field('1x1_square')['caption']; ?>" class=" large-8 medium-10 small-10">
			<p class='person-name'><a href="<?php echo get_the_permalink(); ?>"><?php echo $person_name; ?></a></p>
			<p class='person-role'><?php echo $person_role; ?></p>
			
		</div>
	</div>


<?php  

    	if($count % 2 == 1){
    		echo "</div>";
    	}
$count++;
wp_reset_postdata();
endwhile; 

if($count % 2 == 0){
	echo "</div>";
}
endif;


?>
</div>
</div>

