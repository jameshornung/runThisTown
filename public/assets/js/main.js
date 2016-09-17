$(document).ready(function(){
	console.log("js attached");
	$(".dropdown-button").dropdown();
	
	$('.butlerDropdowns').click(function(){

		var x = this.value
		console.log(x);
		$('#routeImage').attr("src", butlerLoop[x].image);
		$('#routeTitle').text(butlerLoop[x].title);
		$('#routeDescription').html(butlerLoop[x].description);
	})
})