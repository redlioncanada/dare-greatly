

    <div class="row">
        <div class="title-section text-left columns large-5 small-only-text-left mobile-stuff-ex">
            <span><?php echo $experience_cadillac->title; ?></span>
        </div>
    </div>
    <div class="row full-width latest-header title-section-border">
    </div>
    <div class="row experience-cadillac home-row home-component">
        <div class="large-7 medium-10 small-9 large-uncentered small-centered columns">
            <a class="learn-more" href="<?php echo $experience_cadillac->permalink; ?>"> <img src="<?php echo $experience_cadillac->customImg?>"></a>
        </div>
        <div class="large-3 medium-10 small-9 columns small-centered large-uncentered right-col experience-copy">
            <div class="large-9 medium-10 small-10">
                <h3><a href="<?php echo $experience_cadillac->permalink; ?>"><?php  if (empty($experience_cadillac->customTitle)) {
                echo $experience_cadillac->article->post_title;
            }
            else {
                echo $experience_cadillac->customTitle;
            } ?></a></h3>
                <div class="small-grey"></div>
                <p>
                    <?php echo $experience_cadillac->customDesc; ?>
                </p>
                <div class='cta'><a class="learn-more" href="<?php echo $experience_cadillac->permalink; ?>"><?php echo $experience_cadillac->cta; ?></a></div>
            </div>
        </div>
    </div>
    
