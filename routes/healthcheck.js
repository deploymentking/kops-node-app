var express = require('express');
var router = express.Router();
var fs = require('fs');
var version = fs.readFileSync('.version', 'utf8');

/* GET healthcheck page. */
router.get('/healthcheck', function(req, res, next) {
  res.render('healthcheck', { title: 'Health Check Page', version: version });
});

module.exports = router;
