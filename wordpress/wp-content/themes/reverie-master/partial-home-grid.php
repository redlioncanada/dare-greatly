<?php 

//echo $_SERVER['SERVER_NAME'] . '....................';

$mondrianCheck = get_field('show_mondrian');
$latestCheck = get_field('show_latest');
$experience_design_check = get_field('from_experience_check');
$experienceCheck = get_field('show_experience_cadillac');
$email = get_field('show_email_signup');
$trendCheck = get_field('show_trending');
$spotlightCheck = get_field('show_spotlight');
$wp->used_posts = array();
if( $mondrianCheck == "Yes" ) {
	//get_template_part('partial', 'mondrian'); 
	include(locate_template('partial-mondrian.php'));
}

if( $spotlightCheck == "Yes" ) {
	//get_template_part('partial', 'mondrian'); 
	include(locate_template('partial-spotlight.php'));
}

if( $experienceCheck == "Yes" ) {
	include(locate_template('partial-experience-cadillac-query.php'));
}
if( $experience_design_check == "Yes" ) {
	include(locate_template('partial-experience-design-query.php'));
}

if( $latestCheck == "Yes" ) {
	include(locate_template('partial-latest.php'));
	//get_template_part('partial', 'latest');
}



if( $experience_design_check == "Yes" ) {

	include(locate_template('partial-experience-design-render.php'));
}

if( $email == "Yes" ) {
	get_template_part('partial', 'email'); 
}



if( $trendCheck == "Yes" ) {
	include(locate_template('partial-trending.php'));
}

if( $experienceCheck == "Yes" ) {
	include(locate_template('partial-experience-cadillac-render.php'));
}

?>

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
							
							Omniture_s.hier1 = "daregreatly,homepage"; 
							
							Omniture_s.pageName = "ca:no:ca:en:daregreatly:homepage"; 
							
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



