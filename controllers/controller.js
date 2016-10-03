var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var request = require('request');
var methodOverride = require('method-override');
var passport = require('passport');
var Strategy = require('passport-local');
var mongoose = require('mongoose');
var db = mongoose.connection;

var User = require('./../models/User.js');
var Message = require('./../models/Message.js');


// ROUTES====================================================
router.get('/', function(req, res, body){
  var user = req.user;
  // console.log('index', req.body);
	res.render('index', { user });
})

router.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    var path = req.body.pathName;
    res.redirect(path);
})

router.post('/register', function(req, res){
  var path = req.body.pathName;
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
        return res.redirect(path);
      });
    }
  });
})

router.get('/logout',
  function(req, res){
    req.logout();
    res.redirect('/');
  });

router.post('/event', function(req, res){
  var newMessage = new Message({event: req.body.event, date: req.body.date, description: req.body.description, username: req.user.username});
  // console.log('new message ', newMessage)
  newMessage.save(function(err, doc){
    if(err){
      console.log('save error', error)
    }
    else{
      console.log('saved', doc)
    }
    }).then(function(data){
      res.redirect('/community')
  })
});

router.get('/routes', function(req, res, body){
  var user = req.user;
	res.render('routes', {user});
})

router.get('/races', function(req, res, body){
  var user = req.user;
	res.render('races', {user});
})

router.get('/community', function(req, res, body){
  var user = req.user;
  
  Message.find().then(function(data){
    var messagesForBoard = data;
    // console.log('messages', messagesForBoard);
    res.render('community', {user, messagesForBoard});
  })

})

router.get('/training', function(req, res, body){
  var user = req.user;
	res.render('training', {user});
})

module.exports = router;