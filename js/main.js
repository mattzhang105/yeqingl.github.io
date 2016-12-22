$(document).ready(function() {
	$("#about").click(function(){
		$("#filter li a").css("color", "#4c4c4c");
	});

	$(".category").click(function(){
		$(".mobile, .web, .other, .print").fadeIn();
		$("#filter li a").css("color", "#4c4c4c");
	});

	$("#mobile").click(function(){
		$(".web, .other, .print").hide();
		$(".mobile").fadeIn();
		$("#filter li a").css("color", "#4c4c4c");
    	$("#mobile").css("color", "#6bb6ef");
	});

	$("#web").click(function(){
		$(".mobile, .other, .print").hide();
		$(".web").fadeIn();
		$("#filter li a").css("color", "#4c4c4c");
    	$("#web").css("color", "#6bb6ef");
	});

	$("#other").click(function(){
    	$(".web, .mobile, .print").hide();
    	$(".other").fadeIn();
    	$("#filter li a").css("color", "#4c4c4c");
    	$("#other").css("color", "#6bb6ef");
	});

	$("#print").click(function(){
    	$(".web, .other, .mobile").hide();
    	$(".print").fadeIn();
    	$("#filter li a").css("color", "#4c4c4c");
    	$("#print").css("color", "#6bb6ef");
	});
 });