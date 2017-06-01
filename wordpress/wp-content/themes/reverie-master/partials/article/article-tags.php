<?php
    
    $filed_under_label = get_field('filed_under_label','options');
if(!$filed_under_label){
    $filed_under_label = "Filed under:";
}
    
        $a_tags = wp_get_post_terms( $post->ID, 'group_a_tags');
        $b_tags = wp_get_post_terms( $post->ID, 'group_b_tags');
        $c_tags = wp_get_post_terms( $post->ID, 'group_c_tags');
        $d_tags = wp_get_post_terms( $post->ID, 'group_d_tags');

        $posttags = array_merge($a_tags,$b_tags,$d_tags);
        if ($posttags) {
            echo("<div class='article-tags'><span class='filed-under'>" . $filed_under_label . "  </span>");
            $tagString = "";
            foreach($posttags as $tag) {
                $tagString .= $tag->name . ', '; 
            }
            echo rtrim($tagString, ", ");
            echo("</div>");
        }
    

function getGroupTags($tags, $errorMsg) {
    if ($tags) {
            $tagString = "";
            foreach($tags as $tag) {
                $tagString .= $tag->name . ', '; 
            }
            return rtrim($tagString, ", ");
        }
        else {
            return $errorMsg;
        }
    }


?>


<script type="text/javascript">
            <!--
                if(typeof(Omniture_s) != "undefined"){
                    Omniture_s.server = window.location.hostname;                   
                            Omniture_s.channel = "daregreatly"; 
    
                            Omniture_s.eVar4 = "en"; 
                            
                            Omniture_s.eVar17 = "microsite_ca"; 
                            
                            Omniture_s.eVar18 = "cadillac"; 
                            
                            Omniture_s.eVar31 = "ca"; 
                            
                            Omniture_s.eVar32 = "northamerica"; 
                            
                            Omniture_s.hier1 = "daregreatly,article,<?php echo get_group_a($post->ID); ?>,<?php echo get_group_d($post->ID); ?>,<?php wp_title('|', true, 'right'); ?>"; 
                            
                            Omniture_s.pageName = "ca:no:ca:en:daregreatly:article:<?php echo get_group_a($post->ID);  ?>:<?php echo get_group_d($post->ID); ?>:<?php wp_title('|', true, 'right'); ?>"; 
                            
                            Omniture_s.prop10 = "article" 

                            Omniture_s.prop11 = "<?php echo get_group_a($post->ID); ?>"; 

                            Omniture_s.prop12 = "<?php echo get_group_d($post->ID); ?>"; 

                            Omniture_s.prop13 = "<?php wp_title('|', true, 'right'); ?>";
                            
                            Omniture_s.prop17 = "microsite_ca"; 
                            
                            Omniture_s.prop18 = "cadillac"; 
                            
                            Omniture_s.prop23 = "en"; 

                            Omniture_s.prop33 = "<?php echo getGroupTags($b_tags, 'No Topics Found'); ?>";

                            Omniture_s.prop34 = "<?php echo getGroupTags($c_tags, 'No Tags Found'); ?>"; 
                                                     

                        
                    Omniture_s.eVar29 = Omniture_s.getQueryParam('seo');                    
                }           
                function getOmnitureLinktrackingCode(linkname){
                    if(typeof(Omniture_s) != "undefined"){
                        if(s_account){
                            var s=s_gi(s_account);
                            Omniture_s.tl(this,'e',linkname);
                        }
                    }
                }
                var s_code=Omniture_s.t();if(s_code)document.write(s_code)
            // -->
    </script>
    

    <script language="JavaScript" type="text/javascript"><!--
if(navigator.appVersion.indexOf('MSIE')>=0)document.write(unescape('%3C')+'\!-'+'-')
//--></script><noscript><img src="http://generalmotors.112.2o7.net/b/ss/gmcadillac/1/H.22.1--NS/0"
height="1" width="1" border="0" alt="" /></noscript><!--/DO NOT REMOVE/-->
<!-- End SiteCatalyst code version: H.22.1. -->
