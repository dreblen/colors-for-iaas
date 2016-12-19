var express = require('express');
var router = express.Router();

var Color = require('../models/db_Color');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Colors for IaaS' });
});

router.get('/colors', function(req, res, next) {
    ;
});

router.get('/colors/:id', function(req, res, next) {
    ;
});

module.exports = router;
