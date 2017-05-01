<!-- tags-and-share -->
<?php 

$share_copy = get_field('share_copy','options');

if(!$share_copy){
    $share_copy = "Share:";
}

?>

<div class='row article-component article-tags-and-share'>
    <div class='columns medium-8 large-6 medium-centered small-8 small-centered'>
        <div class='row medium-collapse'>
            <div class='columns article-share end push-6 medium-4 small-10 medium-uncentered '>
                <span class='article-share-title'><?php echo $share_copy; ?></span>
                <a href="#" id="shareFacebook" title="Follow us on Facebook" data-share-facebook> <i class="fa fa-facebook"></i> </a>
                <a href="#" id="shareTwitter" title="Follow us on Twitter" class="btn btn-default" data-share-twitter data-share-text=""> <i class="fa fa-twitter"></i> </a>
                <a href="#" id="shareGoogle" data-share-google-plus data-share-url href="https://plus.google.com/+Cadillac" target="_blank" title="Follow us on Google+"> <i class="fa fa-google-plus"></i> </a>
                <a href="#" id="shareLinkedIn" href="http://cadillac.tumblr.com/" data-share-linkedin target="_blank" title="Follow us on LinkedIn"><i class="fa fa-linkedin-square"></i></a>
                <a href="#" id="shareEmail" target="_blank" title="Email us"> <i class="fa fa-envelope"></i> </a>
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
