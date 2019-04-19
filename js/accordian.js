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

		$Menu.on('click', function(){
			$aside.hide();
			$aside.toggleClass('open');
			if($aside.hasClass('open')){
				$aside.stop(true).animate({left: '-5%'}, 600, 'easeOutQuint');
				$aside.show();
				$Menu.attr('src', 'image/main/cancel.png');
			} else {
				$aside.stop(true).animate({left: '-100%'}, 600, 'easeInQuint');
				$Menu.attr('src', 'image/main/menu.png');
			};
		});
});
