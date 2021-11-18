(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
		});


		

		jQuery(".humburger").click(function(){
			jQuery(".mobile-menu").toggleClass("slide")
		});

		jQuery(".mobile-menu .mobile-logo i").click(function() {
			jQuery(".mobile-menu").removeClass("slide");
		});

		jQuery(".about-dropdown").hover(function(){
			jQuery(".mdropdown").toggleClass("dropdown-show")
		});

		$('.ziehharmonika').ziehharmonika({
			collapsible: true,
			prefix: ''
		});

		jQuery(".pf-accordion-item button").click(function(){
			jQuery(this).find("span").toggleClass("pf-roted");

		});




		// jQuery(".pf-accordion-item button").click(function() {

		// 	if (jQuery(".pf-accordion-item button span i").hasClass('fa-chevron-down')) {

		// 		jQuery(this).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');	

		// 	} else {

		// 		jQuery(this).find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');	
		// 	}
			
		// 	return false;
		// });

		

		$(".click-1").click(function(){
			$(".p1").slideToggle(200),
			$(".p2, .p3, .p4, .p5, .p6, .p7, .p8, .p9, .p10, .p11, .p12").hide();
			$(".click-1 img").toggleClass('roted1')
		});

		$(".click-2").click(function(){
			$(".p2").slideToggle(200);
			$(".p1, .p3, .p4, .p5, .p6, .p7, .p8, .p9, .p10, .p11, .p12").hide();
			$(".click-2 img").toggleClass('roted')
		});
		$(".click-3").click(function(){
			$(".p3").slideToggle(200);
			$(".p1, .p2, .p4, .p5, .p6, .p7, .p8, .p9, .p10, .p11, .p12").hide();
			$(".click-3 img").toggleClass('roted')

		});
		$(".click-4").click(function(){
			$(".p4").slideToggle(200);
			$(".p1, .p2, .p3, .p5, .p6, .p7, .p8, .p9, .p10, .p11, .p12").hide();
			$(".click-4 img").toggleClass('roted')

		});
		$(".click-5").click(function(){
			$(".p5").slideToggle(200);
			$(".p1, .p2, .p4, .p3, .p6, .p7, .p8, .p9, .p10, .p11, .p12").hide();
			$(".click-5 img").toggleClass('roted')
		});
		$(".click-6").click(function(){
			$(".p6").slideToggle(200);
			$(".p1, .p2, .p4, .p5, .p3, .p7, .p8, .p9, .p10, .p11, .p12").hide();
			$(".click-6 img").toggleClass('roted')

		});


		

				
		
		
		
		
		
		
		
		
	});
})(jQuery);