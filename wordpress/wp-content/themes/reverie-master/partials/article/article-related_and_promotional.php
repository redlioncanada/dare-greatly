<?php
if (get_field('has_vehicle_spotlight') !== "" and get_field('has_vehicle_spotlight')[0] == "Yes") :
$vehicle_spotlight_url = get_field('vehicle_spotlight_url');
if(substr($vehicle_spotlight_url,0,4) !== 'http'){
    $vehicle_spotlight_url = "http://" . $vehicle_spotlight_url;
}
$vehicle_spotlight_image = get_field('vehicle_spotlight_image')['url'];
$vehicle_spotlight_name = get_field('vehicle_spotlight_name');
$vehicle_spotlight_title = get_field('vehicle_spotlight_name','option');
$vehicle_spotlight_find_out_more = get_field('vehicle_spotlight_find_out_more','option');
$vehicle_spotlight_link = get_field('vehicle_spotlight_link','option');
$related_article_text = get_field('related_article_text','option');
?>
        <!-- related-and-promotional -->
        <div class='article-related-promotional article-component row show-for-medium-up'>
            <div class='columns medium-6 article-promotional'>
                <h3 class='article-promotional-title'><?php echo $vehicle_spotlight_title; ?> <a href='<?php echo $vehicle_spotlight_url;?>' target="_blank"><?php echo $vehicle_spotlight_name;?></a></h3>
                <div class='article-promotional-image'>
                    <a href='<?php echo $vehicle_spotlight_url;?>' target="_blank"><img src='<?php echo $vehicle_spotlight_image;?>'></a>
                </div>
                <div class='article-promotional-cta'><?php echo $vehicle_spotlight_find_out_more?> <a href='<?php echo $vehicle_spotlight_url;?>' target="_blank"><?php echo $vehicle_spotlight_link ?></a></div>
            </div>
            <div class='columns medium-3 large-3 small-8 small-centered medium-uncentered medium-offset-1 article-related-list'>
                <h3 class='article-related-list-label show-for-medium-up'><?php echo $related_article_text?></h3>
                
                <?php $post_objects = array(get_field('related_article_1'),get_field('related_article_2'));
                foreach($post_objects as $post){
                    echo(make_article('','1x1_square',$post));
                }
                ?>
                

                
            </div>
        </div>
    

        <!-- related and promotional mobile -->
 <div class='article-related-promotional article-component row show-for-small-only'>
            <div class='columns medium-6 article-promotional'>
                <h3 class='article-promotional-title'><?php echo $vehicle_spotlight_title; ?> <a href='<?php echo $vehicle_spotlight_url;?>' target="_blank"><?php echo $vehicle_spotlight_name;?></a></h3>
                <div class='article-promotional-image'>
                    <img src='<?php echo $vehicle_spotlight_image;?>'>
                </div>
                <div class='article-promotional-cta'><?php echo $vehicle_spotlight_find_out_more?> <a href='<?php echo $vehicle_spotlight_url;?>' target="_blank"><?php echo $vehicle_spotlight_link ?></a></div>
            </div>
            </div>
            
               <div class="row show-for-small-only">
    <div class="title-section text-left columns large-5  no-vehicle-spotlight small-only-text-center">
            <span><?php echo $related_article_text?></span>            
        </div>
    
    </div>
    <div class="row  show-for-small-only full-width latest-header title-section-border">
    </div>
         <div class='columns medium-3  show-for-small-only large-3 small-8 small-centered medium-uncentered medium-offset-1 article-related-list header-spacing'>       
                <?php $post_objects = array(get_field('related_article_1'),get_field('related_article_2'));
                foreach($post_objects as $post){
                    echo(make_article('','1x1_square',$post));
                }
                ?>
                

                
            </div>
        </div>


<?php else: ?>

       <!-- related-and-promotional -->
<!--         <div class='article-related-promotional article-component no-vehicle-spotlight row'>

            <div class='columns small-8 medium-10 small-centered medium-uncentered article-related-list'>
                <h3 class='article-related-list-label'>related articles</h3>         
            </div>
        </div>
 -->
 <?php $related_article_text = get_field('related_article_text','option');?>
 <div class="row">
    <div class="title-section text-left columns large-5  no-vehicle-spotlight small-only-text-center">
            <span><?php echo $related_article_text?></span>            
        </div>
    
    </div>
    <div class="row full-width latest-header title-section-border">
    </div>


        <div class='article-related article-related-promotional row article-component header-spacing'>
        <div class='article-related-list'>
                <?php $post_objects = array(get_field('related_article_1'),get_field('related_article_2'),get_field('related_article_3'));
                foreach($post_objects as $post){
                    echo(make_article('columns small-10 large-3','8x5_horizontal',$post));
                }
                ?>
        </div>
        </div>
    

<?php endif; ?>

   <?php function make_article($columnclasses,$imagesize,$post){ ?>

                
                
                    <div class='article-related-unit <?php echo $columnclasses?> '>
                    <a class='article-related-link' href="<?php echo get_the_permalink(); ?>">
                        <div class='article-related-unit-image'>
                            <img alt='<?php echo get_field($imagesize)['alt']; ?>' src='<?php echo get_field($imagesize)['url'] ?>'>
                            <?php if (get_field('is_video_article') !== '' && get_field('is_video_article')[0] == "Yes") : ?>
                                <div class="play-button"><img src="<?php echo get_template_directory_uri(); ?>/img/playButton.png"></div>
                            <?php endif; ?>
                            </div>
                    </a>
                        <div class='article-related-unit-category'><a class='article-related-link' href="<?php echo get_the_permalink(); ?>"><?php echo get_group_a($post->ID)  ?></a></div>
                        <div class='article-related-unit-title'><a class='article-related-link' href="<?php echo get_the_permalink(); ?>"><?php echo get_the_title(); ?></a></div>
                        <div class='article-related-unit-produced-with'>
                        <?php 
                        # from functions.php
                        generate_produced_with($post->ID,'p','produced-with',get_the_permalink());?>
                        </div>
                        
                        </a>
                    </div>
                
   <?php  } ?>