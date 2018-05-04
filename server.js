const express = require("express");
const bodyParser = require("body-parser");
const router = require("./controllers/burgers_controllers.js");
var PORT = process.env.PORT || 8080;
var app = express();
// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
app.use(express.static('.'));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
	// Log (server-side) when our server has started
	console.log("Server listening on: http://localhost:" + PORT);
});

