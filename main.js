$(document).ready(function(){

	var menuFixed = function(){
		var element = $('.menu-fixed').offset().top;

		$(window).scroll(function(){
			var scroll = $(this).scrollTop();
			if(scroll > element) {
				$('.menu-fixed').addClass('fijo');
				// console.log(scroll, element);
			}else {
				$('.menu-fixed').removeClass('fijo');
				// console.log(scroll, element);
			}
		});
	};

	menuFixed();



	// 	function scrollToAnchor(id) {
	// 	var aTag = $("a[name='" + id + "']"),
	// 	    target = aTag.offset().top - 55;
	// 	// $('html,body').animate({scrollTop: target},1000);
	// 	$('html,body').animate({scrollTop: target},1000);
	// }

	// $("#link").click(function() {
 //   		scrollToAnchor('id1');
	// });


	/*
	=====	SECOND METHOD	=====
	*/ 

	function scrollToAnchor() {
		var aTag = $("#id1"),
		target = aTag.offset().top - 55;
		$('html,body').animate({scrollTop: target},1000);
		$('html,body').animate({scrollTop: target},1000);
 	}

	$("#link").click(function() {
		scrollToAnchor();
 	});






});