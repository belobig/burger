var mysql = require("mysql");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku


var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "Livinin1",
	database: "burgers_db"
});

connection.connect(function (err) {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}
	console.log("connected as id " + connection.threadId);
});

// Export connection for ORM to use
module.exports = connection;