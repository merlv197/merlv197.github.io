var colors = ['red',
			  'green',
			  'blue'

			 ];








var objects = ['bunny',
			   'cat',
			   'dog',
			   'sloth',
			   'circle',
			   'square',
			   'triangle',
			   'meow',
			   '...',
			   'Woof',
			   'Meep',
			   ];












$('.button').click(function() {
	var random_object_number = Math.floor(Math.random() * objects.length);
	var object_to_use = objects[random_object_number];

	var random_color_number = Math.floor(Math.random() * colors.length);
	var colort_to_use = colors[random_color_number];

	var result = '';

	
	if (random_object_number < 7) {

		result = '<div class"object"><img src"' + object_to_use + '"" /></div>';
	} else  {
		result = '<div class"object ' + color_to_use +' ">' + object_to_use + '</div>';
	}

	$.('content').prepend(result);
});