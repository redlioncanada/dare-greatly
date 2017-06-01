<?php get_header(); ?>

<?php if ( ! post_password_required() ): ?>
<!-- Main Content -->

<?php get_template_part('partial', 'oscars-hero'); ?>

<?php get_template_part('partials/oscars/oscars', 'hero'); ?>

<?php 

$mission_statement_check = get_field('mission_statement_check');
$twitter_check = get_field('twitter_check');
$articles_check = get_field('articles_check');
$ugc_statement_check = get_field('ugc_statement_check');
$ugc_check = get_field('ugc_check');
$ugc_results_check = get_field('ugc_results_check');


if( $mission_statement_check == "Yes" ) {
	get_template_part('partials/oscars/oscars', 'mission-statement'); 
}


if( $twitter_check == "Yes" ) {
get_template_part('partials/oscars/oscars', 'twitter'); 
}

if( $articles_check == "Yes") {
get_template_part('partials/oscars/oscars', 'articles'); 
}

if( $ugc_statement_check == "Yes") {
	get_template_part('partials/oscars/oscars', 'ugc-statement'); 
}

if( $ugc_check == "Yes") {
get_template_part('partial', 'oscars-submission'); 
} 
if($ugc_results_check == "Yes"){
get_template_part('partials/oscars/oscars', 'ugc-grid'); 
} else {
	echo "<div class='js-top-target'></div>"; # to make the top button work even if there's no grid
}
get_template_part('partials/oscars/oscars','top_button');

?>
 <!---->
<!-- /End Main Content -->

<?php 
else:
	echo get_the_password_form();
endif;
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
							
							Omniture_s.hier1 = "daregreatly,oscars landing"; 
							
							Omniture_s.pageName = "ca:no:ca:en:daregreatly:oscars landing"; 
							
							Omniture_s.prop10 = "oscars landing"; 

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

<?php get_footer(); ?>