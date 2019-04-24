require("dotenv").config({
	path: "variables.env"
});

const path = require("path");
const express = require("express");
const serve_favicon = require("serve-favicon");
const app = express();
const routes = require("./routes/index");

// Pug view engine setup
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

// Set static file directory serving to ../public/
app.use(express.static(path.join(__dirname, "../public")));

// Favicon
app.use(serve_favicon(path.join(__dirname, "../public/favicon.ico")));

// Routes
app.use("/", routes);

// Set port to listen on
app.set("port", process.env.PORT || 80);

// Start server
const server = app.listen(app.get("port"), () => console.info(`Express server listening on PORT ${app.get("port")}. (${server.address().address})`));
