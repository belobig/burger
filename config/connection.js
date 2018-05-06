var mysql = require("mysql");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku

require("dotenv").config();

var connection;

// var connection = mysql.createConnection({
// 	host: "localhost",
// 	user: "root",
// 	password: "Livinin1",
// 	database: "burgers_db"
// });

if(process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
	connection = mysql.createConnection({
			host: "localhost",
			user: "root",
			password: process.env.PASSWORD,
			database: "burgers_db"
		});
}

connection.connect(function (err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;