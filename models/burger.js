var orm = require("../config/orm.js");

var burger = {
	all: function (cb) {
		orm.selectAll("burgers", function (res) {
			cb(res);
		});
	},
	create: function (cb) {
		orm.insertOne("burgers", "burger_name", "Holy Burger", function (res) {
			cb(res);
		});
	},
	update: function (cb) {
		orm.updateOne(3, function (res) {
			cb(res);
		});
	}
}


// Need to export something here
module.exports = burger;