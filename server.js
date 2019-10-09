var express = require("express");

//Port for heroku and local testing
var PORT = process.env.PORT || 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
//this makes routes for everything in public

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});

//Servers.js - sets up port, middleware
//connection.js - makes actualy connections to mysql and port
//orm.js - sets up querys with variables
//models burgers.js - selects table, passes parameters, callback for query
//burgers_controllers - routes, specifies each parameter to make req, and perform res action

//public assets js burgers.js - ajax requests and on click events