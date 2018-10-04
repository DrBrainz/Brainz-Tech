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

**This file is a copy of Brainz Tech Inc.
We use this js file to add some css on the html page when the web page is been scrolled
 *You can add your own css style here
  

--> 
*/


$(document).ready(function () {
	// body...
	$(window).scroll(function () {
		// body...CSS change on class-lead when you scroll your mouse down
		var scroll = $(window).scrollTop();
		if (scroll > 30) {
			$('.lead').css("color", "#fff");
		} else {
			$('.lead').css("color", "#000");
		}
		if (scroll > 30) {
			$('.lead').css("font-size", "1.5rem");
		} else {
			$('.lead').css("font-size", "1rem");
		}
		if (scroll > 30) {
			$('.lead').css("font-weight", "500");
		} else {
			$('.lead').css("font-weight", "400");
		}
		// css chnage on h1
		if (scroll > 60) {
			$('.header-h1').css("color", "#fff");
		} else {
			$('.header-h1').css("color", "#000");
		}

		//css change on navbar
		
		if (scroll > 50) {
			$('.navbar').css("background", "#3333335e");
		} else {
			$('.navbar').css("background", "#fff");
		}
		if (scroll > 50) {
			$('.navbar').css("color", "#fff");
		} else {
			$('.navbar').css("color", "#fff");
		}
		

	});
});

