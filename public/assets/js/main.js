$(document).ready(function(){
	console.log("js attached");
	$(".dropdown-button").dropdown();
	$(".button-collapse").sideNav();
	$('select').material_select();
	
	// $('.butlerDropdowns').click(function(){

	// 	var x = this.value
	// 	console.log(x);
	// 	$('#routeImage').attr("src", butlerLoop[x].image);
	// 	$('#routeTitle').text(butlerLoop[x].title);
	// 	$('#routeDescription').html(butlerLoop[x].description);
	// 	$('#routeButton').attr("href", butlerLoop[x].routeHref);
	// })
})