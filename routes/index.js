var express = require('express');
var router = express.Router();
var fs = require('fs');
var version = fs.readFileSync('.version', 'utf8');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Think Stack NodeJs App', version: version });
});

module.exports = router;
