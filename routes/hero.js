var express = require('express');
var router = express.Router();
var Hero = require('../models/heroModel.js');

// get all heros
router.get('/', function(req, res) {
  console.log('get route hit');
  Hero.find().then(function(data) {
    console.log(data);
    res.send(data);
  }); // end find
});

// post to create a new hero
router.post('/', function(req, res) {
  console.log('post route hit', req.body);
  var newHero = Hero(req.body);
  newHero.save();
  res.sendStatus(200);
});

module.exports = router;
