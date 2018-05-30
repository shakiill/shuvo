/*
	Factorial Theme Scripts
*/

(function($){ "use strict";
             
    $(window).on('load', function() {
        $('body').addClass('loaded');
    });

/*=========================================================================
        Sticky Header
=========================================================================*/ 
        
    $(window).on('scroll', function() {

        if ($(window).scrollTop() > 50 ) {

            $('#header').addClass('navbar-fixed-top');

        } else {
            $('#header').removeClass('navbar-fixed-top');
        }
        
        //Scroll To Top
        if ($('body').scrollTop() >= 50) {
            
			// If page is scrolled more than 50px
			$('#scroll-to-top').fadeIn(200);    // Fade in the arrow
            
		} else {
            
			$('#scroll-to-top').fadeOut(200);   // Else fade out the arrow
            
		}
    });

/*=========================================================================
    Main Slider
=========================================================================*/
    var owlSlider = $('#main-slider');
    owlSlider.owlCarousel({
        items: 1,
        loop: true,
        smartSpeed: 500,
        autoplayTimeout: 3500,
        mouseDrag: false,
        touchDrag: false,
        autoplay: true,
        nav: true,
        navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>']
    });
    // Slider animation
    owlSlider.on('translate.owl.carousel', function () {
        $('.slider_content h1').removeClass('bounceInLeft animated').hide();
        $('.slider_content p, .slider_content .btn_group').removeClass('fadeInUp animated').hide();
    });

    owlSlider.on('translated.owl.carousel', function () {
        $('.owl-item.active .slider_content h1').addClass('bounceInLeft animated').show();
        $('.owl-item.active .slider_content p, .owl-item.active .slider_content .btn_group').addClass('fadeInUp animated').show();
    });
			 
/*=========================================================================
        Sponsor Carousel
=========================================================================*/
	$('#sponsor_carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        smartSpeed: 1000,
        nav: false,
        dots: false,
        responsive: true,
        responsive : {
		    0 : {
		        items: 3
		    },
		    480 : {
		        items: 3,
		    },
		    768 : {
		        items: 6,
		    }
		}
    });

/*=========================================================================
	Initialize smoothscroll plugin
=========================================================================*/
	smoothScroll.init({
		offset: 80
	});

/*=========================================================================
	Active venobox
=========================================================================*/
	var vbSelector = $('.img_popup');
	vbSelector.venobox({
		numeratio: true,
		infinigall: true
	}); 
             
/*=========================================================================
        Google Map Settings
=========================================================================*/
             
google.maps.event.addDomListener(window, 'load', init);

function init() {

	var mapOptions = {
		zoom: 11,
		center: new google.maps.LatLng(40.6700, -73.9400), 
		scrollwheel: false,
		navigationControl: false,
		mapTypeControl: false,
		scaleControl: false,
		draggable: false,
		styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#444444"},{"visibility":"on"}]}]
	};

	var mapElement = document.getElementById('google_map');

	var map = new google.maps.Map(mapElement, mapOptions);

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(40.6700, -73.9400),
		map: map,
		title: 'Location!'
	});
}

})(jQuery);
