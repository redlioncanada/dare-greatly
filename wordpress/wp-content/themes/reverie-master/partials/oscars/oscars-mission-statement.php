<?php $mission = get_field('mission_statement'); ?>

<div class="row oscars-component">
		<div class="large-7 medium-8 small-8 columns small-centered text-center copy">
			<p><?php echo $mission ?></p>
		</div>

		<?php 
		$ugc_check = get_field('ugc_check');
if( $ugc_check == "Yes" ) {


		$ugc_cta = get_field('cta_to_ugc_submit'); 
?>		<a href="#UGC"><div class='columns small-centered small-8 js-ugc-cta ugc-cta'><?php echo $ugc_cta; ?></div></a><?php

}		
?>

	</div>

	