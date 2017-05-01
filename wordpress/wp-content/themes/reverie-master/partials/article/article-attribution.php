        <!-- colophon -->
        <?php 

            
            $produced_with_bottom_label = get_field('produced_with_bottom_label','options');
            $written_by_label = get_field('written_by_label','options');
            $photography_by_label = get_field('photography_by_label','options');
            $originally_published_label = get_field('originally_published_label','options');
            $read_more_on_label = get_field('read_more_on_label','options');
            $illustrated_label = get_field('illustrated_by_label','options');


            $partnership = get_field('presented_in_partnership_with');
            $written_by = get_field('written_by');
            $photography = get_field('photography_by');
            $illustration = get_field('illustrated_by');
            $originally_published = get_field('originally_published');
            if($originally_published){
                $publish_date = DateTime::createFromFormat('Ymd', $originally_published);

                if($publish_date){
                $originally_published_string = $publish_date->format('F j, Y');
                }
            }
            $read_more_on = get_field('read_more_on');

        ?>
        <div class='article-colophon'>
           <!--  <div class='columns medium-offset-2 medium-3 small-8 small-centered medium-uncentered'> -->
               <?php if($partnership) : ?>                
                <div class='article-credit'><span class='article-credit-label'><?php echo $produced_with_bottom_label; ?></span> <?php echo $partnership;?></div>
                <?php endif; ?>
                <?php if($written_by) : ?>    
                <div class='article-credit'><span class='article-credit-label'><?php echo $written_by_label; ?></span> <?php echo $written_by;?></div>
                <?php endif; ?>
                <?php if($photography) : ?>   
                <div class='article-credit'><span class='article-credit-label'><?php echo $photography_by_label; ?></span> <?php echo $photography;?></div>
                <?php endif;?>
                <?php if($illustration) : ?>   
                <div class='article-credit'><span class='article-credit-label'><?php echo $illustrated_label; ?></span> <?php echo $illustration;?></div>
                <?php endif;?>
                <?php if($originally_published) : ?>    
                <div class='article-credit'><span class='article-credit-label'><?php echo $originally_published_label; ?></span> <?php echo $originally_published_string;?></div>
                <?php endif;?>
                <?php if($read_more_on) : ?>    
                <div class='article-credit'><span class='article-credit-label'><?php echo $read_more_on_label; ?></span> <a href="<?php echo $read_more_on;?>" target="_blank"><?php echo parse_url($read_more_on)['host'];?></a></div>
                <?php endif;?>
            </div>
    <!--     </div>	 -->	