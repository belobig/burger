var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
	selectAll: function (tableInput) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [tableInput], function (err, result) {
			if (err) throw err;
			console.log(result);
			console.log('---');
		});
	},
	insertOne: function (tableInput, colToSearch, valOfCol) {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
			if (err)throw err;
			console.log(result);
			console.log("---");
		});
	},
	updateOne: function (updtValue) {
		var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?";
		connection.query(queryString, [updtValue], function(err, result) {
			if (err) throw err;
			console.log(result);
			console.log("---");
		});
	}
};

module.exports = orm;