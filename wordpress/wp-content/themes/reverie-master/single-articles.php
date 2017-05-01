


<?php get_header(); ?>
<!-- Row for main content area -->

	<?php
if ( ! post_password_required() ) {


	// ACF check if the flexible content field has rows of data
	if( have_rows('flex_content') ):

	     // loop through the rows of data; 
         // use the name of the row layout to refer to partials/articles item.
	    while ( have_rows('flex_content') ) : the_row();
			
            get_template_part('partials/article/article',get_row_layout());

	    endwhile;

	else :
        
	    // no layouts found

	endif;

# add email subject and body scripts

	$email_subject = get_field('email_subject');
	if(!$email_subject){
		$email_subject =  get_field('article_title');
	}

	$email_body = get_field('email_body');
	if(!$email_body){
		$email_body = get_field('article_summary');
	}
	$email_vars = array(
		'subject'=>$email_subject,
		'body'=>$email_body
		);
	wp_localize_script( 'dg', 'email_vars', $email_vars );

	$linkedInTitle = get_field('linkedIn_title');
	$linkedInDesc =  get_field('linkedin_description');
	$linkedInImage =  get_field('linkedin_image');

	$linkedIn_sharing = array(
		'title' => $linkedInTitle,
		'desc' => $linkedInDesc
		//'image' => $linkedInImage
	);

	wp_localize_script( 'dg', 'linkedIn_sharing', $linkedIn_sharing );







    
# # #

	get_template_part('partials/article/article','disclaimer');
	

    get_template_part('partials/article/article','tag_and_share');
    	$part_of_series = get_field('is_part_of_series');
	if($part_of_series){
		
		get_template_part('partials/article/article','series');
	}
    get_template_part('partials/article/article','related_and_promotional');
    get_template_part('partials/article/article','top_button');

} else {
	echo get_the_password_form();
}

	?>



<?php get_footer(); ?>