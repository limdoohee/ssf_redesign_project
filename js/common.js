$(document).ready(function(){
	$(".sub_menu").hide();
	$(".menu1 a").hover(function(){
		$("#menu1_sub").stop(true).slideDown("easeInSine");
		}, function(){
			$("#menu1_sub").stop(true).slideUp("easeOutSine");
	});

	
	$(".menu2 a").hover(function(){
			$("#menu2_sub:not(:animated)").stop(true).slideDown("easeInSine");
			}, function(){
				$("#menu2_sub").stop(true).slideUp("easeOutSine");
		});
		
	$(".menu3 a").hover(function(){
		$("#menu3_sub:not(:animated)").stop(true).slideDown("easeInSine");
		}, function(){
			$("#menu3_sub").stop(true).slideUp("easeOutSine");
	});
});