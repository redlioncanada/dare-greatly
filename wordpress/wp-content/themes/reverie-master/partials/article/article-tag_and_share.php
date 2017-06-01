<!-- tags-and-share -->
<?php 

$share_copy = get_field('share_copy','options');
//
$share_title_fb = get_field('share_title_fb', 'options');
$share_title_linkedin = get_field('share_title_linkedin', 'options');
$share_title_twitter = get_field('share_title_twitter', 'options');
$share_title_email = get_field('share_title_email', 'options');
$share_title_gplus = get_field('share_title_gplus', 'options');


if(!$share_copy){
    $share_copy = "Share:";
}
if(!share_title_fb){
    $share_title_fb = "Follow us on Facebook";

}

if(!share_title_linkedin){
    $share_title_linkedin = "Follow us on LinkedIn";
}

if(!share_title_twitter){
    $share_title_twitter = "Follow us on Twitter";
}

if(!share_title_email){
    $share_title_email = "Email us";
}

if(!share_title_gplus){
    $share_title_gplus = "Follow us on Google+";
}

?>

<div class='row article-component article-tags-and-share'>
    <div class='columns medium-8 large-6 medium-centered small-8 small-centered'>
        <div class='row medium-collapse'>
            <div class='columns article-share end push-6 medium-4 small-10 medium-uncentered '>
                <span class='article-share-title'><?php echo $share_copy; ?></span>
                <a href="#" id="shareFacebook" title="<?php echo $share_title_fb; ?>" data-share-facebook> <i class="fa fa-facebook"></i> </a>
                <a href="#" id="shareTwitter" title="<?php echo $share_title_twitter; ?>" class="btn btn-default" data-share-twitter data-share-text=""> <i class="fa fa-twitter"></i> </a>
                <a href="#" id="shareGoogle" data-share-google-plus data-share-url href="https://plus.google.com/+Cadillac" target="_blank" title="<?php echo $share_title_gplus; ?>"> <i class="fa fa-google-plus"></i> </a>
                <a href="#" id="shareLinkedIn" href="http://cadillac.tumblr.com/" data-share-linkedin target="_blank" title="<?php echo $share_title_linkedin; ?>"><i class="fa fa-linkedin-square"></i></a>
                <a href="#" id="shareEmail" target="_blank" title="<?php echo $share_title_email; ?>"> <i class="fa fa-envelope"></i> </a>
            </div>
            <div class='columns article-tags columns pull-4 medium-6 medium-uncentered '>
                <?php 
                //var_dump(get_field('show_categories_and_topics_on_articles','options'));
                $show_cats = get_field('show_categories_and_topics_on_articles','options');
                

                if($show_cats == "Yes"){
                    
                   get_template_part('partials/article/article','tags');
                } else {
                    echo $show_cats;
                }
                get_template_part('partials/article/article','attribution');    
                ?>
            </div>
        </div>
    </div>
</div>
</div>
