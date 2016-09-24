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
	var videos = ['https://www.youtube.com/embed/kie6ArWL8Ug', 'https://www.youtube.com/embed/gZW8TabLcSU', 'https://www.youtube.com/embed/nuCL7Izfgtc']

	$('.youTubeVideo').click(function(){
		var x = this.value;
		$('#video').attr('src', videos[x])
	})




})



