$(() => {
	$('.more').on('click', () => {
		$('.contmenu').slideToggle(300);
		$('.more__line:nth-child(1)').toggleClass('line-rotate-first');
		$('.more__line:nth-child(3)').toggleClass('line-rotate-second');
		$('.more__line:nth-child(2)').toggle();
	});
	let $normItem = $('.norm-item');
	$normItem.on('click', (event) => {
		$(event.currentTarget).next().fadeIn();
	});

	let $crossHide = $('.full-info_cross');
	$crossHide.on('click', () => {
		$('.fullinfo-hide').fadeOut();
		console.log('unvivsible');
	});
	let $trainTypeHiden = $('.train-type__hiden');
	let $trainType = $('.train-type span');
	$trainType.on('click', () => {
		$(event.currentTarget).next().fadeIn();
	});
	$crossHide.on('click', () => {
		$trainTypeHiden.fadeOut();
	});
});
// nth-child(2)