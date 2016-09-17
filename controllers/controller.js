var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var request = require('request');
var methodOverride = require('method-override');
var passport = require('passport');



router.get('/', function(req, res, body){
	res.render('index', {user: req.user});
})

router.get('/login', function(req, res, body){
	res.render('login');
})

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
  	var newUser = new User(req.username, req.password);
  	console.log("new user = ", newUser);
  	newUser.save(function(err, doc){
  		console.log('doc = ', doc);
  		if(err){
  			console.log(err);
  		}
  		else{
  			console.log('user succesfully created')
  		}
  	}).then(function(){
  		res.redirect('/');
  	})
    
  });

// app.post('/login', 
//   passport.authenticate('local', { failureRedirect: '/login' }),
//   function(req, res) {
//     res.redirect('/');
//   });

// app.post('/shows/:id', function(req, res){
// 	var newNote = new Note(req.body);
// 	console.log('new note = ', newNote);
// 	newNote.save(function(err, doc){
// 		console.log('doc = ', doc);
// 		if(err){
// 			console.log(err);
// 		}
// 		else{
// 			Show.findOneAndUpdate({'_id': req.params.id}, {'$addToSet': {comment: [doc.body]}}).exec(function(err, doc){
// 				if(err){
// 					console.log(err);
// 				}
// 				else{
// 					res.send(doc);
// 				}
// 			});
// 		}
// 	});
// });

// router.get('/home', function(req, res, body){
// 	res.render('index');
// })

router.get('/routes', function(req, res, body){
	res.render('routes');
})

router.get('/races', function(req, res, body){
	res.render('races');
})

router.get('/community', function(req, res, body){
	res.render('community');
})

router.get('/training', function(req, res, body){
	res.render('training');
})

router.get('/routes/butler-trail', function(req, res, body){
	res.render('butler');
})





module.exports = router;