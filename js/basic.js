var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  }
}


$(document).ready(function(){
$(".page-section5 img").hover(function (){
		var temp = $(this).attr("src");
		$(this).attr("src", $(this).attr("img-data"));
		$(this).attr("img-data", temp);
	});
	
});

$(document).ready(function(){
	$(".sub_menu").hide();
	$(".menu1 a").hover(function(){
		$("#menu1_sub").stop(true).slideDown("50","easeInSine");
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

