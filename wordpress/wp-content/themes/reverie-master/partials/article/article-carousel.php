<?php 
$poster_image = get_sub_field('poster_image')['url'];
$poster_image_alt = get_sub_field('poster_image')['alt'];
$embed_code = get_sub_field('embed_code');

?>         

<!-- carousel -->
<div class='article-carousel article-component js-carousel'>
<div class='article-carousel-prev article-carousel-button'><img src='<?php echo get_template_directory_uri(); ?>/img/leftArrow.png' class='top'><img src='<?php echo get_template_directory_uri(); ?>/img/leftArrow-black.jpg' class='bottom'></div>
    <div class='js-carousel-slicktarget'>
        <?php
        if(have_rows('carousel_entries')):

           while(have_rows('carousel_entries')): the_row();
       $image_url = get_sub_field('carousel_image')['url'];
       $image_caption = get_sub_field('caption');
       ?>


       <div class=''>
        <img class='js-carousel-image' data-src='<?php echo $image_url ?>'>
        <div class='article-caption'>
            <?php echo $image_caption ?>
        </div>
    </div>


<?php endwhile; endif; ?>           
</div>
<div class='article-carousel-next article-carousel-button'><img src='<?php echo get_template_directory_uri(); ?>/img/rightArrow.png' class='top'><img src='<?php echo get_template_directory_uri(); ?>/img/rightArrow-black.jpg' class='bottom'></div>

</div>

</div>