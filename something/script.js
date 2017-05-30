$(document).ready(function(){

	$("#nav-2 ul li").hover(function(){
		$(this).css({
			"transition":"all 0.85s linear",
			"background":"black",
			"border":"1px black solid",
			"color":"white"
		});
	},function(){
		$(this).css({
			"transition":"all 0.85s linear",
			"background":"black",
			"border":"1px gold solid",
			"color":"gold"
		});
	});

	$("#nav-1 ul li").hover(function(){
		$(this).css({
			"transition":"all 0.85s linear",
			"background":"black",
			"border":"1px black solid",
			"color":"lightblue"
		});
	},function(){
		$(this).css({
			"transition":"all 0.85s linear",
			"background":"black",
			"border":"1px #ddd solid",
			"color":"white"
		});
	});




});