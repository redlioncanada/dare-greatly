        <div class='row '>
        <div class='home-email-form  columns small-centered small-9 medium-10'>
        <?php 

        $email_title = get_field('email_submission_title_home');
        $email_subtitle = get_field('email_submission_subtitle_home');
        $email_placeholder = get_field('email_submission_placeholder_home');
        $email_button = get_field('email_submission_button_home');
        $email_link = get_field('email_link');

        ?>
        <h3 ><?php echo $email_title; ?></h3>
         <form action="<?php echo $email_link?>" target="_blank">
         
               
                <button class="button"  alt="<?php echo $email_button; ?>" tabindex="2"><span><?php echo $email_button; ?></span></button>
<!--                 <div class='emailinput'><input  tabindex="1" type="text" class='' placeholder="<?php echo $email_placeholder; ?>" /></div>
 -->               

        </form>
        <p><?php echo $email_subtitle; ?></p>
       
        </div>
        </div>