var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var request = require('request');
var methodOverride = require('method-override');
var passport = require('passport');
var Strategy = require('passport-local');

var User = require('./../models/User.js');


// ROUTES====================================================
router.get('/', function(req, res, body){
  var user = req.user;
	res.render('index', { user });
  console.log('home page', user)
})

router.get('/login', function(req, res, body){
	res.render('login');
})

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    console.log('login page', req.user)
    res.redirect('/');
  })

router.get('/register', function(req, res, body){
  res.render('register', {user: req.user});
  console.log(req.user);
})

router.post('/register', function(req, res){
  var newUser = new User({ username: req.body.username, password: req.body.password });
  console.log('New User', newUser);
  newUser.save(function(err, doc) {
    if(err) {
      console.log('save error', err);
    } else {
      console.log('saved', doc)
      req.login(newUser, function(err) {
        if (err) {
          console.log('login error', err);
        }
        return res.redirect('/');
      });
    }
  });
})

router.get('/routes', function(req, res, body){
	res.render('routes');
  console.log(req.user);
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

module.exports = router;