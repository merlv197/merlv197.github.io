$('.nav-item').click(function() {
	var button_name = $(this).data('button');

	console.log(button_name);
	$('.content').addClass('button_name');


	$('nav-item').removeClass('active');


});

