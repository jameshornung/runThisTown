$(document).ready(function(){
//Materialize JS
	$(".dropdown-button").dropdown();
	$(".button-collapse").sideNav();
	$('select').material_select();

//=============
//ROUTES
//=============


	$('.butlerDropdowns').click(function(){
		var x = this.value;
		console.log(x);
		$('#routeImage').attr('src', butlerLoop[x].image);
		$('#routeTitle').text(butlerLoop[x].title);
		$('#routeDescription').html(butlerLoop[x].description);
	})
//=============
//TRAINING
//=============
	var videos = ['https://www.youtube.com/embed/nuCL7Izfgtc', 'https://www.youtube.com/embed/gZW8TabLcSU']

	$('.youTubeVideo').click(function(){
		var x = this.value;
		$('#video').attr('src', videos[x])
	})




})



