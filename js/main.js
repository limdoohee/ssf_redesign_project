$(document).ready(function(){
$("#category-new").css({color:"#173f73", fontWeight:"bold"});
	$("#category-new").click(function(){
		$("#category-new").css({color:"#173f73", fontWeight:"bold"});
		$("#category-best").css({color:"", fontWeight:""});
		$("#new").css({display:"block",zIndex:"2"});
		$("#best").css({display:"none",zIndex:"1"});
	});
	$("#category-best").click(function(){
		$("#category-best").css({color:"#173f73", fontWeight:"bold"});
		$("#category-new").css({color:"", fontWeight:""});
		$("#best").css({display:"block",zIndex:"2"});
		$("#new").css({display:"none",zIndex:"1"});
	});
});

$(document).ready(function(){
	$('.panel').hide();

});
