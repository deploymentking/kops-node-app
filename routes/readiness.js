var express = require('express');
var router = express.Router();
var sleep = require('sleep');

/* GET readiness page. */
router.get('/', function(req, res, next) {
  sleep.sleep(15);
  res.render('readiness', { title: 'Readiness Probe Page' });
});

module.exports = router;
