var express = require('express');
var router = express.Router();
var Hero = require('../models/heroModel.js');

// get all heros
router.get('/', function(req, res) {

});

// post to create a new hero
router.post('/', function(req, res) {
  console.log('post route hit', req.body);
  var newHero = Hero(req.body);
  newHero.save();
  res.sendStatus(200);
});

module.exports = router;
