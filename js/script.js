$(document).ready(function() {

	var photos =  $('#images img').map(function() { return this.src; });
	
	var description =  $('#images img').map(function() { return this.alt; });

	var source = 0;
	
	$("#bigImage").attr({
		'src': photos[source],
		'alt': 'description[source]'
	});
	
	$("#caption").text(description[source]);
	
	
	$("#next").click(function() {
	
		source++;
		
		if (source >= photos.length) {
		

			source = 0;

		}
		
		$("#bigImage").attr({
			'src': photos[source],
			'alt': 'description[source]'
		});
		
		$("#caption").text(description[source]);
	
	});
	
	
	$("#prev").click(function() {
	
		source--;
		
		if (source < 0) {
		

			source = photos.length -1;

		}
		
		$("#bigImage").attr({
			'src': photos[source],
			'alt': 'description[source]'
		});

		$("#caption").text(description[source]);
	
	});

});
