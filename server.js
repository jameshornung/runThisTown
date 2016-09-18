//Dependencies===========================================
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var request = require('request');
var exphbs = require('express-handlebars');
var mongoose = require('mongoose');
var passport = require('passport');
var Strategy = require('passport-local');

//Configure the app======================================
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(process.cwd() + '/public'));
app.use(passport.initialize());
app.use(passport.session());

var routes = require('./controllers/controller.js');
app.use('/', routes);

//Database Configuration==================================
// mongoose.connect('mongodb://heroku_gxr6jph9:2ne0iec1qd3onfiileab4neiv2@ds033046.mlab.com:33046/heroku_gxr6jph9');
mongoose.connect('mongodb://localhost/runatxdb')
var db = mongoose.connection;

//Log Mongoose Errors
db.on('error', function(err){
	console.log('Mongoose Error: ', err);
});

//Log Successful Connection
db.once('open', function(){
	console.log('Mongoose Connection Successful!');
});

// var User = require('./models/User.js')

// Passport Configuration====================================
passport.use(new Strategy(
  function(username, password, cb) {
    db.models.user.findOne({username: username}, function(err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));

passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

//MAKE THE CONNECTION=================================================
var PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
    console.log('Listening on: ' + PORT);
});