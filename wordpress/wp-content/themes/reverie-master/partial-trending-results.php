<?php 

function iterate_through_trending( $mostpopular, $instance ){
   global $wp;
   $i = 0;
   $ret = array();
    $today = date('Ymd');
   
   foreach($mostpopular as $popular) {

    $myid = $popular->id;
    $visible_date = get_field('defer_visibility_until',$myid);
    $defer = (isset($visible_date) && $visible_date > $today);
   
    if(!in_array($myid,$wp->used_posts) && !$defer)
        {
    
        
        $cat = get_group_a($myid);
        $entry = array(
        "post_id" =>$myid,
        "category" => $cat,
        "title" => get_the_title($myid),
        "is_video_article" => get_field('is_video_article',$myid)!=='' and get_field('is_video_article',$myid)[0] == "Yes",
        "image_alt" => get_field("4x5_vertical",$myid)['alt'],
        "image_url" => get_field("4x5_vertical",$myid)['url'],
        "image_mobile_alt" => get_field("1x1_square",$myid)['alt'],
        "image_mobile_url" => get_field("1x1_square",$myid)['url'],
        "permalink" => get_the_permalink($myid),
   
        );
        $ret[] = $entry;
        } 
    }
   if(count($ret) < 4){

    return "<div class='js-trending-results js-no-results'></div>";
   } 
  
?>
    <div class='js-trending-results js-yes-results'>
        <div class="row trending home-row show-for-medium-up">
            <div class="large-3 medium-3 small-10 columns first-col">
                <a class='block-a' href="<?php echo $ret[0]['permalink'] ?>" data-title="<?php echo $ret[0]['title']; ?>">
        <img alt="<?php echo $ret[0]['image_mobile_alt'];?>" src="<?php echo $ret[0]["image_mobile_url"]?>">
        
        <?php if ($ret[0]['is_video_article']) : ?>
        <div class="play-button"><img src="<?php echo get_template_directory_uri() ?>/img/playButton.png"></div>
        <?php endif; ?>    </a>
                <div class="caption large-10 medium-10 small-10 columns">
                    <p class='category'>
                        <?php echo $ret[0]["category"]; ?>
                    </p>
                    <p class='title'>
                        <a class='block-a' href="<?php echo $ret[0]['permalink'] ?>">
                            <?php echo $ret[0]['title']; ?>
                        </a>
                    </p>
                    <?php
             # from functions.php
         generate_produced_with($ret[0]['post_id'],'p','produced-with',$ret[0]['permalink']);?>
                </div>
            </div>
            <div class="large-3 medium-3 small-10 columns">
                <a class='block-a' href="<?php echo $ret[1]['permalink'] ?>" data-title="<?php echo $ret[1]['title']; ?>">
        <img alt="<?php echo $ret[1]['image_mobile_alt'];?>" src="<?php echo $ret[1]['image_mobile_url'];?>">
         
        <?php if ($ret[1]['is_video_article']) : ?>
        <div class="play-button"><img src="<?php echo get_template_directory_uri() ?>/img/playButton.png"></div>
        <?php endif; ?>   </a>
                <div class="caption large-10 medium-10 small-10 columns">
                    <p class='category'>
                        <?php echo $ret[1]["category"]; ?>
                    </p>
                    <p class='title'>
                        <a class='block-a' href="<?php echo $ret[1]['permalink'] ?>">
                            <?php echo $ret[1]['title']; ?>
                        </a>
                    </p>
                    <?php 
            # from functions.php
         generate_produced_with($ret[1]['post_id'],'p','produced-with',$ret[1]['permalink']);?>
                </div>
                <a class='block-a' href="<?php echo $ret[2]['permalink'] ?>" data-title="<?php echo $ret[2]['title']; ?>">
        <img alt="<?php echo $ret[2]['image_mobile_alt'];?>" src="<?php echo $ret[2]['image_mobile_url'];?>">
        <?php if ($ret[2]['is_video_article']) : ?>
        <div class="play-button"><img src="<?php echo get_template_directory_uri() ?>/img/playButton.png"></div>
        
        <?php endif; ?>  </a>
                <div class="caption large-10 medium-10 small-10 columns">
                    <p class='category'>
                        <?php echo $ret[2]["category"]; ?>
                    </p>
                    <p class='title'>
                        <a class='block-a' href="<?php echo $ret[2]['permalink'] ?>">
                            <?php echo $ret[2]['title']; ?>
                        </a>
                    </p>
                    <?php 
            # from functions.php
         generate_produced_with($ret[2]['post_id'],'p','produced-with',$ret[2]['permalink']);?>
                </div>
            </div>
            <div class="large-4 medium-4 small-10 columns right-col">
                <a class='block-a' href="<?php echo $ret[3]['permalink'] ?>" data-title="<?php echo $ret[3]['title']; ?>">
        <img alt="<?php echo $ret[3]['image_alt'];?>" src="<?php echo $ret[3]['image_url'];?>">
        <?php if ($ret[3]['is_video_article']) : ?>
        <div class="play-button"><img src="<?php echo get_template_directory_uri() ?>/img/playButton.png"></div>
        <?php endif; ?>   </a>
                <div class="caption large-10 medium-10 small-10 columns">
                    <p class='category'>
                        <?php echo $ret[3]["category"]; ?>
                    </p>
                    <p class='title'>
                        <a class='block-a' href="<?php echo $ret[3]['permalink'] ?>">
                            <?php echo $ret[3]['title']; ?>
                        </a>
                    </p>
                    <?php 
            # from functions.php
            generate_produced_with($ret[3]['post_id'],'p','produced-with',$ret[3]['permalink']);?>
                </div>
            </div>
        </div>
        <!--TRENDING MOBILE -->
        <div class="row trending home-row show-for-small-only small-collapse">
            <?php for($i = 0;$i<4;$i++) : ?>
                <div class="small-5 columns trending-sub">
                    <img alt="<?php echo $ret[$i]['image_mobile_alt'];?>" src="<?php echo $ret[$i]['image_mobile_url'];?>">
                    <?php if ($ret[$i]['is_video_article']) : ?>
                        <div class="play-button"><img src="<?php echo get_template_directory_uri() ?>/img/playButton.png"></div>
                        <?php endif; ?>
                            <div class="small-trending-info caption" href="<?php echo $ret[$i]['permalink']; ?>">
                                <p class="tag">
                                    <?php echo $ret[$i]["category"];?>
                                </p>
                                <p class="title">
                                    <?php if (strlen($ret[$i]["title"]) > 40) {
                                        echo substr($ret[$i]["title"], 0, 40) . '...'; }
                                    else {
                                        echo $ret[$i]["title"];
                                    } ?>
                                </p>
                                <?php 
                                    # from functions.php
                                    generate_produced_with($ret[$i]['post_id'],'p','produced-with',$ret[$i]['permalink']);?>
                                    <p><span class="learn-more">read more</span></p>
                            </div>
                </div>
                <?php endfor; ?>
        </div>
    </div>
    <!-- /END TRENDING MOBILE -->
    <?php
}

function handle_no_data($html){
    $output = "<div class='js-trending-results js-no-results'></div>";
    return $output;
}

add_filter( 'wpp_custom_html', 'iterate_through_trending', 10, 2 );
add_filter( 'wpp_no_data', 'handle_no_data', 10, 2 );

$iterationcount = 0;
wpp_get_mostpopular('post_type="articles"&limit=50&range="' . 'daily' . '"');
$iterationcount = 1;
wpp_get_mostpopular('post_type="articles"&limit=50&range="' . 'weekly' . '"');
$iterationcount = 2;
wpp_get_mostpopular('post_type="articles"&limit=50&range="' . 'monthly' . '"');

    

?>
