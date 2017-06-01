<div class="row page-ct6">
    <div class="title-section columns small-10 medium-6 text-center">
        <span><?php the_title() ?></span>
    </div>
</div>
<div class="row full-width latest-header page-ct6 title-section-border"></div>
<div class='row page-ct6'>
    <div class='columns small-centered small-8 medium-6 ct6-blurb'>
        <?php the_content() ?>
    </div>
</div>
<div class='row page-ct6'><?php
$count = 0;

$current = time();

for($i = 0;$i<5;$i++){
	$seconds_array[] = get_seconds_to_live(get_field(get_label('tile_article',$i)),$current);
}

$next_round_items = get_next_round($seconds_array);

$after_next_items = get_next_round($seconds_array,$next_round_items);
function get_next_round($arr, $exclusions = []) { # given array, give an array of indexes which represent
								# the smallest equal value over 0.

	$return = array();
	$smallest = NULL;
	for($i = 0;$i<count($arr);$i++){
		if(!in_array($i,$exclusions)){
			$val =  $arr[$i];
			if($val > 0 && (!isset($smallest) || $val < $smallest)){
				$smallest = $val;
				unset($return);
				$return[] = $i;
			} else if($val == $smallest) {
				$return[] = $i;
			} 
		}

	}

	return $return;
}

assert(get_next_round([-5,6,6,6,10]) == [1,2,3]);
assert(get_next_round([0,4,-5,4,6,12,2]) == [6]);
assert(get_next_round([0,4,-5,4,6,12,21]) == [1,3]);
assert(get_next_round([0,4,-5,4,6,12,21],[1,3,4]) == [5]);
assert(get_next_round([0,4,-5,4,6,12,2],[6]) == [1,3]);

/*for($i = 0;$i<5;$i++){
    renderTile($i,$current,$next_round_items,$after_next_items);
}*/
renderTile(0,$current,$next_round_items,$after_next_items);
renderTile(1,$current,$next_round_items,$after_next_items);
renderTile(2,$current,$next_round_items,$after_next_items);
renderTile(3,$current,$next_round_items,$after_next_items);
renderTile(4,$current,$next_round_items,$after_next_items);

function get_label($string,$count){
	$count_by_one = $count+1 . '_';
	$ret = substr_replace($string, $count_by_one, 5,0);
	
	return $ret;
}
function get_aspect_ratio($image){
		$h = $image['height'];
		$w = $image['width'];
		if(isset($h) && isset($w) && $w != 0){ 
			$ar = $w/$h;
		} else {
			$ar = 1; // assume 8x5 image if something went wrong;
		}
		return $ar;
}

	function get_seconds_to_live($tile_article,$current){
		if(!empty($tile_article)){
			$tile_pubtime = get_post_time('U',true,$tile_article->ID);
			$tile_pubtime = ceil($tile_pubtime/60)*60; # round to the nearest minute.
			$secondsLeft = $tile_pubtime-$current;
		} else {
			$secondsLeft = 788940000; // 25 years;
		}	
		return $secondsLeft;
	}

function renderTile($count,$current,$next_round_items,$after_next_items){
	
	$tile_article = get_field(get_label('tile_article',$count));
	$show_8x5 = $show_4x5 = false;
	$tile_caption = get_field(get_label('tile_caption',$count));
	$show_countdown = get_field(get_label('tile_has_countdown_clock',$count));
	$class_1x1 = '';

	#get 1x1 image

	$image_1x1 = get_field(get_label('tile_1x1_image',$count));
	if(empty($image_1x1) && !empty($tile_article)){ #use default if one wasn't specified in ct6 admin.
		$image_1x1 = get_field('1x1_square',$tile_article->ID);
	}
	#get aspect ratio just in case we need it in the js. Currently not using.
	$ar_1x1 = get_aspect_ratio($image_1x1);
	$image_1x1_url = $image_1x1['url'];

	if($count == 0) { # pattern requires 8x5
	
		$show_8x5 = true;
		$class_1x1 = 'show-for-small-only';
		$image_8x5 = get_field(get_label('tile_8x5_image',$count));
	
		if(empty($image_8x5) && !empty($tile_article)){
			$image_8x5 = get_field('8x5_horizontal',$tile_article->ID);
		}
	
		$ar_8x5 = get_aspect_ratio($image_8x5);
		$image_8x5_url = $image_8x5['url'];

	}

	if($count == 4){ # pattern requires 4x5
		$show_4x5 = true;
		$class_1x1 = 'show-for-small-only';
		$image_4x5 = get_field(get_label('tile_4x5_image',$count));
		if(empty($image_4x5)){
			$image_4x5 = get_field('4x5_vertical',$tile_article->ID);
		}
		$ar_4x5 = get_aspect_ratio($image_4x5);
		$image_4x5_url = $image_4x5['url'];
	}
	

	$countdown_label = get_field(get_label('tile_countdown_label',$count));
	if(!empty($tile_article)) {
		$tile_permalink = get_the_permalink($tile_article->ID);	
	}
	
	$secondsLeft = get_seconds_to_live($tile_article,$current);
	$open = $secondsLeft < 0;


	if(!$open) { 
	 	$caption_class="hide";
		$countdown_class = 'js-countdown';
		$countdown_attr = 'data-src="' . $secondsLeft . '"';
		if($show_countdown == "No" || !in_array($count,$next_round_items) || empty($tile_article)){
			$countdown_class .= ' hide-countdown show-for-medium-up';
			if(in_array($count,$after_next_items) && $show_countdown != "No" && !empty($tile_article)){ # this will reveal after the current timer is done.
				$countdown_class .= ' js-after-next-countdown';
			}
		} 
	} else {
		$countdown_class = "";
		$countdown_attr = "";
		$caption_class="show";
	}

$tileclasses = array('medium-6 tile-1','medium-3 offset-6 tile-2','medium-3 tile-3','medium-3 offset-3 tile-4','medium-4 offset-6 tile-5');

$mediumColumn = $tileclasses[$count];


?><div class='small-10 small-centered medium-uncentered <?php echo $mediumColumn; ?> ct6-tile'>
            <div class='ct6-tile-image <?php echo $countdown_class ?>' <?php echo $countdown_attr; ?>>
                <a href="<?php echo $tile_permalink; ?>">
                    <?php if($show_4x5) : ?>
                        <img ar='<?php echo $ar_4x5; ?>' class='show-for-medium-up' src='<?php echo $image_4x5_url;?>'>
                        <?php endif; ?>
                            <?php if($show_8x5) : ?>
                                <img ar='<?php echo $ar_8x5; ?>' class='show-for-medium-up' src='<?php echo $image_8x5_url;?>'>
                                <?php endif; ?>
                                    <img ar='<?php echo $ar_1x1; ?>' class='<?php echo $class_1x1; ?>' src='<?php echo $image_1x1_url;?>'>
                </a>
                <?php if(!$open) {?>
                    <div class='countdown'>
                        <div class='countdown-label'>
                            <?php echo $countdown_label; ?>
                        </div>
                        <div class='countdown-value js-countdown-value'></div>
                    </div>
                    <?php } ?>
            </div>
            <div class='caption <?php echo $caption_class; ?>'>
                <a href="<?php echo $tile_permalink; ?>"><?php echo $tile_caption;?></a></div>
                </div><?php if($count == 1){
	echo "</div><div class='row page-ct6'>";
}
 $count++;
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
							
							Omniture_s.hier1 = "daregreatly,ct6 landing"; 
							
							Omniture_s.pageName = "ca:no:ca:en:daregreatly:ct6 landing"; 
							
							Omniture_s.prop17 = "microsite_ca"; 
							
							Omniture_s.prop18 = "cadillac"; 
							
							Omniture_s.prop23 = "en"; 

							Omniture_s.prop34 = "ct6"; 
							 						 

						
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
