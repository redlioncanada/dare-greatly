 <div class="row show-for-small-only">
    <div class="title-section text-left columns large-5 small-only-text-center">
            <span>Explore</span>            
        </div>
    
    </div>
    <div class="row full-width latest-header title-section-border show-for-small-only">
    </div>

<div id='explore-ajax'>
	<?php 
	$paged = ( get_query_var( 'paged' ) ) ? get_query_var( 'paged' ) : 1;
	$number_of_posts = get_field('number_of_articles_per_page');
	$today = date('Ymd');
	$wp_query = new WP_Query(		array (	'post_type' => 'articles',
										'posts_per_page' => $number_of_posts,
										'post_status' => 'publish',
										'paged'=>$paged,
										'meta_query'    => array(
											'relation' => 'OR',
											array(
   											   'key' => 'defer_visibility_until',
   											   'value' => '',
   											   'compare' => 'NOT EXISTS'
   											   ),
  											array(
	       										'key'		=> 'defer_visibility_until',
	       										'compare'	=> '<=',
	        									'value'		=> $today
	        									),

										))); 

	$show_explore_email_submission_form = get_field('show_explore_email_submission_form') == "Yes";
	$email_title 			= get_field('email_submission_title_explore'); 				
	$email_subtitle			= get_field('email_submission_subtitle_explore'); 			
	$email_subscribe		= get_field('email_submission_field_button_explore'); 		
	$email_placeholder		= get_field('email_submission_field_placeholder_explore');	
	$email_link = get_field('email_link');

$nth_post = 0;
$nth_row = 0;
$nth_post_in_row = 0;
$maxInRow = 3;

	while($wp_query->have_posts()){ 
		

		$wp_query->the_post(); 
			$main_category = get_group_a($post->ID);

		$hasMailingList = ($nth_row == 0 and $nth_post_in_row == 1 and $paged == 1 and $show_explore_email_submission_form);
		$mailing_list_block = ($nth_row == 0 and $nth_post_in_row == 0 and $paged == 1 and $show_explore_email_submission_form); // the whole block that has a mailing button
		if(($nth_row % 6 == 0 and $nth_post_in_row == 0) or ($nth_row % 6 == 3 and $nth_post_in_row == 1)){
			$whichsize = 'large-6 ';
			$whichcaption = 'big-caption';
			$character_limit = 160;
			$maxInRow = 2;
		} else {
			$character_limit = 80;
			$whichsize = 'large-3 ';
			$whichcaption = 'caption';
			
		}
		$h = get_field('8x5_horizontal')['height'];
		$w = get_field('8x5_horizontal')['width'];
		if(isset($h) && isset($w) && $w != 0){ // find the aspect ratio for sizing of email box
			$recip_ar = $h/$w;
		} else {
			$recip_ar = 0.62477; // assume 8x5 image if something went wrong;
		}
	if ($nth_post_in_row == 0) { 
		$equalizer = $mailing_list_block ?  'js-explore-equalizer' : '';
		echo "<div class='row " . $equalizer .  "' >";
	} 
	
	
	?>
		
		<div  class="<?php echo $whichsize; ?> explore-grid small-10 columns medium-uncentered small-centered">
		<?php if($hasMailingList) { ?>
		
		<div class='js-mailinglist-explore mailinglist-form'>
		<div class='js-vertical-center'>
		<h3><?php echo $email_title; ?></h3>
		<p class='signup-cta show-for-medium-up'><?php echo $email_subtitle; ?></p>
		<form action="<?php echo $email_link?>" target="_blank">
				<button class="button"  alt="Subscribe" tabindex="2"><span><?php echo $email_subscribe; ?></span></button>
<!-- 				<div class='emailinput'><input  tabindex="1" type="text" class='' placeholder="<?php echo $email_placeholder; ?>" /></div>
 -->				

        </form>
        </div>
		</div>


		<?php } ?>
		<div class='image-container-8x5' <?php if($hasMailingList) { echo 'data-equalizer-watch'; } ?>>
<a href="<?php echo get_the_permalink(); ?>">
		<img class='inside_image_container' recip_ar="<?php 
		echo $recip_ar ?>" src="<?php echo get_field('8x5_horizontal')['url']; ?>">
		<?php if (get_field('is_video_article') !== '' and get_field('is_video_article')[0] == "Yes") : ?>
		<div class="play-button"><img src="<?php echo get_template_directory_uri() ?>/img/playButton.png"></div>
		<?php endif; ?>


</a>
		</div>
		<div alt="<?php echo get_field('8x5_horizontal')['caption']; ?>" class="<?php echo $whichcaption ?> large-8 medium-10 small-10">
			
			<p class='category'><?php echo $main_category; ?></p>
			<p class='title'><a href="<?php echo get_the_permalink(); ?>"><?php echo get_title_with_fallback() ?></a></p>
		
			<?php 
			# from functions.php
			generate_produced_with(get_the_id(),'p','produced-with') 

			?>
		</div>
		<div class="summary large-8 medium-10 small-10">
			<p><?php 
			$raw_summary = get_field('article_summary');
			if(strlen($raw_summary) > $character_limit){
				$summary = substr($raw_summary,0,$character_limit).'...';
			} else {
				$summary = $raw_summary;
			}
			echo $summary ?> </p>

		</div>
		</div>
		</a>
	<?php 
		if ($nth_post_in_row == $maxInRow-1) { 
			$nth_row++;
			$maxInRow = 3;
			$nth_post_in_row = 0;
			echo "</div>";
		} else {
			$nth_post_in_row++;
		}
		$nth_post++;
		
	}

	echo"</div>";
	if ( $wp_query->get( 'paged' ) != $wp_query->max_num_pages ) {

	load_more_button();

}




	?>

<script type="text/javascript">
			<!--
				if(typeof(Omniture_s) != "undefined"){
					Omniture_s.server = window.location.hostname;					
							Omniture_s.channel = "daregreatly"; 
	
							Omniture_s.eVar4 = "en"; 
							
							Omniture_s.eVar17 = "microsite_us"; 
							
							Omniture_s.eVar18 = "cadillac"; 
							
							Omniture_s.eVar31 = "usa"; 
							
							Omniture_s.eVar32 = "northamerica"; 
							
							Omniture_s.hier1 = "daregreatly,explore"; 
							
							Omniture_s.pageName = "ca:no:us:en:daregreatly:explore"; 
							
							Omniture_s.prop17 = "microsite_us"; 
							
							Omniture_s.prop18 = "cadillac"; 
							
							Omniture_s.prop23 = "en"; 
							 						 

						
					Omniture_s.eVar29 = Omniture_s.getQueryParam('seo');					
				}			
				function getOmnitureLinktrackingCode(linkname){
					if(typeof(Omniture_s) != "undefined"){
						if(s_account){
							var s=s_gi(s_account);
							Omniture_s.tl(this,'e',linkname);
						}
					}
				}
				var s_code=Omniture_s.t();if(s_code)document.write(s_code)
			// -->
	</script>
	

	<script language="JavaScript" type="text/javascript"><!--
if(navigator.appVersion.indexOf('MSIE')>=0)document.write(unescape('%3C')+'\!-'+'-')
//--></script><noscript><img src="http://generalmotors.112.2o7.net/b/ss/gmcadillac/1/H.22.1--NS/0"
height="1" width="1" border="0" alt="" /></noscript><!--/DO NOT REMOVE/-->
<!-- End SiteCatalyst code version: H.22.1. -->
	 
	 
