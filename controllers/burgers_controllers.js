const express = require("express");
var app = express();
const burgers = require("../models/burger.js");

var router = express.Router();

router.get("/", function (req, res) {
	burgers.all(function (data) {
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});


module.exports = router;