<?php
/*
Author: Zhen Huang
URL: http://themefortress.com/

This place is much cleaner. Put your theme specific codes here,
anything else you may want to use plugins to keep things tidy.

*/

/*
1. lib/clean.php
  - head cleanup
	- post and images related cleaning
*/
require_once('lib/clean.php'); // do all the cleaning and enqueue here

/*
2. lib/enqueue-style.php
    - enqueue Foundation and Reverie CSS
*/
    require_once('lib/enqueue-style.php');

/*
3. lib/foundation.php
	- add pagination
*/
require_once('lib/foundation.php'); // load Foundation specific functions like top-bar
/*
4. lib/nav.php
	- custom walker for top-bar and related
*/
require_once('lib/nav.php'); // filter default wordpress menu classes and clean wp_nav_menu markup
/*
5. lib/presstrends.php
    - add PressTrends, tracks how many people are using Reverie
*/
require_once('lib/presstrends.php'); // load PressTrends to track the usage of Reverie across the web, comment this line if you don't want to be tracked

/**********************
Add theme supports
 **********************/
if( ! function_exists( 'reverie_theme_support' ) ) {
    function reverie_theme_support() {
        // Add language supports.
        load_theme_textdomain('reverie', get_template_directory() . '/lang');

        // Add post thumbnail supports. http://codex.wordpress.org/Post_Thumbnails
        add_theme_support('post-thumbnails');
        // set_post_thumbnail_size(150, 150, false);
        add_image_size('fd-lrg', 1024, 99999);
        add_image_size('fd-med', 768, 99999);
        add_image_size('fd-sm', 320, 9999);

        // rss thingy
        add_theme_support('automatic-feed-links');

        // Add post formats support. http://codex.wordpress.org/Post_Formats
        add_theme_support('post-formats', array('aside', 'gallery', 'link', 'image', 'quote', 'status', 'video', 'audio', 'chat'));

        // Add menu support. http://codex.wordpress.org/Function_Reference/register_nav_menus
        add_theme_support('menus');
        register_nav_menus(array(
            'primary' => __('Primary Navigation', 'reverie'),
            'additional' => __('Additional Navigation', 'reverie'),
            'utility' => __('Utility Navigation', 'reverie')
            ));

        // Add custom background support
        add_theme_support( 'custom-background',
            array(
                'default-image' => '',  // background image default
                'default-color' => '', // background color default (dont add the #)
                'wp-head-callback' => '_custom_background_cb',
                'admin-head-callback' => '',
                'admin-preview-callback' => ''
                )
            );
    }
}
add_action('after_setup_theme', 'reverie_theme_support'); /* end Reverie theme support */

// create widget areas: sidebar, footer
$sidebars = array('Sidebar');
foreach ($sidebars as $sidebar) {
    register_sidebar(array('name'=> $sidebar,
    	'id' => 'Sidebar',
        'before_widget' => '<article id="%1$s" class="panel widget %2$s">',
        'after_widget' => '</article>',
        'before_title' => '<h4>',
        'after_title' => '</h4>'
        ));
}
$sidebars = array('Footer');
foreach ($sidebars as $sidebar) {
    register_sidebar(array('name'=> $sidebar,
    	'id' => 'Footer',
        'before_widget' => '<div class="large-3 columns"><article id="%1$s" class="panel widget %2$s">',
        'after_widget' => '</article></div>',
        'before_title' => '<h4>',
        'after_title' => '</h4>'
        ));
}

// return entry meta information for posts, used by multiple loops, you can override this function by defining them first in your child theme's functions.php file
if ( ! function_exists( 'reverie_entry_meta' ) ) {
    function reverie_entry_meta() {
        echo '<span class="byline author">'. __('Written by', 'reverie') .' <a href="'. get_author_posts_url(get_the_author_meta('ID')) .'" rel="author" class="fn">'. get_the_author() .', </a></span>';
        echo '<time class="updated" datetime="'. get_the_time('c') .'" pubdate>'. get_the_time('F jS, Y') .'</time>';
    }
};
function custom_post_type() {

    $custom_url_piece = get_field('custom_url_piece','option');
    $custom_url_piece= strtolower($custom_url_piece);

    $labels = array(
        'name'                  => _x( 'Articles', 'Articles', 'text_domain' ),
        'singular_name'         => _x( 'Articles', 'Articles', 'text_domain' ),
        'menu_name'             => __( 'Articles', 'text_domain' ),
        'name_admin_bar'        => __( 'Articles', 'text_domain' ),
        'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
        'all_items'             => __( 'All Items', 'text_domain' ),
        'add_new_item'          => __( 'Add New Item', 'text_domain' ),
        'add_new'               => __( 'Add New', 'text_domain' ),
        'new_item'              => __( 'New Item', 'text_domain' ),
        'edit_item'             => __( 'Edit Item', 'text_domain' ),
        'update_item'           => __( 'Update Item', 'text_domain' ),
        'view_item'             => __( 'View Item', 'text_domain' ),
        'search_items'          => __( 'Search Item', 'text_domain' ),
        'not_found'             => __( 'Not found', 'text_domain' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
        'items_list'            => __( 'Items list', 'text_domain' ),
        'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
        'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
        );
$args = array(
    'label'                 => __( 'Post Type', 'text_domain' ),
    'description'           => __( 'Post Type Description', 'text_domain' ),
    'labels'                => $labels,
    'supports'              => array( ),
    'taxonomies'            => array( 'category', 'post_tag' ),
    'hierarchical'          => false,
    'public'                => true,
    'show_ui'               => true,
    'show_in_menu'          => true,
    'menu_position'         => 5,
    'show_in_admin_bar'     => true,
    'show_in_nav_menus'     => true,
    'can_export'            => true,
    'has_archive'           => true,        
    'exclude_from_search'   => false,
    'publicly_queryable'    => true,
    'rewrite' => array(
        'slug' => $custom_url_piece.'/%group_a_tags%/%group_d_tags%',
        'with_front' => false
        ),
    'capability_type'       => 'post',

    'capability_type'       => 'page',
    );
register_post_type( 'Articles', $args );



    $series_labels = array(
        'name'                  => _x( 'Series', 'Series', 'text_domain' ),
        'singular_name'         => _x( 'Series', 'Series', 'text_domain' ),
        'menu_name'             => __( 'Series', 'text_domain' ),
        'name_admin_bar'        => __( 'Series', 'text_domain' ),
        'parent_item_colon'     => __( 'Parent Item:', 'text_domain' ),
        'all_items'             => __( 'All Items', 'text_domain' ),
        'add_new_item'          => __( 'Add New Item', 'text_domain' ),
        'add_new'               => __( 'Add New', 'text_domain' ),
        'new_item'              => __( 'New Item', 'text_domain' ),
        'edit_item'             => __( 'Edit Item', 'text_domain' ),
        'update_item'           => __( 'Update Item', 'text_domain' ),
        'view_item'             => __( 'View Item', 'text_domain' ),
        'search_items'          => __( 'Search Item', 'text_domain' ),
        'not_found'             => __( 'Not found', 'text_domain' ),
        'not_found_in_trash'    => __( 'Not found in Trash', 'text_domain' ),
        'items_list'            => __( 'Items list', 'text_domain' ),
        'items_list_navigation' => __( 'Items list navigation', 'text_domain' ),
        'filter_items_list'     => __( 'Filter items list', 'text_domain' ),
        );
$series_args = array(
    'label'                 => __( 'Post Type', 'text_domain' ),
    'description'           => __( 'Post Type Description', 'text_domain' ),
    'labels'                => $series_labels,
    'supports'              => array( ),
    'taxonomies'            => array( 'category', 'post_tag' ),
    'hierarchical'          => false,
    'public'                => true,
    'show_ui'               => true,
    'show_in_menu'          => true,
    'menu_position'         => 5,
    'show_in_admin_bar'     => true,
    'show_in_nav_menus'     => true,
    'can_export'            => true,
    'has_archive'           => true,        
    'exclude_from_search'   => false,
    'publicly_queryable'    => true,
    'capability_type'       => 'post',
    'capability_type'       => 'page',
    );
register_post_type( 'Series', $series_args );




}
add_action( 'init', 'custom_post_type', 0 );

function options_page_settings( $settings )
{
    $settings['title'] = 'Global';
    $settings['pages'] = array('Header','Footer','Articles','Attributions','Related Articles');

    return $settings;
}

add_filter('acf/options_page/settings', 'options_page_settings');

function format_date($strDate) {
    $date = new DateTime($strDate);
    return $date->format("M d"); // Month Day
} 

add_action('plugins_loaded', 'rpc_load_translation_files');
add_action('admin_footer-post.php', 'rpc_admin_footer_post_func');
add_action('admin_footer-post-new.php', 'rpc_admin_footer_post_func');

function rpc_load_translation_files(){
    load_plugin_textdomain( 'require-post-category', false, basename(dirname( __FILE__ )) . '/languages');
}

function rpc_admin_footer_post_func(){

    global $post_type;
    if($post_type=='articles'){
        echo "<script src='" . get_template_directory_uri() . "/js/validate_article.js'></script>";
    }
}
//Add group tags to the Custom Post Types
add_filter('post_type_link', 'rating_permalink', 10, 3);

function rating_permalink($permalink, $post_id, $leavename) {
    if (strpos($permalink, '%group_a_tags%') === FALSE) return $permalink;

        // Get post
    $post = get_post($post_id);
    if (!$post) return $permalink;

        // Get taxonomy terms
    $terms = wp_get_object_terms($post->ID, 'group_a_tags');   
    if (!is_wp_error($terms) && !empty($terms) && is_object($terms[0])) $taxonomy_slug = $terms[0]->slug;
    else $taxonomy_slug = 'not-rated';

    return str_replace('%group_a_tags%', $taxonomy_slug, $permalink);
}   
//Add group tags to the Custom Post Types
add_filter('post_type_link', 'rating_permalink_d', 10, 3);

function rating_permalink_d($permalink, $post_id, $leavename) {
    if (strpos($permalink, '%group_d_tags%') === FALSE) return $permalink;

        // Get post
    $post = get_post($post_id);
    if (!$post) return $permalink;

        // Get taxonomy terms
    $terms = wp_get_object_terms($post->ID, 'group_d_tags');   
    if (!is_wp_error($terms) && !empty($terms) && is_object($terms[0])) $taxonomy_slug = $terms[0]->slug;
    else $taxonomy_slug = 'not-rated';

    return str_replace('%group_d_tags%', $taxonomy_slug, $permalink);
}   

//Fix the pages showing a 404 errors
add_filter('rewrite_rules_array','remove_bare_folder_rule');
function remove_bare_folder_rule( $rules )
{
    unset($rules['([^/]+)/?$']);
    return $rules;
}





add_action( 'init', 'create_group_taxonomies', 0 );

function create_group_taxonomies(){
    $a = create_group_taxonomy('A','Categories','Category');
    $b = create_group_taxonomy('B','Secondary Topics','Topic');
    $d = create_group_taxonomy('D','Featured Topic','Featured Topic');
    $c = create_group_taxonomy('C','Tags','Tag');

    register_taxonomy( 'group_a_tags', 'articles', $a );
    register_taxonomy( 'group_d_tags', 'articles', $d );
    register_taxonomy( 'group_b_tags', 'articles', $b );
    register_taxonomy( 'group_c_tags', 'articles', $c );

}

// create two taxonomies, GroupAItems and writers for the post type "book"
function create_group_taxonomy($letter,$pluraltitle, $singulartitle) {
    // Add new taxonomy, make it hierarchical (like categories)
    $labels = array(
        'name'              => _x( $pluraltitle, 'taxonomy general name' ),
        'singular_name'     => _x( $singulartitle, 'taxonomy singular name' ),
        'search_items'      => __( 'Search ' . $pluraltitle ),
        'all_items'         => __( 'All '.$pluraltitle ),
        'parent_item'       => __( 'Parent ' . $singulartitle ),
        'parent_item_colon' => __( 'Parent ' . $singulartitle . ':' ),
        'edit_item'         => __( 'Edit ' . $singulartitle . ':' ),
        'update_item'       => __(  'Update ' . $singulartitle . ':' ),
        'add_new_item'      => __(  'Add new ' . $singulartitle . '' ),
        'new_item_name'     => __(  'Add new ' . $singulartitle . ' name' ),
        'menu_name'         => __( $pluraltitle ),
        );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => false,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'group_' . $letter ),
        );

    return $args;
}
function remove_quick_edit( $actions ) {
    unset($actions['inline hide-if-no-js']);
    return $actions;
}
add_filter('post_row_actions','remove_quick_edit',10,1);


add_action('admin_menu', 'remove_article_tags_and_categories');

function remove_article_tags_and_categories() {
 remove_submenu_page('edit.php?post_type=articles', 'edit-tags.php?taxonomy=category&amp;post_type=articles');
 remove_submenu_page('edit.php?post_type=articles', 'edit-tags.php?taxonomy=post_tag&amp;post_type=articles');
}

function get_group_a($post_id){
    $terms = wp_get_post_terms( $post_id, 'group_a_tags');
    if(count($terms) > 0){
        return $terms[0]->name;
    }   
}
function get_group_d($post_id){
    $terms = wp_get_post_terms( $post_id, 'group_d_tags');
    if(count($terms) > 0){
        return $terms[0]->name;
    }   
}




function wpse_139269_term_radio_checklist( $args ) {
    if ( ! empty( $args['taxonomy'] ) && $args['taxonomy'] === 'group_a_tags' /* <== Change to your required taxonomy */ ) {
        if ( empty( $args['walker'] ) || is_a( $args['walker'], 'Walker' ) ) { // Don't override 3rd party walkers.
        if ( ! class_exists( 'WPSE_139269_Walker_Category_Radio_Checklist' ) ) {
                /**
                 * Custom walker for switching checkbox inputs to radio.
                 *
                 * @see Walker_Category_Checklist
                 */
                class WPSE_139269_Walker_Category_Radio_Checklist extends Walker_Category_Checklist {
                    function walk( $elements, $max_depth, $args = array() ) {
                        $output = parent::walk( $elements, $max_depth, $args );
                        $output = str_replace(
                            array( 'type="checkbox"', "type='checkbox'" ),
                            array( 'type="radio"', "type='radio'" ),
                            $output
                            );

                        return $output;
                    }
                }
            }

            $args['walker'] = new WPSE_139269_Walker_Category_Radio_Checklist;
        }
    }

    return $args;
}

add_filter( 'wp_terms_checklist_args', 'wpse_139269_term_radio_checklist_d' );

function wpse_139269_term_radio_checklist_d( $args ) {
    if ( ! empty( $args['taxonomy'] ) && $args['taxonomy'] === 'group_d_tags' /* <== Change to your required taxonomy */ ) {
        if ( empty( $args['walker'] ) || is_a( $args['walker'], 'Walker' ) ) { // Don't override 3rd party walkers.
        if ( ! class_exists( 'WPSE_139269_Walker_Category_Radio_Checklist' ) ) {
                /**
                 * Custom walker for switching checkbox inputs to radio.
                 *
                 * @see Walker_Category_Checklist
                 */
                class WPSE_139269_Walker_Category_Radio_Checklist extends Walker_Category_Checklist {
                    function walk( $elements, $max_depth, $args = array() ) {
                        $output = parent::walk( $elements, $max_depth, $args );
                        $output = str_replace(
                            array( 'type="checkbox"', "type='checkbox'" ),
                            array( 'type="radio"', "type='radio'" ),
                            $output
                            );

                        return $output;
                    }
                }
            }

            $args['walker'] = new WPSE_139269_Walker_Category_Radio_Checklist;
        }
    }

    return $args;
}

add_filter( 'wp_terms_checklist_args', 'wpse_139269_term_radio_checklist' );

/*add_filter('acf/validate_value/name=1x1_square', 'my_acf_validate_value', 10, 4);

function my_acf_validate_value( $valid, $value, $field, $input ){
    
    // bail early if value is already invalid
    if( !$valid ) {
        
        return $valid;
        
    }
    
    // load image data
    $data = wp_get_attachment_image_src( $value, 'full' );
    $width = $data[1];
    $height = $data[2];
    syslog("================================hello====================================");
    if( $width != $height or $width < 320 ) {
        
        $valid = 'Image must be a square, with a minimum size of 320px';
        
    }
    
    
    // return
    return $valid;
    
    
}*/

add_action('wp_head', 'create_author_metatag');

function create_author_metatag(){
    $author = get_field('produced_with_fb_profile');
    if(empty($author)){
        $author = 'https://www.facebook.com/cadillac';
    }
    
    echo '<meta property="article:author" content="'. $author .'">';
}

function unused_meta_boxes() {
remove_meta_box('related-links-box','page','side'); // All pages

}

add_action('admin_head', 'unused_meta_boxes');


#refactoring functions


function generate_produced_with($postid,$tag,$classes,$permalink = null){

#used throughout site for produced with credit.

    $credit = get_field('presented_in_partnership_with',$postid);

    if($credit) {
        $label = get_field('produced_with_bottom_label','options');
        $out =  '<' . $tag . " class='$classes'>";

        if(isset($permalink)){
            $out .= '<a href="' . $permalink . '">';
        }
        $out .= $label . " " .$credit;
        $out .= '</' . $tag . '>';
        if($permalink){
            $out .= '</a>';
        }

        echo $out;

    }
}

function get_title_with_fallback($post = null){

#used to generate title from page title if article title doesn't exist.


    $title = get_field('article_title');
    if(!$title){
        if(!$post){
            $title = get_the_title();
        } else {
            $title = get_title($post);
        }
    }
    return $title;
}

    // define the wpseo_opengraph_url callback 
    function filter_wpseo_opengraph_url( $wpseo_frontend ) { 
        // make filter magic happen here... 
        if(isset($wpseo_frontend)) {
         $wpseo_frontend = get_permalink();
        }
         return $wpseo_frontend; 
    }; 
             
    // add the filter 
    add_filter( 'wpseo_opengraph_url', 'filter_wpseo_opengraph_url', 10, 1 ); 



// Filter to hide protected posts
function exclude_protected($where) {
    global $wpdb;
    return $where .= " AND {$wpdb->posts}.post_password = '' ";
}

// Decide where to display them
function exclude_protected_action($query) {

    if( !is_single() && !is_admin() && $query->get_queried_object() && !is_page('export') && !is_page('thosewhodare') && !is_page('ct6') && !is_page('dont-you-dare') && !is_page('terms-and-conditions')) {
        add_filter( 'posts_where', 'exclude_protected' );
    }
}

// Action to queue the filter at the right time
add_action('pre_get_posts', 'exclude_protected_action');
add_filter( 'the_password_form', 'custom_password_form' );
function custom_password_form() {
    global $post;
    $label = 'pwbox-'.(empty($post->ID) ? rand() : $post->ID);
    $output = '<form class="post-password-form" action="' . get_option('siteurl') . '/wp-login.php?action=postpass" method="post">';
    if (isset($_COOKIE['wp-postpass_' . COOKIEHASH]) and $_COOKIE['wp-postpass_' . COOKIEHASH] != $post->post_password){
        $output .='<p class="password-error">Password Invalid, please try again.</p>';
    }
    $output .= '<p>' . __("To view this content, please enter your password below:") . '</p>';
    $output .= '<p><label for="' . $label . '">' . __("Password:") . ' <input name="post_password" id="' . $label . '" type="password" size="20" /></label> <input type="submit" name="Submit" value="' . esc_attr__("Submit") . '" /></p>';
    $output .= '</form>';

        
        

    return $output;
}

//ADDing superscript
function my_mce_buttons_2( $buttons ) { 
    /**
     * Add in a core button that's disabled by default
     */
    $buttons[] = 'superscript';
    $buttons[] = 'subscript';

    return $buttons;
}
add_filter( 'mce_buttons_2', 'my_mce_buttons_2' );



// maintenance mode css hook

function new_css_styles($styles) {
    
    unset($styles['frontend']);
    /*$styles['new-style'] = get_template_directory_uri() . '/css/maintenance-mode-page.css'; // replace with the real path :)
    
    return $styles;*/
    return $styles;
}

add_filter('wpmm_styles', 'new_css_styles');
function wpmm_jquery($scripts){
    
    if(count($scripts) == 2){
        unset($scripts['frontend']);
        unset($scripts['jquery']);
    } else {
    $scripts['jquery'] = '/wp/wp-includes/js/jquery/jquery.js';
    }
    return $scripts;

}
add_filter('wpmm_scripts', 'wpmm_jquery');

function remove_redirect_guess_404_permalink( $redirect_url ) {
    if ( is_404() )
        return false;
    return $redirect_url;
}
add_filter( 'redirect_canonical', 'remove_redirect_guess_404_permalink' );
