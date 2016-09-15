$(document).ready(function(){
	console.log("js attached");
	$(".dropdown-button").dropdown();
	
	$('#fullLoop').click(function(){
		$('#routeImage').attr("src", butlerLoop.image);
	})
})