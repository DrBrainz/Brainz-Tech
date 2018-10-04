
/*
<!-- 
*Author: Edwin Asare (Dr.Brainz)
*Author URL: http://www.braintech.cf
*Author Email: brainztech08@gmail.com
*Author Email: info@brainztech.cf.com
*Copyright(c) 2018 Brainz Tech Inc.


**Note: Show some love for our hardwork by remaining the footer credit which link back to our website.
  Or you can use your own means to link back to website.
  Thanks.

**This file is a copy of Brainz Tech Inc.**

We use this js file to control the preloader in the html page
 *You can add your own css style here
  

--> 
*/



(function($) {
	"use strict"
	
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(500).fadeOut();
	});

	// Mobile Toggle Btn
	$('.navbar-toggle').on('click',function(){
		$('#header').toggleClass('nav-collapse')
	});
	
})(jQuery);

