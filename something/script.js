$(document).ready(function(){

	$("#nav-2 ul li").hover(function(){
		$(this).css({
			"transition":"all 0.85s linear",
			"background":"white",
			"border":"1px black solid",
		});
	},function(){
		$(this).css({
			"transition":"all 0.85s linear",
			"background":"#ddd",
			"border":"1px gold solid",
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

	$("div#conlay").mouseenter(function(){
		$("img#cho").removeClass("content-lay");
	});


	$(function() {
                
                setTimeout(function() {
                    $('div.ahla ul').removeClass('hidden');
                }, 500);
                
    })();


});