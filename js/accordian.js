$(function(){
	$("#accordian h3").click(function(){
		$("#accordian ul ul").slideUp();
		if(!$(this).next().is(":visible"))
		{
			$(this).next().slideDown();
		}
		
	})
});

$(function() {
	//
	var  duration = 300;
	
	// aside-------------------------------------
	var  $aside = $('#menu');
	var  $Menu = $('#slidingmenu').find('img');
	
		$Menu
		.on('click', function(){
			$aside.toggleClass('open');
			if($aside.hasClass('open')){
				$aside.stop(true).animate({left: '0'}, 600, 'easeOutQuint');
				$Menu.attr('src', 'image/main/cancel.png');
			} else {
				$aside.stop(true).animate({left: '-30%'}, 600, 'easeInQuint');
				$Menu.attr('src', 'image/main/menu.png');
			};
		});
});