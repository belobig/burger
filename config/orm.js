var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
	selectAll: function (tableInput, cb) {
		var queryString = "SELECT * FROM ??";
		connection.query(queryString, [tableInput], function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne: function (tableInput, colToSearch, valOfCol, cb) {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(queryString, [tableInput, colToSearch, valOfCol], function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function (updtValue, cb) {
		var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?";
		connection.query(queryString, [updtValue], function (err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;