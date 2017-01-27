var express = require('express');
var router = express.Router();

var Color = require('../models/db_Color');

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Colors for IaaS' });
});

router.get('/colors', function(req, res, next) {
	Color.sync().then(function() {
		Color.findAll().then(function(colors) {
			res.render('colors', {
				title: 'Colors for IaaS - Color List',
				colors: colors
			});
		});
	});
});

router.get('/colors/:id', function(req, res, next) {
	Color.sync().then(function() {
		Color.findById(req.params.id).then(function(color) {
			res.render('single-color', {
				title: 'Colors for IaaS - Single Color',
				color: color
			});
		});
	});
});

router.get('/add-color', function(req, res, next) {
    res.render('add-color', {title: 'Colors for IaaS - Add Color'});
});

router.post('/add-color', function(req, res, next) {
	Color.sync().then(function() {
		Color.create({
			name: req.body['color-name'],
			red: req.body.red,
			green: req.body.green,
			blue: req.body.blue
		}).then(function() {
			res.redirect('/colors');
		});
	});
});

module.exports = router;
