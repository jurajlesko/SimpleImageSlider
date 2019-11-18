

	var pics =  document.querySelectorAll("#images img");
	
	
	
	var pics_src = [];
	
	for (var i = 0, l = pics.length; i < l; i++) {
		pics_src.push(pics[i].getAttribute("src"))
	};	
	
	var pics_alt = []
	
	for (var i = 0, l = pics.length; i < l; i++) {
		pics_alt.push(pics[i].getAttribute("alt"))
	};

	var index = 0;
	
	document.getElementById("bigImage").setAttribute("src", pics_src[index]);
	document.getElementById("bigImage").setAttribute("alt", pics_alt[index]);
	document.getElementById("caption").innerHTML = pics_alt[index];
	
	document.getElementById("next").onclick = function() {
	
		index++;
		
		if (index >= pics_src.length) {
		

			index = 0;

		}
		
		document.getElementById("bigImage").setAttribute("src", pics_src[index]);
		document.getElementById("bigImage").setAttribute("alt", pics_alt[index]);
		document.getElementById("caption").innerHTML = pics_alt[index];
	
	};
	
	
	document.getElementById("prev").onclick = function() {
	
		index--;
		
		if (index < 0) {
		

			index = pics_src.length -1;

		}
		
		document.getElementById("bigImage").setAttribute("src", pics_src[index]);
		document.getElementById("bigImage").setAttribute("alt", pics_alt[index]);
		document.getElementById("caption").innerHTML = pics_alt[index];
	
	};



// Jquery version
/*
$(document).ready(function() {

	var pics_src =  $('#images img').map(function() { return this.src; });
	
	var pics_alt =  $('#images img').map(function() { return this.alt; });

	var index = 0;
	
	$("#bigImage").attr({
		'src': pics_src[index],
		'alt': 'pics_alt[index]'
	});
	
	$("#caption").text(pics_alt[index]);
	
	
	$("#next").click(function() {
	
		index++;
		
		if (index >= pics_src.length) {
		

			index = 0;

		}
		
		$("#bigImage").attr({
			'src': pics_src[index],
			'alt': 'pics_alt[index]'
		});
		
		$("#caption").text(pics_alt[index]);
	
	});
	
	
	$("#prev").click(function() {
	
		index--;
		
		if (index < 0) {
		

			index = pics_src.length -1;

		}
		
		$("#bigImage").attr({
			'src': pics_src[index],
			'alt': 'pics_alt[index]'
		});

		$("#caption").text(pics_alt[index]);
	
	});

});
*/

