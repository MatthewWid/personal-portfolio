require("dotenv").config({
	path: "variables.env"
});

const path = require("path");
const express = require("express");
const serve_favicon = require("serve-favicon");
const app = express();
const routes = require("./routes/index");

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

// Set static file directory serving to ../public/
app.use(express.static(path.join(__dirname, "../public")));

// Favicon
app.use(serve_favicon(path.join(__dirname, "../public/favicon.ico")));

// Set up router that acts on requests to root ('/') and below
app.use("/", routes);
app.set("port", process.env.PORT || 80);
const server = app.listen(app.get("port"), () => {
	console.info(`Now listening on PORT ${app.get("port")}.`);
});
