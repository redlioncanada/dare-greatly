<?php 
$ugc_array = array();
if( have_rows('ugc') ):
// loop through the rows of data
    while ( have_rows('ugc') ) : the_row();
$ucg_vars = get_sub_field('ugc_typed_text');
$ugc_array[] = $ucg_vars;
endwhile;
else :
    // no rows found
    endif;
wp_localize_script( 'dg', 'ugc_vars', $ugc_array );

$ugcFirstHeader = get_field('ugc_first_header');
$ugcFirstCTA = get_field('ugc_first_cta');
$ugcSecondHeader = get_field('ugc_second_header');
$ugcSecondBodyCopy = get_field('ugc_second_body_copy');
$tandc = get_field('terms_and_conditions');
$addPhoto = get_field('ugc_add_photo');
$woPhoto = get_field('ugc_without_photo');
$thirdHeader = get_field('ugc_third_header');
$dareToDo = get_field('ugc_what_will_you_dare');
$ugcFourthHeader = get_field('ugc_fourth_header');
$ugcFourthBody = get_field('ugc_fourth_body_copy');
$ugc_third_submit = get_field('ugc_third_submit');
$ugc_Fourth_submit = get_field('ugc_fourth_submit');
$ugc_fifth_header = get_field('ugc_fifth_header');
$ugc_fifth_body= get_field('ugc_fifth_body');
$download_button = get_field('download_button');
$fbCaption = get_field('ugc_facebook_share_title');
$fbDesc = get_field('ugc_facebook_share_desc');

?>
<div class='full-width grayness'>
<div class="row " id="UGC-module">
    <div class="supportMessage large-10 small-centered large-uncentered small-only-text-center">
        <h1>Sorry! The browser your are using does not support this application.</h1>
    </div>
    <form enctype="multipart/form-data" id="UGC-FORM" method="post">
        <div class="row" id="first_step" >
            <!-- #first_step -->
            <div class="large-10 small-centered large-uncentered small-only-text-center ugc-step-one ugc-step ugc column">
                <div class="large-7 small-10 large-uncentered small-centered small-only-text-center column">
                    <h1><?php echo $ugcFirstHeader ?></h1>
                    <div class="form small-centered small-10 large-7 column large-uncentered">
                        <input type="text" name="daretofirst" id="daretofirst" placeholder="play with your food" maxlength="129"/>
                        <span class="counter">30</span>
                        <span class="errors"></span>
                    </div>
                </div>
                <div class="large-3 small-10 small-centered large-uncentered column small-only-text-center ">
                    <input class="submit button small-centered" type="button" name="submit_first" id="submit_first" value="<?php echo $ugcFirstCTA ?>" />
                </div>
            </div>
        </div>
        <!--/end #first_step -->
        <div class="row" id="second_step"  >
            <!-- #second_step -->
            <div class="large-10 small-centered ugc-step-two ugc">
                <div class="close text-right small-only-text-left"></div>
                <div class="mobile-hr"></div>
                <div class="row">
                    <div class="large-2 medium-2 column small-only-text-center">
                        <img class="show-for-medium-up" id="valid" src="<?php echo get_template_directory_uri(); ?>/img/oscars/ugc-pholder.jpg">
                        <span class="errors"></span>
                    </div>
                    <div class="large-7 medium-7 medium-offset-1 large-offset-1 column small-only-text-center">
                        <h3><?php echo $ugcSecondHeader ?></h3>
                        <p class="large-8"><?php echo $ugcSecondBodyCopy ?><br/>
                         <a href="/dont-you-dare/terms-and-conditions" class="t-and-c" target="_blank"><?php echo $tandc; ?> </a>

                     </p>
                     <!--      <img class="show-for-small-only" src="<?php echo get_template_directory_uri(); ?>/img/oscars/ugc-pholder-m.jpg"> -->
                     <div class="row">
                        <!-- <input class="submit button left" type="file" name="submit_second" id="submit_second" value="ADD PHOTO" /> -->
                        <label class="submit button add-photo large-3 medium-3 column">
                            <input type="file" name="submit_second" id="submit_second"/><i class="fa fa-camera"></i> <?php echo $addPhoto; ?>
                        </label>
                        <label class="submit button large-5 large-offset-1 end medium-5 medium-offset-1 column" type="button" name="sumbit_no_image" id="sumbit_no_image"><?php echo $woPhoto ?></label>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/end #second_step -->
    <div class="row" id="third_step">
        <!-- #third_step -->
        <div class="large-10 small-centered ugc-step-three ugc">
            <div class="close text-right small-only-text-left"></div>
            <div class="mobile-hr"></div>
            <div class="row">
                <div class="large-3 medium-3 column desktop-preview">
                    <div class="loader" id="ajax-load"><img src="<?php echo get_template_directory_uri(); ?>/img/ajax-loader.gif"></div>
                    <img src="<?php echo get_template_directory_uri(); ?>/img/oscars/ugc-pholder.jpg" id="preview">
                </div>
                <div class="large-6 medium-6 medium-offset-1 large-offset-1 column ugc-submission-form">
                    <h3><?php echo $thirdHeader?></h3>
                    <div class="row collapse">
                        <div class="large-8 column">
                            <input type="text" name="daring" id="daring" maxlength="129" />
                            <span class="counter">30</span>
                            <span class="errors"></span>
                        </div>
                        <div class="large-4 medium-5 column first-name">
                            <label>First name</label>
                            <input type="text" name="first" id="first" />
                            <span class="errors"></span>

                        </div>
                        <div class="large-4 medium-5 column last-name">
                            <label>Last name</label>
                            <input type="text" name="last" id="last" />
                            <span class="errors"></span>

                        </div>
                        <!--  <div class="large-4 column">
                            <label>Email</label>
                            <input type="text" name="email" id="email" />
                        </div> -->
                        <div class="large-8 column">
                            <label><?php echo  $dareToDo; ?></label>
                            <textarea name="daretodo" id="daretodo" ></textarea>
                            <span class="counter area">230</span>
                            <span class="errors"></span>
                        </div>
                        <div class="large-8">
                            <input class="submit button right" type="submit" name="submitToDb" id="submitToDb" value="<?php echo $ugc_third_submit ?>" />
                        </div>
                    </div>
                </div>
                <div class="large-2 column mobile-preview">
                   <div class='uil-spin-css loader' style='-webkit-transform:scale(0.07)'><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>
                   <img id="m-preview">
                   <span class="errors"></span>
               </div>
           </div>
       </div>
   </div>
   <!--/end #fourth_step -->
<div class="row" id="fourth_step">
    <div class="ugc-step-four ugc small-centered large-10">
        <div class="close text-right small-only-text-left"></div>
        <div class="mobile-hr"></div>
        <div class="row">
      <div class="large-3 medium-3 column  small-8 small-centered medium-uncentered image-depillarboxer">
        <img src="" id="finalPage">
        </div>
            <div class="large-6 medium-6 medium-offset-1 large-offset-1 small-only-text-center column">
                <h3><?php echo $ugcFourthHeader ?></h3>
                <p><?php echo $ugcFourthBody?></p>
                <span class="share-copy">SHARE IT WITH THE WORLD:   
                <a data-share-facebook="" title="Share on Facebook" href="" data-share-title="<?php echo $fbCaption?>" data-share-caption="<?php echo $fbCaption?>" data-share-url="" data-share-text="<?php echo $fbDesc ?>" data-share-image="" id="ugc-facebook"> <i class="fa fa-facebook"></i> </a>
                <a data-share-text="#DareGreatly" data-share-twitter="" class="btn btn-default" title="Share on Twitter" href="#" data-share-url="" id="ugc-twitter"> <i class="fa fa-twitter"></i> </a></span>
                     <label class="large-3 medium-3 submit button continue-btn text-center">
                       <?php echo $ugc_Fourth_submit;?>
                    </label>
            </div>
        </div>
        <!-- row -->
        <div class="row">
         <div class="share-copy text-center large-3" id="start-over">
                  <img src="<?php echo get_template_directory_uri(); ?>/img/oscars/startover.png">
                    <span>Start Over</span>
                </div>

            <!--    <div class="large-2 medium-2 column medium-offset-1 large-offset-1">
                    <label class="submit button continue-btn text-center">
                        Submit
                    </label>
                </div> -->

        </div>
    </div>
    <!-- #step_four -->
</div>
<!--/end #fourth_step -->
<!--/end #fifth_step -->
<div class="row" id="fifth_step">
    <!-- #fifth_step -->
    <div class="ugc-step-five ugc small-centered text-center large-10 medium-10">
        <div class="close text-right small-only-text-left"></div>
        <div class="mobile-hr"></div>
        <div class="large-8 medium-8 small-centered column text-center">
            <h3><?php echo $ugc_fifth_header ?></h3>
            <p><?php echo $ugc_fifth_body?></p>
            <a class="submit button large-4 column small-centered" id="download" href=""><?php echo $download_button; ?></a>
        </div>
    </div>
</div>
<!--/end #fifth_step -->
</form>
</div>
</div>