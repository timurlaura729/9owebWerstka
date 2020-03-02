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
    | Responsive iframe inside bootstrap modal
    |--------------------------------------------------------------------------
    */

    (function($) {

        $.fn.bmdIframe = function( options ) {
            var self = this;
            var settings = $.extend({
                classBtn: '.bmd-modalButton',
                defaultW: 640,
                defaultH: 360
            }, options );

            $(settings.classBtn).on('click', function(e) {
                var allowFullscreen = $(this).attr('data-bmdVideoFullscreen') || false;

                var dataVideo = {
                    'src': $(this).attr('data-bmdSrc'),
                    'height': $(this).attr('data-bmdHeight') || settings.defaultH,
                    'width': $(this).attr('data-bmdWidth') || settings.defaultW
                };

                if ( allowFullscreen ) dataVideo.allowfullscreen = "";

                // stampiamo i nostri dati nell'iframe
                $(self).find("iframe").attr(dataVideo);
            });

            // se si chiude la modale resettiamo i dati dell'iframe per impedire ad un video di continuare a riprodursi anche quando la modale è chiusa
            this.on('hidden.bs.modal', function(){
                $(this).find('iframe').html("").attr("src", "");
            });

            return this;
        };

    })(jQuery);

    jQuery(document).ready(function(){
        jQuery("#iframe-modal").bmdIframe();
    });



    /*
    |--------------------------------------------------------------------------
    | Polyfill object-fit/object-position on <img>: IE9, IE10, IE11, Edge, Safari, ...
    | https://github.com/bfred-it/object-fit-images
    |--------------------------------------------------------------------------
    */

    objectFitImages();
    // if you use jQuery, the code is: $(function () { objectFitImages() });

});
