<?php $twitter_url = get_field('twitter_url'); ?>
<div class='full-width oscars-component js-twitter oscars-twitter'> 
<div class="row valign-middle">
	<div class='columns small-10 small-centered medium-1 medium-uncentered' ><i class="fa fa-twitter oscars-twitter-icon"></i></div>
	<div class='columns small-10 small-centered medium-5 medium-uncentered tweet' >
		<div class='twitter-identity'><span class='twitter-name'></span>&nbsp;<span class='twitter-handle'></span></div>
		<div class='tweet-text'></div>
	</div>
	
	<div class='columns small-10 small-centered medium-3 medium-offset-1 medium-uncentered button-column'>
		<a href="<?php echo $twitter_url ?>" target="_blank">
			<div class='button'>follow the conversation</div>
		</a>
	</div>
</div>
</div>