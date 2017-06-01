<?php

get_header();

if ( ! post_password_required() ) {

	function get_seconds_to_live($utcTime){
	//Get the Date
	$current = time();
		$utcTime = ceil($utcTime/1000/60)*60; # Convert UTC MS to S, round to the nearest minute.
		$secondsLeft = $utcTime-$current;
		return $secondsLeft;
	}


$preOscarsHeader = get_field('header_copy');
$bodyCopy = get_field('body_copy');
$ctaText = get_field('cta_text');
$countdownDate = get_field('date_to_countdown_to');
$secondsLeft = get_seconds_to_live($countdownDate);

$email_subject = get_field('email_subject');
if(!$email_subject){
	$email_subject =  get_field('article_title');
}

$email_body = get_field('email_body');
if(!$email_body){
	$email_body = get_field('article_summary');
}
$email_vars = array(
	'subject'=>$email_subject,
	'body'=>$email_body
	);
wp_localize_script( 'dg', 'email_vars', $email_vars );

$linkedInTitle = get_field('linkedin_title');
$linkedInDesc =  get_field('linkedin_description');
$linkedInImage =  get_field('linkedin_image');
$linkedIn_sharing = array(
	'title' => $linkedInTitle,
	'desc' => $linkedInDesc
		//'image' => $linkedInImage
	);

wp_localize_script( 'dg', 'linkedIn_sharing', $linkedIn_sharing );



	?>
	
	<div class='js-preoscars'>
	<section id="top-section">
	<div class="row">
		<div class="large-8 small-10 columns small-centered text-center header-text">
			<?php echo $preOscarsHeader ?>
		</div>
	</div>
	<div class="small-hr"></div>
	<div class="row">
		<div class="large-8 medium-8 small-8 columns small-centered text-center copy">
			<?php echo $bodyCopy ?>
		</div>
	</div>

	<div class="row article-tags-and-share">
		<div class='columns preoscar-share large-7 medium-8 small-8 small-centered text-center'>
			<span class='article-share-title'>share:</span>
			<a href="#" id="shareFacebook" title="Share on Facebook" data-share-facebook> <i class="fa fa-facebook"></i> </a>
			<a href="#" id="shareTwitter" title="Share on Twitter" class="btn btn-default" data-share-twitter data-share-text=""> <i class="fa fa-twitter"></i> </a>
			<a href="#" id="shareGoogle" data-share-google-plus data-share-url href="https://plus.google.com/+Cadillac" target="_blank" title="Share on Google+"> <i class="fa fa-google-plus"></i> </a>
			<a href="#" id="shareLinkedIn" href="http://cadillac.tumblr.com/" data-share-linkedin target="_blank" title="Share on LinkedIn"><i class="fa fa-linkedin-square"></i></a>
			<a href="#" id="shareEmail" target="_blank" title="Email us"> <i class="fa fa-envelope"></i> </a>
		</div>
	</div>
	
	</section>
	<?php 

	if( have_rows('modules') ):

	     // loop through the rows of data; 
         // use the name of the row layout to refer to partials/articles item.
	

	locate_template('partial-carousel.php',true);
	

	else :

	    // no layouts found

		endif;
} else {
	echo get_the_password_form();
}
?></div>
<script type="text/javascript">
			<!--
				if(typeof(Omniture_s) != "undefined"){
					Omniture_s.server = window.location.hostname;					
							Omniture_s.channel = "daregreatly"; 
	
							Omniture_s.eVar4 = "en"; 
							
							Omniture_s.eVar17 = "microsite_ca"; 
							
							Omniture_s.eVar18 = "cadillac"; 
							
							Omniture_s.eVar31 = "ca"; 
							
							Omniture_s.eVar32 = "northamerica"; 
							
							Omniture_s.hier1 = "daregreatly,oscars teaser"; 
							
							Omniture_s.pageName = "ca:no:ca:en:daregreatly:oscars teaser"; 
							
							Omniture_s.prop10 = "oscars teaser"; 

							Omniture_s.prop17 = "microsite_ca"; 
							
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


<?php

get_footer(); 

?>

