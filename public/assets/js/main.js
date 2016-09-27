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
	var gazelleVideos = [
	'https://www.youtube.com/embed/kie6ArWL8Ug?controls=0', 
	'https://www.youtube.com/embed/gZW8TabLcSU?controls=0', 
	'https://www.youtube.com/embed/tY0S1y-HEZs?controls=0', 
	'https://www.youtube.com/embed/chY5YBKipTQ?controls=0', 
	'https://www.youtube.com/embed/7gE7N_PSjoI?controls=0', 
	'https://www.youtube.com/embed/YjNAt708Ykc?controls=0', 
	'https://www.youtube.com/embed/euN56EFx1XM?controls=0'
	]

	var valeriesVideos =[
	'https://www.youtube.com/embed/yn2AHHzW4ps?controls=0', 
	'https://www.youtube.com/embed/sxuQJrhjbbU?controls=0', 
	'https://www.youtube.com/embed/gbmk7mtLLuU?controls=0'
	];

	$('.youTubeVideoGazellesLink').click(function(){
		var x = this.value;
		$('#video').attr('src', gazelleVideos[x])
	})

	$('.youTubeVideoRunAtxLink').click(function(){
		var x = this.value;
		$('#video').attr('src', valeriesVideos[x])
	})




})



