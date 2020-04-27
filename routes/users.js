var express = require('express');
let Router = require("express-promise-router");
let Video = require('../models/videos.js');
let User = require('../models/User.js');
let videoInfo = require('../models/videoInfo.js');


let router = new Router

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('homepage');
});

module.exports = router;
