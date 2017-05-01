</div>
<!-- Container End -->
<div id="signUpModal" class="reveal-modal" data-reveal aria-labelledby="modalTitle" aria-hidden="true" role="dialog">
This modal will be populated with a call to Axiom Server
  <a class="close-reveal-modal" aria-label="Close">&#215;</a>
</div>

<footer class="full-width">
    <?php 

  $footer_cta =  get_field('footer_cta','options');
  $footer_title =  get_field('footer_title','options');
  $footer_social_cta = get_field('footer_social_cta','options');
  $footer_legal = get_field('footer_legal','options');
  $show_email_submission = get_field('show_email_submission','options') == "Yes";
  $email_placeholder        = get_field('email_placeholder_footer','options');  
  $email_link        = get_field('sign_up_link','options');  

?>
        <div class="inner-grid row medium-uncollapse small-10 medium-10 small-centered ">
            <!-- first block: desktop branding -->
            <div class="medium-3 show-for-medium-up columns">
                <h4><?php echo $footer_title;?></h4>
                <span class="footer-sub"><?php echo $footer_cta;?></span>
            </div>
            <!-- second block: shares -->
            <div class="medium-3 small-10 medium-push-4 social-icons-container columns small-only-text-center medium-only-text-right  text-right">
                <?php if($show_email_submission) : ?>
                <form class='footer-email show-for-medium-up' action="<?php echo $email_link?>" target="_blank">
                 <!--    <div class='emailinput'>
                        <input tabindex="1" type="text" class='' placeholder="<?php echo $email_placeholder ?>" />
                    </div> -->
         <button class="button" alt="Subscribe" tabindex="2"><span><?php echo $email_placeholder ?></span></button>
                </form>
                <?php endif; ?>
                <span class="footer-sub"><?php echo $footer_social_cta;?></span>
                <div class='social-icons'>
                    <?php 
    if( have_rows('social_links', 'options') ):
 
        while( have_rows('social_links','options') ): the_row();
    $iconGraphic = get_sub_field('icon_graphic_name');
    $linkUrl = get_sub_field('link');
    $title = get_sub_field('title');
    ?>
                        <a href="<?php echo $linkUrl; ?>" target="_blank" class="follow" title="<?php echo $title; ?>"> 
  <i class="fa fa-<?php echo $iconGraphic ?>"></i> </a>
                        <?php 
   endwhile;
   endif;
   ?>
                </div>
                <?php if($show_email_submission) : ?>
                    <form class='footer-email show-for-small-only' action="<?php echo $email_link?>" target="_blank">
                        <div class='columns small-centered small-collapsed small-8'>
                          <button class="button" alt="Subscribe" tabindex="2"><span><?php echo $email_placeholder ?></span></button>
                        </div>
                    </form>
                    <?php endif; ?>
            </div>
            <!-- third block: 4 links -->
            <!-- <div class='footer-links columns medium-pull-3 medium-2 small-only-text-center medium-up-left'>
        <a class="footer-link  left-column" id="about" href="#" target="_blank">About</a>
        <a class="footer-link  left-column" id="contact" href="#" target="_blank">Contact Us</a>
    </div>
    <div class='footer-links columns medium-pull-3 medium-2 small-only-text-center medium-up-left'>
        <a class="footer-link" id="privacy" href="http://www.gm.com/privacy/" target="_blank">Privacy Policy</a>
        <a class="footer-link" id="terms" href="http://www.gm.com/copyright-trademark" target="_blank">Terms of Use</a>
    </div>  -->


      <?php


                    $footermenu = wp_nav_menu( array(
                    'menu' => 'Footer',
                    'depth' => 0,
                    'container'=>'div',
                    'container_class'=> 'footer-links columns medium-pull-3 medium-4 small-only-text-center medium-up-left',
                    'items_wrap' => '%3$s',
                    'echo' => false
                    
                    ) );
echo strip_tags($footermenu, '<a><div>' );

    ?>

           
        </div>
        <!-- fourth block: copyright statement and cta for mobile -->
        <div class='full-width footer-legal-section-row collapse'>
            <div class='row'>
                <div class='columns small-10 medium-10 small-centered footer-legal-section-column'>
                    <div class='footer-cta show-for-small-only'>
                        <?php echo $footer_cta;?>
                    </div>
                    <div class='footer-legal'>
                        <?php echo $footer_legal;?>
                    </div>
                </div>
            </div>
        </div>
</footer>
<script>


// FALLBACK SCRIPTS
// the below adds any libraries that failed to load from the CDNs. These need to be MANUALLY ADDED HERE.
addLocalIfNotDefined(window.jQuery, '/wp-content/themes/reverie-master/js/fallbacks/jquery.min.js');
addLocalIfNotDefined(window.TimelineMax, '/wp-content/themes/reverie-master/js/fallbacks/TweenMax.min.js');
addLocalIfNotDefined(window.TimelineMax && window.com.greensock.plugins.ScrollToPlugin, '/wp-content/themes/reverie-master/js/fallbacks/ScrollToPlugin.min.js');
addLocalIfNotDefined(window.jQuery && window.jQuery().slick, '/wp-content/themes/reverie-master/js/fallbacks/slick.min.js');

function addLocalIfNotDefined(condition, local) {
    if (!condition) {
        document.write('<script src="' + local + '"><\/script>');
    }
}
</script>
<?php wp_footer(); ?>
    <!-- <a href="#" class="track" data-tracking="This is what I want to sent to analytics">Click me to track</a> -->
    <script>
    (function($) {
      
        $(document).foundation();
    })(jQuery);
    </script>
    <script src="/wp-content/themes/reverie-master/js/click_tracking.js"></script>
    <script language="JavaScript" type="text/javascript">
    <!--
    if (navigator.appVersion.indexOf('MSIE') >= 0) document.write(unescape('%3C') + '\!-' + '-')
        //-->
    </script>
    <noscript><img src="http://generalmotors.112.2o7.net/b/ss/gmcadillac/1/H.22.1--NS/0" height="1" width="1" border="0" alt="" /></noscript>
    <!--/DO NOT REMOVE/-->
    <!-- End SiteCatalyst code version: H.22.1. -->
    <script type="text/javascript">
    (function() {
        var tagjs = document.createElement("script");
        var s = document.getElementsByTagName("script")[0];
        tagjs.async = true;
        tagjs.src = "//s.btstatic.com/tag.js#site=MKAlTBl";
        s.parentNode.insertBefore(tagjs, s);
    }());
    </script>
    <noscript>
        <!--Signal UI-->
        <iframe src="//s.thebrighttag.com/iframe?c=MKAlTBl" width="1" height="1" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> -->
        <!--Site Catalyst-->
        <img style="width:0 !important;" src="http://generalmotors.112.2o7.net/b/ss/gmcadillac/1/H.22.1--NS/0" height="1" width="1" border="0" alt="" />
    </noscript>
    <!--BEGIN QUALTRICS SITE INTERCEPT-->
    <script type='text/javascript'>
    (function(){var g=function(e,h,f,g){
    this.get=function(a){for(var a=a+"=",c=document.cookie.split(";"),b=0,e=c.length;b<e;b++){for(var d=c[b];" "==d.charAt(0);)d=d.substring(1,d.length);if(0==d.indexOf(a))return d.substring(a.length,d.length)}return null};
    this.set=function(a,c){var b="",b=new Date;b.setTime(b.getTime()+6048E5);b="; expires="+b.toGMTString();document.cookie=a+"="+c+b+"; path=/; "};
    this.check=function(){var a=this.get(f);if(a)a=a.split(":");else if(100!=e)"v"==h&&(e=Math.random()>=e/100?0:100),a=[h,e,0],this.set(f,a.join(":"));else return!0;var c=a[1];if(100==c)return!0;switch(a[0]){case "v":return!1;case "r":return c=a[2]%Math.floor(100/c),a[2]++,this.set(f,a.join(":")),!c}return!0};
    this.go=function(){if(this.check()){var a=document.createElement("script");a.type="text/javascript";a.src=g+ "&t=" + (new Date()).getTime();document.body&&document.body.appendChild(a)}};
    this.start=function(){var a=this;window.addEventListener?window.addEventListener("load",function(){a.go()},!1):window.attachEvent&&window.attachEvent("onload",function(){a.go()})}};
    try{(new g(100,"r","QSI_S_ZN_5cFoezj2kv4n9uB","//zn_5cfoezj2kv4n9ub-generalmotors.siteintercept.qualtrics.com/WRSiteInterceptEngine/?Q_ZID=ZN_5cFoezj2kv4n9uB&Q_LOC="+encodeURIComponent(window.location.href))).start()}catch(i){}})();
    </script><div id='ZN_5cFoezj2kv4n9uB'><!--DO NOT REMOVE-CONTENTS PLACED HERE--></div>
    <!--END SITE INTERCEPT-->
    </body>

    </html>
