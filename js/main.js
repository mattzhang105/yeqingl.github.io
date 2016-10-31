$(document).ready(function() {
	$("#allprj").click(function(){
		$(".ux, .web, .interaction, .visual").fadeIn();
		$("#allprj").css("text-decoration", "underline");
		$("#ux, #web, #interaction, #visual").css("text-decoration", "none");
	});

	$("#ux").click(function(){
		$(".ux").fadeIn();
    	$(".web, .interaction, .visual").hide();
    	$("#ux").css("text-decoration", "underline");
    	$("#allprj, #web, #interaction, #visual").css("text-decoration", "none");
	});

	$("#web").click(function(){
		$(".web").fadeIn();
    	$(".ux, .interaction, .visual").hide();
    	$("#web").css("text-decoration", "underline");
    	$("#allprj, #ux, #interaction, #visual").css("text-decoration", "none");
	});

	$("#interaction").click(function(){
		$(".interaction").fadeIn();
    	$(".web, .ux, .visual").hide();
    	$("#interaction").css("text-decoration", "underline");
    	$("#allprj, #web, #ux, #visual").css("text-decoration", "none");
	});

	$("#visual").click(function(){
		$(".visual").fadeIn();
    	$(".web, .interaction, .ux").hide();
    	$("#visual").css("text-decoration", "underline");
    	$("#allprj, #web, #interaction, #ux").css("text-decoration", "none");
	});
 });