
    <div class="row">
        <div class="title-section text-left columns large-5 small-only-text-center">
            <span><?php echo $experience_design->title; ?></span>
        </div>
    </div>
    <div class="row full-width latest-header title-section-border">
    </div>
    <div class="row experience-design home-row home-component">
        <div class="large-7 medium-10 small-9 large-uncentered small-centered columns">
            <a class="learn-more" href="<?php echo $experience_design->permalink; ?>"> <img src="<?php echo $experience_design->customImg?>"></a>
        </div>
        <div class="large-3 medium-10 small-9 columns small-centered large-uncentered right-col experience-copy">
            <div class="large-9 medium-10 small-10">
                <h3><a href="<?php echo $experience_design->permalink; ?>"><?php  if (empty($experience_design->customTitle)) {
                echo $experience_design->article->post_title;
            }
            else {
                echo $experience_design->customTitle;
            } ?></a></h3>
                <div class="small-grey"></div>
                <p>
                    <?php echo $experience_design->customDesc; ?>
                </p>
                <div class='cta'><a class="learn-more" href="<?php echo $experience_design->permalink; ?>"><?php echo $experience_design->cta; ?></a></div>
            </div>
        </div>
    </div>
   