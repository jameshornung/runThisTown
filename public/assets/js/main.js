$(document).ready(function(){
//Materialize JS
	$(".dropdown-button").dropdown();
	$(".button-collapse").sideNav();
	$('select').material_select();
	$('.modal-trigger').leanModal();

	var path = window.location.pathname;

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

// YouTube Training Videos===============================================

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


// Eight Minute Abs=========================================================

	$('#sixPack').click(function(e){
	  e.preventDefault();
	  var x = 0;

	  $('.exerciseName').text('Basic Crunch');
	  $('#instructions').html('1.  Lay on the floor with your feet flat on the ground and eyes focused on the ceiling' + '<br><br>');
	  $('#instructions').append('2.  Lift your head and shoulders, keeping your lower back pressed firmly against the floor');

	  eightMinuteAbs();

	  function eightMinuteAbs(){
	    var timer = 45;
	    var startTimer = setInterval(function(){
	      $('.countdownTimer').text(timer)
	      timer--;

	      if(timer === -1){
	        clearInterval(startTimer);
	        x++;
	        
	        if(x === 1){
	          $('.exerciseName').text('Right Oblique Crunch');
	          $('#instructions').html('1.  Remain on your back with your right foot flat on the ground and left leg extended straight in front of you' + '<br><br>');
	          $('#instructions').append('2.  Place your right hand behind your head and rest your left hand lightly on your right oblique' + '<br><br>');
	          $('#instructions').append('3.  Hover your left leg a few inches above the floor' + '<br><br>');
	          $('#instructions').append('4.  Bring your right elbow to meet your left knee, and then re-extend the leg to a hover and lower your head and shoulders back to the ground' + '<br>');
	          eightMinuteAbs();
	        }
	        if(x === 2){
	          $('.exerciseName').text('Left Oblique Crunch');
	          $('#instructions').html('1.  Remain on your back with your left foot flat on the ground and right leg extended straight in front of you' + '<br><br>');
	          $('#instructions').append('2.  Place your left hand behind your head and rest your right hand lightly on your left oblique' + '<br><br>');
	          $('#instructions').append('3.  Hover your right leg a few inches above the floor' + '<br><br>');
	          $('#instructions').append('4.  Bring your left elbow to meet your right knee, and then re-extend the leg to a hover and lower your head and shoulders back to the ground' + '<br><br>');
	          eightMinuteAbs();
	        }
	        if(x === 3){
	          $('.exerciseName').text('Toe Touches');
	          $('#instructions').html('1.  Extend your legs stright in air' + '<br><br>');
	          $('#instructions').append('2.  Keeping your lower back pressed against the floor and eyes focused on the ceiling, curl up reaching for the bottom of your feet' + '<br><br>');
	          eightMinuteAbs();
	        }
	        if(x === 4){
	          $('.exerciseName').text('Leg Lifts');
	          $('#instructions').html('1.  Lay on your back with legs extended straight in the air.' + '<br><br>');
	          $('#instructions').append('2.  Keeping your legs straight, slowly lower them towards the floor until you can feel your lower back starting to pull off the floor' + '<br><br>');
	          $('#instructions').append('3.  Slowly lift your legs back to the starting position');
	          eightMinuteAbs();
	        }
	        if(x === 5){
	          $('.exerciseName').text('Right Side Crunch');
	          $('#instructions').html('1.  Place both feet flat on the floor and then drop your knees to the left' + '<br><br>');
	          $('#instructions').append('2.  Place your right hand behind your head and crunch up, focusing on contracting your right oblique as you lift' + '<br><br>');
	          eightMinuteAbs();
	        }
	        if(x === 6){
	          $('.exerciseName').text('Left Side Crunch');
	          $('#instructions').html('1.  Place both feet flat on the floor and then drop your knees to the right' + '<br><br>');
	          $('#instructions').append('2.  Place your left hand behind your head and crunch up, focusing on contracting your left oblique as you lift' + '<br>');
	          eightMinuteAbs();
	        }
	        if(x === 7){
	          $('.exerciseName').text('Push Throughs');
	          $('#instructions').html('1.  Lay on the floor with your feet flat on the ground and hands clasped above your belly button' + '<br><br>');
	          $('#instructions').append('2.  Lift your head and shoulders of the ground and push your hands through the gap between your knees' + '<br><br>');
	          $('#instructions').append('3.  Focus on small, pulsing movements that keeps a contraction in your abdominal muscles');
	          eightMinuteAbs();
	        }
	        if(x === 8){
	          $('.exerciseName').text('Leg Pushes');
	          $('.#instructions').html('1.  Place your hands under your buttocks and extend your legs straight in the air' + '<br><br>');
	          $('#instructions').append('2.  Using your lower abdominal muscles push your feet towards the ceiling' + '<br><br>');
	          $('#instructions').append('3.  Keep your head and neck pressed against the floor throughout the movement, focus on using your lower abdominal to lift your legs and avoid a rocking motion' + '<br><br>');
	        }
	        if(x === 9){
	          $('.exerciseName').text('Bicycles');
	          $('.#instructions').html('1.  Lay on your back with your legs extended straight in front of you' + '<br><br>');
	          $('#instructions').append('2.  Place both hands behind your head' + '<br><br>');
	          $('#instructions').append('3.  Bring your right elbow to meet your left knee above you' + '<br><br>');
	          $('#instructions').append('4.  Extend your leg and lower your head and shoulders back to the floor.  Repeat on other side.' + '<br><br>');
	          $('#instructions').append('5.  Keep your feet and legs hovered above the ground throughout the exercise.  Focus on bringing your elbow up to your knee rather than pulling our knees down to your elbow' + '<br><br>');
	          $('#instructions').append('6.  Keep your feet and legs hovered above the ground throughout the exercise.  Focus on bringing your elbow up to your knee rather than pulling our knees down to your elbow' + '<br><br>');
	        }
	        if(x === 10){
	          $('.exerciseName').text('Static Hold');
	          $('.#instructions').html('1.  Lay on your back with your feet flat on the floor' + '<br><br>');
	          $('#instructions').append('2.  Lift your head and shoulders off the floor and contract your abdominal muscles to hold this position' + '<br><br>');
	        }
	        if(x === 11){
	          $('.exerciseName').text('Workout Complete');
	          $('.#instructions').html('Congratulations, you have completed the eight minute abdominal training' + '<br');
	        }
	      }
	    }, 1000); 
	  };
	});

// TRAINING PLANS================================================================

// 5K - Intermediate
    $('#5kIntermediate').click(function(e){
      e.preventDefault();
      $('#showThePlan').empty();
      console.log('clicked');
      $('.planName').text('8 Week Five K (Intermediate)')
      var table = $('<table class="trainingTable"><th>Week</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th>');
      for(i=0; i<8; i++){
        var weekNumber = i + 1;
        var row = $('<tr><td>' + weekNumber + '</td><td>' + fivekIntermediate[i].week[0] + '</td><td>' + fivekIntermediate[i].week[1] + '</td><td>' + fivekIntermediate[i].week[2] + '</td><td>' + fivekIntermediate[i].week[3] + '</td><td>' + fivekIntermediate[i].week[4] + '</td><td>' + fivekIntermediate[i].week[5] + '</td><td>' + fivekIntermediate[i].week[6] + '</td></tr>');
        table.append(row);
      }
      $('#showThePlan').append(table);
    });

    // 10K - Intermediate
    $('#10kIntermediate').click(function(e){
      e.preventDefault();
      $('#showThePlan').empty();
      console.log('clicked');
      $('.planName').text('8 Week Ten K (Intermediate)')
      var table = $('<table class="trainingTable"><th>Week</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th>');
      for(i=0; i<8; i++){
        var weekNumber = i + 1;
        var row = $('<tr><td>' + weekNumber + '</td><td>' + tenkIntermediate[i].week[0] + '</td><td>' + tenkIntermediate[i].week[1] + '</td><td>' + tenkIntermediate[i].week[2] + '</td><td>' + tenkIntermediate[i].week[3] + '</td><td>' + tenkIntermediate[i].week[4] + '</td><td>' + tenkIntermediate[i].week[5] + '</td><td>' + tenkIntermediate[i].week[6] + '</td></tr>');
        table.append(row);
      }
      $('#showThePlan').append(table);
    });

// Half Marathon - Novice
    $('#halfMarathonNovice').click(function(e){
      e.preventDefault();
      $('#showThePlan').empty();
      console.log('clicked');
      $('.planName').text('12 Week Half Marathon (Novice)')
      var table = $('<table class="trainingTable"><th>Week</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th>');
      for(i=0; i<12; i++){
      	var weekNumber = i + 1;
        var row = $('<tr><td>' + weekNumber + '</td><td>' + halfNovice[i].week[0] + '</td><td>' + halfNovice[i].week[1] + '</td><td>' + halfNovice[i].week[2] + '</td><td>' + halfNovice[i].week[3] + '</td><td>' + halfNovice[i].week[4] + '</td><td>' + halfNovice[i].week[5] + '</td><td>' + halfNovice[i].week[6] + '</td></tr>');
        table.append(row);
      }
      $('#showThePlan').append(table);
    });

// Half Marathon - Intermediate
    $('#halfMarathonIntermediate').click(function(e){
      e.preventDefault();
      $('#showThePlan').empty();
      console.log('clicked');
      $('.planName').text('12 Week Half Marathon (Intermediate)')
      var table = $('<table class="trainingTable"><th>Week</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th>');
      for(i=0; i<12; i++){
      	var weekNumber = i + 1;
        var row = $('<tr><td>' + weekNumber + '</td><td>' + halfIntermediate[i].week[0] + '</td><td>' + halfIntermediate[i].week[1] + '</td><td>' + halfIntermediate[i].week[2] + '</td><td>' + halfIntermediate[i].week[3] + '</td><td>' + halfIntermediate[i].week[4] + '</td><td>' + halfIntermediate[i].week[5] + '</td><td>' + halfIntermediate[i].week[6] + '</td></tr>');
        table.append(row);
      }
      $('#showThePlan').append(table);
    });

// Marathon - Novice
    $('#marathonNovice').click(function(e){
      e.preventDefault();
      $('#showThePlan').empty();
      console.log('clicked');
      $('.planName').text('Marathon (Novice)')
      var table = $('<table class="trainingTable"><th>Week</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th>');
      for(i=0; i<18; i++){
        var weekNumber = i + 1;
        var row = $('<tr><td>' + weekNumber + '</td><td>' + marathonNovice[i].week[0] + '</td><td>' + marathonNovice[i].week[1] + '</td><td>' + marathonNovice[i].week[2] + '</td><td>' + marathonNovice[i].week[3] + '</td><td>' + marathonNovice[i].week[4] + '</td><td>' + marathonNovice[i].week[5] + '</td><td>' + marathonNovice[i].week[6] + '</td></tr>');
        table.append(row);
      }
      $('#showThePlan').append(table);
    });
})



