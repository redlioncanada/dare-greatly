<?php 
$image_url = get_sub_field('image')['url'];
$image_caption = get_sub_field('caption');

	?>

<div class="row article-mondrian-a article-component">
    <div class='large-centered medium-10 small-10 medium-centered small-centered columns'>
        <div class='article-mondrian js-mondrian'>
            <div class='mondrian-image-clipper'><img class='mondrian-image' src='<?php echo $image_url ?>'></div>
            <img class='mondrian-mask' src='<?php echo get_template_directory_uri(); ?>/img/mondrian_mask.png'>
        </div>
    </div>

    <div class='article-mondrian-caption article-caption small-centered medium-5 small-8 medium-offset-5 columns'>
        <?php echo $image_caption ?>
        
    </div>
</div>
