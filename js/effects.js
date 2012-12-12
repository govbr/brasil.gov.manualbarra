// desenvolvido por Bernard De Luna - www.bernarddeluna.com  / @bernarddeluna
$(document).ready(function() {
	
	// aumentando a fonte
	$(".aumentar").click(function () {
		var size = $("#principal").css('font-size');
		
		size = size.replace('px', '');
		size = parseInt(size) + 1.4;
		
		$("#principal").animate({'font-size' : size + 'px'});
	});
	
	//diminuindo a fonte
	$(".diminuir").click(function () {
		var size = $("#principal").css('font-size');
		
		size = size.replace('px', '');
		size = parseInt(size) - 1.4;
		
		$("#principal").animate({'font-size' : size + 'px'});
	});
	
	// resetando a fonte
	$(".normal").click(function () {		
		$("#principal").animate({'font-size' : '11px'});
	});

	
});
