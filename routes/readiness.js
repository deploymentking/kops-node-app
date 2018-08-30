var express = require('express');
var router = express.Router();
var sleep = require('sleep');
sleep.sleep(15)

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('readiness', { title: 'Readiness Probe Page', version: version });
});

module.exports = router;
