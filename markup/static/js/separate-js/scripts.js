//'use strict';

$(function() {

    /*
    |--------------------------------------------------------------------------
    | Sticky Kit
    |--------------------------------------------------------------------------
    */

    $(window).scroll(function(){
        /*if ( $(this).scrollTop() > $('.footer').outerHeight() - 100) {
            $('.socialbar').addClass('is-active')
        } else {
            $('.socialbar').removeClass('is-active')
        }*/

        if ( $(this).scrollTop() > $( document ).height() - $('.footer').outerHeight() - $(window).outerHeight()) {
            $('.socialbar').removeClass('is-active')
        } else {
            $('.socialbar').addClass('is-active')
        }

    });



    /*
    |--------------------------------------------------------------------------
    | Selectpicker
    |--------------------------------------------------------------------------
    */

    $('.jsSelectPicker').selectize();

    /*
    |--------------------------------------------------------------------------
    | Mobile menu
    |--------------------------------------------------------------------------
    */

    $('.modal').on('shown.bs.modal', function (e) {

    });

    $('.modal').on('hide.bs.modal', function (e) {

    });

    /*
    |--------------------------------------------------------------------------
    | Smooth Scroll
    |--------------------------------------------------------------------------
    */

    $('.page-scroll').on('click', function(event) {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            let target = $(this.hash),
                speed = $(this).data("speed") || 800;
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 0
                }, speed);
            }
        }
    });

    /*
    |--------------------------------------------------------------------------
    | Project Slider
    |--------------------------------------------------------------------------
    */

    let projectSlider = new Swiper('.js-project-slider', {
        speed: 500,
        loop: true,
        spaceBetween: 0,
        navigation: {
            nextEl: '.js-project-next',
            prevEl: '.js-project-prev',
        },
        center: true,
        slidesPerView: 3,
        pagination: {
            el: '.js-project-pagination',
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        }
    });

    /*
    |--------------------------------------------------------------------------
    | Team Slider
    |--------------------------------------------------------------------------
    */

    let teamSlider = new Swiper('.js-team-slider', {
        speed: 500,
        mousewheel: true,
        loop: true,
        slidesPerView: 5,
        spaceBetween: 10,
        freeMode: true,
        pagination: {
            el: '.js-team-slider-pagination',
        },
        breakpoints: {
            1640: {
                slidesPerView: 4,
            },
            1380: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 1,
            },
            320: {
                slidesPerView: 1,
            }
        }
    });

    /*
    |--------------------------------------------------------------------------
    | Light Gallery
    |--------------------------------------------------------------------------
    */

	$('.lg').lightGallery({
		selector: ".lg__item",
	});

    /*
    |--------------------------------------------------------------------------
    | Responsive Iframe Inside Modal
    |--------------------------------------------------------------------------
    */

    function toggle_video_modal() {

        // Click on video thumbnail or link
        $(".js-video-modal").on("click", function(e){

            // prevent default behavior for a-tags, button tags, etc.
            e.preventDefault();

            // Grab the video ID from the element clicked
            var id = $(this).attr('data-youtube-id');

            // Autoplay when the modal appears
            // Note: this is intetnionally disabled on most mobile devices
            // If critical on mobile, then some alternate method is needed
            var autoplay = '?autoplay=1';

            // Don't show the 'Related Videos' view when the video ends
            var related_no = '&rel=0';

            // String the ID and param variables together
            var src = '//www.youtube.com/embed/'+id+autoplay+related_no;

            // Pass the YouTube video ID into the iframe template...
            // Set the source on the iframe to match the video ID
            $(".video-modal__iframe").attr('src', src);

            // Add class to the body to visually reveal the modal
            $("body").addClass("video-modal-show");

            $('body').css({"overflow": "hidden"});

        });

        // Close and Reset the Video Modal
        function close_video_modal() {

            event.preventDefault();

            // re-hide the video modal
            $("body").removeClass("video-modal-show");

            $('body').css({"overflow": ""});

            // reset the source attribute for the iframe template, kills the video
            $(".video-modal__iframe").attr('src', '');

        }
        // if the 'close' button/element, or the overlay are clicked
        $('body').on('click', '.video-modal__close, .video-modal__overlay', function(event) {

            // call the close and reset function
            close_video_modal();

        });
        // if the ESC key is tapped
        $('body').keyup(function(e) {
            // ESC key maps to keycode `27`
            if (e.keyCode == 27) {

                // call the close and reset function
                close_video_modal();

            }
        });
    }

    toggle_video_modal();

    /*
    |--------------------------------------------------------------------------
    | Polyfill object-fit/object-position on <img>: IE9, IE10, IE11, Edge, Safari, ...
    | https://github.com/bfred-it/object-fit-images
    |--------------------------------------------------------------------------
    */

    objectFitImages();
    // if you use jQuery, the code is: $(function () { objectFitImages() });

});
