'use strict';

var express = require('express');
var router = express.Router();

router.get(
  '/',
  function(req, res, next) {
    res.render('img-changer', {letters: 'edcba'.split('')});
  }
);

module.exports = router;