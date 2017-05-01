<?php 

if ( ! post_password_required() ) {

    include "wp/wp-load.php";

    $args = array(
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'post_type' => 'articles',
        'has_password' => false

    );

    //$posts = new WP_Query('post_type=articles&posts_per_page=-1&has_password=f&post_status=publish');
   $posts = new WP_Query($args);
    $posts = $posts->posts;

// header('Content-type:text/plain');
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename=dare-greatly-articles-'.date('m-d-Y').'.csv');

// create a file pointer connected to the output stream
    $output = fopen('php://output', 'w');

// output the column headings
    fputcsv($output, array('Permalink', 'Title'));


    foreach($posts as $post) {
        switch ($post->post_type) {
            case 'revision':
            case 'nav_menu_item':
            break;
        // case 'page':
        //     //$permalink = get_page_link($post->ID);
        //     break;
            case 'post':
            $permalink = get_permalink($post->ID);
            break;
        // case 'attachment':
        //     $permalink = get_attachment_link($post->ID);
        //     break;
            default:
            $permalink = get_post_permalink($post->ID);
            break;
        }
    //echo "\n{$post->post_type}\t{$permalink}\t{$post->post_title}";

        $row = array($permalink, $post->post_title);

        fputcsv($output, $row);
    }

}

else {
    echo get_the_password_form();
}

?>
