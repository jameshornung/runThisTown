var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
var request = require('request');
var methodOverride = require('method-override');

var Sequelize = require('sequelize');

router.get('/', function(req, res, body){
	res.render('index');
})

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