// Pull in required dependencies
var express = require('express');
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// Create the routes and associated logic
router.get('/', function (req, res) {
	burger.selectAll(function (data) {
		var hbsObject = {
			burgers: data
		};
		// console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/burgers', function (req, res) {
	burger.insertOne([
		'burger_name'
	], [
		req.body.burger_name
	], function (data) {
		res.redirect('/');
	});
});

router.put('/burgers/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	// Need to figure out how to get the devoured value of the burger
	// console.log(req.query.devoured);
	burger.updateOne({
		devoured: (req.query.devoured === '0') ? '1' : '0'
	}, condition, function (data) {
		res.redirect('/');
	});
});

// TODO: Delete not currently working
router.delete('/burgers/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	// console.log(req.query.devoured);
	burger.deleteOne({
		devoured: (req.query.devoured === '0') ? '1' : '0'
	}, condition, function (data) {
		res.redirect('/');
	});
});



// Export router for server.js to use
module.exports = router;