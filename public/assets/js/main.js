$(document).ready(function(){
	console.log("js attached");
	$(".dropdown-button").dropdown();
	
	$('#fullLoop').click(function(){
		$('#routeImage').attr("src", butlerLoop.image);
		$('#routeTitle').text(butlerLoop.title);
		$('#routeDescription').html(butlerLoop.description);
	})
})