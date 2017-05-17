<!DOCTYPE html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js ie6 oldie" <?php language_attributes(); ?> > <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" <?php language_attributes(); ?> > <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" <?php language_attributes(); ?> "> <![endif]-->
<!--[if IE 9]>    <html class="no-js ie9" <?php language_attributes(); ?> "> <![endif]-->
<!-- Consider adding an manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 9]><!-->
<html class="no-js" <?php language_attributes(); ?> >
<!--<![endif]-->

<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <title>
        <?php wp_title('|', true, 'right'); ?>
    </title>
    <!-- Mobile viewport optimized: j.mp/bplateviewport -->
    <meta name="viewport" content="width=device-width, user-scalable=no" />
    <!-- Favicon and Feed -->
    <link rel="shortcut icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
    <link rel="alternate" type="application/rss+xml" title="<?php bloginfo('name'); ?> Feed" href="<?php echo home_url(); ?>/feed/">
    <!--  iPhone Web App Home Screen Icon -->
    <link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_template_directory_uri(); ?>/img/devices/reverie-icon-ipad.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_template_directory_uri(); ?>/img/devices/reverie-icon-retina.png" />
    <link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/img/devices/reverie-icon.png" />
    <!-- Enable Startup Image for iOS Home Screen Web App -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <link rel="apple-touch-startup-image" href="<?php echo get_template_directory_uri(); ?>/mobile-load.png" />
    <!-- Startup Image iPad Landscape (748x1024) -->
    <link rel="apple-touch-startup-image" href="<?php echo get_template_directory_uri(); ?>/img/devices/reverie-load-ipad-landscape.png" media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:landscape)" />
    <!-- Startup Image iPad Portrait (768x1004) -->
    <link rel="apple-touch-startup-image" href="<?php echo get_template_directory_uri(); ?>/img/devices/reverie-load-ipad-portrait.png" media="screen and (min-device-width: 481px) and (max-device-width: 1024px) and (orientation:portrait)" />
    <!-- Startup Image iPhone (320x460) -->
    <link rel="apple-touch-startup-image" href="<?php echo get_template_directory_uri(); ?>/img/devices/reverie-load.png" media="screen and (max-device-width: 320px)" />

    <?php wp_head(); ?>
        <!--  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.0/TweenMax.min.js"></script>-->
        <!--<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ScrollToPlugin.min.js"></script>-->
        <!-- <script type="text/javascript" src="//cdn.jsdelivr.net/jquery.slick/1.5.7/slick.min.js"></script>-->
        <!--<script src="<?php echo get_template_directory_uri(); ?>/js/vendor.js"></script>-->
        <!--<script src="<?php echo get_template_directory_uri(); ?>/js/dg.js"></script>*/-->
        <script>
        var s_account = "gmcadillac";
        </script>
            <script src="<?php echo get_template_directory_uri(); ?>/js/s_code.js"></script>
            <script>
!function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
// Insert Twitter Pixel ID and Standard Event data below
twq('init','nxfop');
twq('track','PageView');
</script>

        <!-- Hotjar Tracking Code for http://dare-greatly.ca/ -->
        <script>
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:500068,hjsv:5};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
        </script>

</head>

<body <?php body_class( 'antialiased'); ?>>
    
        <menu class='mobile-menu'>

        <div class='js-background-click-target background-click-target'></div>
            <div class='mobile-menu-solid'>
                <div class='mobile-menu-close'>✕</div>
                <ul class='mobile-menu-panel main-menu'>
                    <?php
                $homeMenu =  wp_nav_menu( array(
                    'theme_location' => 'primary',
                    
                    'depth' => 0,
                    'items_wrap' => '%3$s',
                    'echo' => true
                    
                    ) );

                
// Find the closing bracket of each li and the opening of the link, then all instances of "li"
                //$find = array('><a','li');
// Replace the former with nothing (a.k.a. delete) and the latter with "a"
                //$replace = array('','a');
                //echo str_replace( $find, $replace, $homeMenu ); 
                $expandedHeader = get_field('expanded_header_text','option');
                $collapsedHeader = get_field('collapsed_header_text','option');
                $headerMenuText = get_field('header_menu_text','option');
                $show_localization_menu = get_field('show_localization_menu','option') == "Yes";
                $localization_title = get_field('localization_title','option') ;

                ?>
                </ul>
                <?php if ($show_localization_menu):?>
                    <div class='mobile-menu-panel mobile-dropdown animate-on' style="display:none;">
                        <div class='mobile-dropdown-label'>Region</div>
                        <a data-dropdown="mobile-dropdown" class='mobile-dropdown-current-choice' aria-controls="mobile-dropdown" aria-expanded="false">
                            <div class='current-choice-label'>
                                <?php echo $localization_title; ?>
                            </div>
                            <div class='down-arrow'></div>
                        </a>
                        <ul id="mobile-dropdown" class="small mobile-dropdown-menu" id='mobile-dropdown-menu' data-dropdown-content aria-hidden="true" tabindex="-1">
                            <?php
                    wp_nav_menu( array(
                    'menu' => 'Localization',
                    'depth' => 0,
                    'container'=>false,
                    'items_wrap' => '%3$s',
                    'echo' => true
                    
                    ) );

                ?>
                                <!-- <li><a href="#">CA - English</a></li>
                        <li><a href="#">CA - French</a></li> -->
                        </ul>
                    </div>
                    <?php endif; ?>
            </div>
        </menu>
        <header class="sticky-header full-width">
            <div class="row large-collapse">

                <div class="large-6 medium-4 small-10 medium-uncentered small-centered columns">
                    <div class='header-logo-lockup'>


                    <a href="<?php echo get_bloginfo($show = 'wpurl'); ?>">     
                <img alt="Cadillac" src="<?php echo get_template_directory_uri(); ?>/img/logo.png" class="cadillac-logo-expanded">
                    <img alt="Cadillac" src="<?php echo get_template_directory_uri(); ?>/img/logo_collapsed.png" class="cadillac-logo-collapsed">
                    <h1 class='expanded'><?php echo $expandedHeader ?></h1>
                    <h1 class='collapsed'><?php echo $collapsedHeader ?></h1></a>
                    </div>
                </div>
                <div class='header-menuburger noselect'>menu</div>
                <div class='article-header-main-nav columns show-for-medium-up medium-6 large-4'>
                    <?php
                $homeMenu =  wp_nav_menu( array(
                    'theme_location' => 'primary',
                    'depth' => 0,
                    'items_wrap' => '%3$s',
                    'echo' => false
                    
                    ) );

                
// Find the closing bracket of each li and the opening of the link, then all instances of "li"
                $find = array('><a','li');
// Replace the former with nothing (a.k.a. delete) and the latter with "a"
                $replace = array('','a');
                echo str_replace( $find, $replace, $homeMenu ); 

                ?>
                        <?php if($show_localization_menu) : ?>
                            <a data-dropdown="header-dropdown" class='header-dropdown-current-choice hide' aria-controls="header-dropdown" aria-expanded="false">
                                <?php echo $localization_title; ?>
                            </a>
                            <ul id="header-dropdown" class="f-dropdown header-dropdown-menu" data-dropdown-content aria-hidden="true"  aria-autoclose='true'  tabindex="-1">
                                <?php
                    wp_nav_menu( array(
                    'menu' => 'Localization',
                    'depth' => 0,
                    'container'=>false,
                    'items_wrap' => '%3$s',
                    'echo' => true
                    
                    ) );

                ?>
                            </ul>
                            <?php endif; ?>

                </div>
            </div>
            </div>
        </header>
        <!-- Start the main container -->
        <div class="main-content" role="document">


