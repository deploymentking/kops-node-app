var express = require('express');
var router = express.Router();
var fs = require('fs');
var sleep = require('sleep');

/* GET healthcheck page. */
router.get('/healthcheck', function (req, res) {
  let version = fs.readFileSync('.version', 'utf8');
  res.render('healthcheck', {title: 'Health Check Page', version: version});
});

/* GET readiness page. */
router.get('/readiness', function (req, res) {
  sleep.sleep(15);
  res.render('readiness', {title: 'Readiness Probe Page'});
});

module.exports = router;
