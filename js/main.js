$(document).ready(function() {
	$("#allprj").click(function(){
		$(".mobile, .web, .other, .print").fadeIn();
		$("#allprj").css("color", "#4c4c4c");
		$("#mobile, #web, #other, #print").css("color", "#cdd2d6");
	});

	$("#mobile").click(function(){
		$(".web, .other, .print").hide();
		$(".mobile").fadeIn();
    	$("#mobile").css("color", "#4c4c4c");
    	$("#allprj, #web, #other, #print").css("color", "#cdd2d6");
	});

	$("#web").click(function(){
		$(".mobile, .other, .print").hide();
		$(".web").fadeIn();
    	$("#web").css("color", "#4c4c4c");
    	$("#allprj, #mobile, #other, #print").css("color", "#cdd2d6");
	});

	$("#other").click(function(){
    	$(".web, .mobile, .print").hide();
    	$(".other").fadeIn();
    	$("#other").css("color", "#4c4c4c");
    	$("#allprj, #web, #mobile, #print").css("color", "#cdd2d6");
	});

	$("#print").click(function(){
    	$(".web, .other, .mobile").hide();
    	$(".print").fadeIn();
    	$("#print").css("color", "#4c4c4c");
    	$("#allprj, #web, #other, #mobile").css("color", "#cdd2d6");
	});
 });