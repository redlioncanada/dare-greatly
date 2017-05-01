<?php
	$disclaimer = get_field('disclaimer');

	if($disclaimer){
?>

<div class="row article-component" role="main">
	<div class="inner-grid large-6 medium-8 small-8 small-centered  large-collapse medium-collapse small-collapse columns article-disclaimer">
		<?php echo $disclaimer; ?>
	</div>
</div>

<?php 

}

?>