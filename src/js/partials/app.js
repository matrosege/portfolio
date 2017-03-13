$(document).ready(function() {

	$("#portfolio_grid").mixItUp();

	$(".sec-portfolio li").click(function(){
		$(".sec-portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(".popup").magnificPopup({type:"image"});
	$(".popup-content").magnificPopup({type:"inline", midClick: true});

	$(".top-text h1").animated("fadeInDown", "fadeOutUp");
	$(".top-text p, .sec-head").animated("fadeInUp", "fadeOutDown");

	$(".animate-1").animated("flipInY", "flipOutY");
	$(".animate-2").animated("fadeInLeft", "fadeOutLeft");
	$(".animate-3").animated("fadeInRight", "fadeOutRight");

	$(".left .resume-item").animated("fadeInLeft", "fadeOutLeft");
	$(".right .resume-item").animated("fadeInRight", "fadeOutRight");

	function heightDetect() { //resize header
		$(".main-head").css("height", $(window).height());
	};
		heightDetect();
		$(window).resize(function() {
		heightDetect();
	});

	$(".toggle-menu").click(function() { //menu header
	  $(".sandwich").toggleClass("active");
	});

	$(".top-menu ul a").click(function() { //menu header
		$(".top-menu").fadeOut(600);	
		$(".sandwich").toggleClass("active");
		$(".top-text").removeClass("h-opacity");
	});

	$(".toggle-menu").click(function() { //top menu visible or not
		if ($(".top-menu").is(":visible")) {
			$(".top-text").removeClass("h-opacity");
			$(".top-menu").fadeOut(600);
			$(".top-menu li a").removeClass("fadeInUp animated");
		} else {
			$(".top-text").addClass("h-opacity");
			$(".top-menu").fadeIn(600);
			$(".top-menu li a").addClass("fadeInUp animated");
	};
	});

	$(".portfolio-item").each(function(i){
		$(this).find(".port-item-content a").attr("href", "#work-" + i);
		$(this).find(".port-description").attr("id", "work-" + i);
	});

	$("input,select,textarea").jqBootstrapValidation();

	$('.top-menu ul a').scrollToID({
  		speed: 1000, 
  		offset: 30  
	});

	$('.parallax-window').parallax({imageSrc: 'img/bg.jpg'});

	$(".loader_inner").fadeOut(); //preloader
	$(".loader").delay(400).fadeOut("slow");

	
});
