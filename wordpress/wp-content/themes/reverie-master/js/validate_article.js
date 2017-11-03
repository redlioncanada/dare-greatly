jQuery(function($) {
    $('#publish').click(function(e) {
        console.log("SHOULD VALIDATE");

        // check for parent category
        var errors = [];
        errors = checkTaxonomy(errors);
        errors = checkYoastFacebookImage(errors);
        errors = checkTwitterLimit(errors);
        //errors = checkYoastFocusKeyword(errors);

        if (errors.length === 0) {
            //console.log("should be successful HERE");
            
            return true;
        } else {
            var message = errors.reduce(function(errorString, error) {
                return errorString + "\n" + error;
            });
            if (message) {
                alert(message);
                e.stopImmediatePropagation();
                return false;
            } else {
                alert("should be successful");

                return true;
            }
        }


    });
    var publish_click_events = $('#publish').data('events').click;
    if (publish_click_events) {
        if (publish_click_events.length > 1) {
            publish_click_events.unshift(publish_click_events.pop());
        }
    }
    if ($('#save-post').data('events') != null) {
        var save_click_events = $('#save-post').data('events').click;
        if (save_click_events) {
            if (save_click_events.length > 1) {
                save_click_events.unshift(save_click_events.pop());
            }
        }
    }

    function checkTaxonomy(errors) {
        var checkedBoxes = 0;
        
        $('#group_a_tags-all input:checked').each(function() {

            checkedBoxes++;
        });
        if (checkedBoxes === 0) {
            errors.push('Please select at least one Group A Tag before publishing this post.')
                //alert('Please select at least one parent category before publishing this post.', 'require-post-category');                   
            } else if (checkedBoxes > 1){
                errors.push('Only one Group A Tag is allowed. You have checked ' + checkedBoxes + '.')
            } else {
                return errors;
            }
            return errors;

        }



        function checkYoastFacebookImage(errors) {
            if (!$('#yoast_wpseo_opengraph-image').val()) {

                errors.push("Please fill out the Yoast Facebook Image. It's in the Yoast section under the share icon, Facebook tab.");
            }

            return errors;
        }
    // function checkYoastFocusKeyword(errors) {
    //     if (!$('#yoast_wpseo_focuskw_text_input').val()) {

    //         errors.push("Please choose a Yoast focus keyword.");
    //     }

    //     return errors;
    // }

    function checkTwitterLimit(errors) {
        var twitterField = $('#yoast_wpseo_twitter-description'),
        twitterLength = twitterField.val().length;
        if(twitterLength > 160) {
            errors.push("Your Twitter Description is currently " +twitterLength+ " characters long. Please shorten it to under 140.");
        }

        return errors;
    }

    

    var PromptToSave = (function() {

        var enteredText = false;

        var saveState = function() {
            enteredText = true;
            return enteredText;
        };
        // var alertMessage = function() {
        //      return 'Dialog text here.';
        // };
        var checkState = function() {
            if (enteredText === true) {
                  return 'You have entered text without saving.';
            }
        };
        var clearState = function() {
            enteredText = false;
            //return enteredText;
        };
        return {
            saveState: saveState,
            checkState : checkState,
            clearState: clearState
        }

    })();

    // //$(document).ready(PromptToSave.saveState(false));
    $(document).on('keypress', PromptToSave.saveState);
     window.onbeforeunload = PromptToSave.checkState;
    $(document).on('submit', PromptToSave.clearState);


});
