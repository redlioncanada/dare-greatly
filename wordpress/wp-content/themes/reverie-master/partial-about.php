<?php 
$introHeading = get_field('about_intro_heading');
$introCopy = get_field('about_intro_copy');
$image = get_field('about_full_width_image');
$leftHeading = get_field('about_left_heading');
$letter = get_field('about_right_letter');
$signature = get_field('about_signature');
$jobTitle = get_field('about_job_title');
?>
 <div class="row show-for-small-only">
    <div class="title-section text-left columns large-5 small-only-text-center">
            <span>About</span>            
        </div>
    
    </div>
    <div class="row full-width latest-header title-section-border show-for-small-only">
    </div>
<div class="row  about-margin-60">
	<div class="large-10 small-8 columns large-uncentered  small-centered about-copy">
		
		<span class="gold-header"><?php echo $introHeading ?></span> <?php echo $introCopy ?>
	</div>
</div>
<!--/row-->
<div class="row full-width about-margin">
	<div class="large-10 small-10 columns large-uncentered small-centered">
		<img src="<?php echo $image ?>">
	</div>
</div>
<!--/row-->
<div class="row  about-margin">
	<div class="large-4 small-8 columns large-uncentered  small-centered columns">
		<h3><?php echo $leftHeading ?></h3>
	</div>
	<div class="large-6 small-8 columns large-uncentered small-centered columns letter">
		<div class="letter-inner">

		<?php echo $letter ?>
		<h4><?php echo $signature ?></h4>
		<p class="letter-sub"><?php echo $jobTitle ?></p>
		</div>
	</div>
</div>
<!--/row-->

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
							
							Omniture_s.hier1 = "daregreatly,about"; 
							
							Omniture_s.pageName = "ca:no:us:en:daregreatly:about"; 
							
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