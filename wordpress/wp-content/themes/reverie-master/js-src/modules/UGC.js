var Cropper = require('cropperjs');
var Share = require('./Share');
var environment = require('./Environment')();
var TypeWriter = require('./TypeWriter');
var megapix = require('./megapix-image.js');
var EXIF = require('exif-js');
//var squelchResize = 0;
function setToFrame(n) {
    currentStep = n;
    respondToResizeEvent();
}

stepElements = [$('.ugc-step-one'), $('.ugc-step-two'), $('.ugc-step-three'), $('.ugc-step-four'), $('.ugc-step-five')];

module.exports = function(values) {
    var currentStep = 0;
    var checkIfSupported = function() {
        var xhr = new XMLHttpRequest();
        return !!(xhr && ('upload' in xhr) && ('onprogress' in xhr.upload));
    };
    if (!checkIfSupported()) {
        $('.supportMessage').css('display', 'block');
        $('#UGC-FORM').hide();
    }

    $('#daretofirst').on('focus', function(e) {
        $(window).keydown(function(e) {
            var code = (e.keyCode ? e.keyCode : e.which);
            if (code == 9) {
                e.preventDefault();
                e.stopPropagation();
            }
        });
    });

    var shareing = new Share({
        facebookAppID: 936512866398205,
        facebookShareViaAPI: true
    });
    var uploadedFile = $('#submit_second'),
        imgPreview = $('#preview'),
        image = document.getElementById('preview'),
        submission = {},
        images = {},
        cropper,
        url = (environment.env !== environment.prod) ? '' : '';
/*        if(environment.env === environment.local){
            url = 'http://0.0.0.0:4000/';
        }*/
    placeholderText = ['Copy one', 'Copy two', 'Copy Three'];
    var charCount = function(elem, char) {
        var max_characters = char;
        var total_used = elem.val().length;
        var remaining = max_characters - total_used;
        elem.next(".counter").text(remaining);
        if (remaining < 0) {
            elem.addClass('error');
            return 1;
        } else {
            elem.removeClass('error');
            return 0;
        }
    };
    var charCountAndError = function(elem, char) {
        var errorState = charCount(elem, char);
        if (errorState) {
            pushErrors($('#daretofirst'), 'Your Dare is too long.');
        } else {
            removeErrors($('#daretofirst'));
        }

    };
    var imgOrNoImage = function() {
        var step3 = $('#third_step');
        if (step3.hasClass('image')) {
            return 'with photo';
        } else if (step3.hasClass('no-image')) {
            return 'without photo';
        }
    };
    var hideAllPanels = function() {
        var thirdStep = $('#third_step');
        var lastStep = currentStep;
        currentStep = 0;
        respondToResizeEvent();
        TweenLite.to('#second_step', 0.7, {
            css: {
                right: -1500
            }
        });
        TweenLite.to('#third_step', 0.7, {
            css: {
                right: -1500
            }
        });
        TweenLite.to('#fourth_step', 0.7, {
            css: {
                right: -1500
            }
        });
        TweenLite.to('#fifth_step', 0.7, {
            css: {
                right: -1500
            }
        });
        if (typeof cropper !== "undefined") {
            cropper.destroy();
        }

        emptyAllFields(lastStep > 2);

        if (thirdStep.hasClass('image')) {
            thirdStep.removeClass('image');
        } else if (thirdStep.hasClass('no-image')) {
            thirdStep.removeClass('no-image');
        }

        removeErrors($('#daring'));
        removeErrors($('#first'));
        removeErrors($('#last'));
        removeErrors($('#daretodo'));
        removeErrors($('#valid'));


    };
    var emptyAllFields = function(emptyFirst) {
        var dare_line = $('#daring'),
            do_line = $('#daretodo'),
            first_name_line = $('#first'),
            last_name_line = $('#last'),
            dare_first = $('#daretofirst');
        var elems = [dare_line, do_line, first_name_line, last_name_line];
        if (emptyFirst) {
            elems.push(dare_first);
        }
        $.each(elems, function(i, elem) {
            elem.val('');
        });
        if (typeof ugc_vars !== 'undefined') {
            $('#daretofirst').tw_input_placeholder({
                speed: 100,
                delay: 2000,
                keywords: ugc_vars,
            });
        }

        imgPreview.attr('src', 'wp-content/themes/reverie-master/img/oscars/ugc-pholder.jpg');


    };
    var readURL = function(input) {
        if (input.files && input.files[0]) {

            var reader = new FileReader();
            reader.onload = function(e) {
                //   imgPreview.attr('src', e.target.result);
                TweenLite.to('#third_step', 0.7, {
                    css: {
                        right: 0
                    }
                });
                currentStep = 2;
                respondToResizeEvent();
                var mpImg = new megapix(submission.image);
                EXIF.getData(submission.image, function() {
                    console.log("orientation",EXIF.getTag(this,'Orientation'));
                    mpImg.render(image, { maxWidth: 2000, doSquash:true, maxHeight: 2000, quality: 0.5,orientation:EXIF.getTag(this,'Orientation') },letsCrop);
                });
                
                
            };
            reader.readAsDataURL(input.files[0]);
        }
    };
    var pushToObject = function(obj, key, val) {
        obj.key = val;
    };
    var letsCrop = function() {
        submission.image = dataURItoBlob(imgPreview.attr('src'));
        cropper = new Cropper(image, {
            aspectRatio: 1 / 1,
            zoomable: false,
            zoomOnTouch: false,
            zoomOnWheel: false,
            checkOrientation: true,
            minCropBoxWidth: 75,
            crop: function(data) {
                submission.crop_x = data.x;
                submission.crop_y = data.y;
                submission.crop_width = data.width;
                submission.crop_height = data.height;
            }
        });
    };
    var getTheInputs = function() {
        var dare_line = $('#daring'),
            do_line = $('#daretodo'),
            first_name_line = $('#first'),
            last_name_line = $('#last');


        submission.dare_line = dare_line.val();
        submission.do_line = do_line.val();
        submission.first_name_line = first_name_line.val();
        submission.last_name_line = last_name_line.val();

    };

    function dataURItoBlob(dataURI) {
        // convert base64/URLEncoded data component to raw binary data held in a string
        var byteString;
        if (dataURI.split(',')[0].indexOf('base64') >= 0)
            byteString = atob(dataURI.split(',')[1]);
        else
            byteString = unescape(dataURI.split(',')[1]);

        // separate out the mime component
        var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ia], {type:mimeString});
    }
    var processIt = function(data) {
        if (typeof cropper !== "undefined") {
            cropper.destroy();
        }
        var path = url + data.value.web_marked_image_url;
        var height = $('.ugc-step-four').height();
        console.log(height);
        currentStep = 3;

        //imgPreview.attr('src', path);
        $('#finalPage').attr('src', path);
        $('#ugc-facebook').attr({
            'data-share-image': path,
            'data-share-url': window.location
        });
        $('#ugc-twitter').attr({
            'data-share-image': path,
            'data-share-url': window.location
        });
        $('#download').attr('href', path + encodeURI('?&download=1'));
        if (window.mobileAndTabletCheck()) {
            height = height + $('#m-preview').height();
        }
        TweenLite.to('#fourth_step', 0.7, {
            css: {
                right: 0
            },
            onUpdate: wrapRespondToResize.bind(this),


        });
        respondToResizeEvent();
    };

    function wrapRespondToResize() {
        //   if(squelchResize++ < 20){
        respondToResizeEvent();
        //  }

    }
    var checkIfEmpty = function(str) {
        if (str.length <= 0) {
            return true;
        }
    };
    var pushErrors = function(elem, errorMsg) {
        var error = elem.siblings('.errors');
        error.text(errorMsg);
    };
    var removeErrors = function(elem) {
        var error = elem.siblings('.errors');
        error.text('');
    };
    var areWeMobile = function() {
        if (window.mobileAndTabletCheck() && !window.isMediumUp()) {
            imgPreview = $('#m-preview');
            image = document.getElementById('m-preview');
            $('.mobile-preview').show();
            $('.desktop-preview').hide();
        } else {
            $('.mobile-preview').hide();
            $('.desktop-preview').show();
        }
    };
    var setUGCHeight = function(elem) {
        var ugc = $('#UGC-FORM');
        console.log(elem.outerHeight());
        ugc.height(elem.outerHeight());

    };
    var respondToResizeEvent = function() {
        if (typeof cropper !== "undefined") {
            cropper.reset();
        }
        setUGCHeight(stepElements[currentStep]);
    };
    var goToDownload = function() {

        currentStep = 4;
        respondToResizeEvent();
        TweenLite.to('#fifth_step', 0.7, {
            css: {
                right: 0
            }
        });


    };
    var validate = function() {
        var dare_line = $('#daring'),
            do_line = $('#daretodo'),
            first_name_line = $('#first'),
            last_name_line = $('#last');

        removeErrors($('#daring'));
        removeErrors($('#first'));
        removeErrors($('#last'));
        removeErrors($('#daretodo'));


        var pass = true;
        if (dare_line.val().length > 30) {
            pushErrors(dare_line, 'Your Dare is too long.');
            pass = false;
        }
        if (first_name_line.val().length > 30) {
            pushErrors(first_name_line, 'This cannot be longer than 30 characters.');
            pass = false;
        }
        if (last_name_line.val().length > 30) {
            pushErrors(last_name_line, 'This cannot be longer than 30 characters.');
            pass = false;
        }
        if (do_line.val().length > 230) {
            pushErrors(do_line, 'Your Text is too long.');
            pass = false;
        }
        if (dare_line.val().length <= 0) {
            pushErrors(dare_line, 'Cannot be empty.');
            pass = false;
        }
        if (first_name_line.val().length <= 0) {
            pushErrors(first_name_line, 'Cannot be empty.');
            pass = false;
        }
        if (last_name_line.val().length <= 0) {
            pushErrors(last_name_line, 'Cannot be empty.');
            pass = false;
        }
        if (do_line.val().length <= 0) {
            pushErrors(do_line, 'Cannot be empty.');
            pass = false;
        }
        return pass;

    };
    var checkIEEmpty = function(el) {
         if(el.indexOf('|') > -1) {
            return true;
         }
    };
    $('#submit_first').click(function() {
        var dareTo = $('#daretofirst').val();
        if (checkIfEmpty(dareTo) || checkIEEmpty(dareTo)) {
            trackClickInteraction('oscars landing', 'oscars landing:share your story:step 1:submit:error');
            pushErrors($('#daretofirst'), 'Cannot be empty');
        } else if (dareTo.length > 30) {
            trackClickInteraction('oscars landing', 'oscars landing:share your story:step 1:submit:error');
            pushErrors($('#daretofirst'), 'Your Dare is too long.');
            return false;
        } else {
            trackClickInteraction('oscars landing', 'oscars landing:share your story:step 1:submit:success');
            $('#daring').val(dareTo);
            charCount($('#daring'), 30);

            TweenLite.to('#second_step', 0.7, {
                css: {
                    right: 0
                }
            });


            /// GOING TO 2

            currentStep = 1;
            respondToResizeEvent();
        }
    });
    $('#sumbit_no_image').click(function() {
        $('#third_step').addClass('no-image');
        trackClickInteraction('oscars landing', 'oscars landing:share your story:step 2:button:continue without photo');
        TweenLite.to('#third_step', 0.7, {
            css: {
                right: 0
            }
        });

        /// GOING TO 3

        currentStep = 2;
        respondToResizeEvent();
        submission.crop_x = '';
        submission.crop_y = '';
        submission.crop_width = '';
        submission.crop_height = '';
        submission.image = '';
        /*imgPreview.attr('src', 'wp-content/themes/reverie-master/img/oscars/dont-you-dare-blank.png');*/
    });
    $("#daretofirst").bind("input propertychange keyup", function() {
        charCountAndError($(this), 30);
    });
    $("#daring").bind("input propertychange keyup", function() {
        charCount($(this), 30);
    });
    $("#daretodo").bind("input propertychange keyup", function() {
        charCount($(this), 230);
    });




    $('#start-over').click(function() {
        emptyAllFields();
        var thirdStep = $('#third_step');
        charCount($("#daring"), 30);
        charCount($("#daretodo"), 230);


        currentStep = 2;
        respondToResizeEvent();
        if (thirdStep.hasClass('image')) {
            thirdStep.removeClass('image');
        } else if (thirdStep.hasClass('no-image')) {
            thirdStep.removeClass('no-image');
        }

        removeErrors($('#daring'));
        removeErrors($('#first'));
        removeErrors($('#last'));
        removeErrors($('#daretodo'));
        removeErrors($('#valid'));


        TweenLite.to('#third_step', 0.7, {
            css: {
                right: -1500
            }
        });
        TweenLite.to('#fourth_step', 0.7, {
            css: {
                right: -1500
            }
        });

    });

    function hasExtension(inputID, exts) {
        var fileName = inputID.val();
        return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(fileName);
    }
    //On Upload of a File, Display it
    uploadedFile.change(function(event) {
        $('#third_step').addClass('image');
        trackClickInteraction('oscars landing', 'oscars landing:share your story:step 2:button:add photo');

        if (!hasExtension(uploadedFile, ['.jpg', '.jpeg', '.png'])) {
            pushErrors($('#valid'), 'Please upload a jpg or png image.');
            this.value = '';
        } else {
            removeErrors($('#valid'));
            var file = this.files[0];
            submission.image = file;
            readURL(this);
        }
    });
    areWeMobile();
    $("form#UGC-FORM").submit(function(event) {
        // currentStep = 4;
        // respondToResizeEvent();
        trackClickInteraction('oscars landing', 'oscars landing:share your story:step 3:' + imgOrNoImage() + ':button:submit');
        //disable enter
        $(window).keydown(function(event) {
            if (event.keyCode == 13) {
                event.preventDefault();
                return false;
            }
        });
        //disable the default form submission
        event.preventDefault();
        //get inputs
        getTheInputs();
        //validate unputs
        if (!validate()) {
            respondToResizeEvent();
            return false;
        }

        //grab all form data and copy our submission obj into it
        var fd = new FormData();
        for (var key in submission) {
            fd.append(key, submission[key]);
        }

        $.ajax({
            url: url + 'submissions',
            type: 'POST',
            data: fd,
            async: true,
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function() {
                //alert('before ajax sendin');
                $('.loader').addClass('show');
                $('.cropper-container').css('opacity', 0);
            },
            success: function(data) {
                $('.loader').removeClass('show');
                $('.cropper-container').css('opacity', 1);
                processIt(data);

            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('ERRORS: ' + textStatus + jqXHR + errorThrown);
            }
        });

        return false;
    });
    $('.continue-btn').on('click', goToDownload);
    //Tracking 
    $('#second_step .close').on('click', function() {
        trackClickInteraction('oscars landing', 'oscars landing:share your story:step 2:close');
    });
    $('#UGC-FORM').on('click', '.t-and-c', function() {
        trackClickInteraction('oscars landing', 'oscars landing:share your story:step 2:link:' + $(this).text());
    });
    $('#fourth_step .close').on('click', function() {
        trackClickInteraction('oscars landing', 'oscars landing:share your story:step 4:close');
    });
    $('#daring').on('click', function() {
        trackClickInteraction('oscars landing', 'oscars landing:share your story:step 3:' + imgOrNoImage() + ':text:don\'t you dare');
    });
    $('#first').on('click', function() {
        trackClickInteraction('oscars landing', 'oscars landing:share your story:step 3:' + imgOrNoImage() + ':text:first name');
    });
    $('#last').on('click', function() {
        trackClickInteraction('oscars landing', 'oscars landing:share your story:step 3:' + imgOrNoImage() + 'text:last name');
    });
    $('#daretodo').on('click', function() {
        trackClickInteraction('oscars landing', 'oscars landing:share your story:step 3:' + imgOrNoImage() + ':text:what will you dare to do');
    });
    $('#ugc-facebook').on('click', function() {
        trackClickInteraction('oscars landing', 'oscars landing:share your story:step 4:' + imgOrNoImage() + ':social:share:button:facebook');
    });
    $('#ugc-twitter').on('click', function() {
        trackClickInteraction('oscars landing', 'oscars landing:share your story:step 4:' + imgOrNoImage() + ':social:share:button:twitter');
    });
    $('#download').on('click', function() {
        trackClickInteraction('oscars landing', 'oscars landing:share your story:complete:' + imgOrNoImage() + ':button:download');
    });
    $('#fourth_step .continue-btn').on('click', function() {
        trackClickInteraction('oscars landing', 'oscars landing:share your story:step 4:' + imgOrNoImage() + ':link:continue');
    });
    $('#fifth_step .close').on('click', function() {
        trackClickInteraction('oscars landing', 'oscars landing:share your story:complete:close');
    });

    //On close show the first
    $('.close').click(hideAllPanels);

    return {
        respondToResizeEvent: respondToResizeEvent
    };
};
