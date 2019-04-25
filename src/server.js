require("dotenv").config({
	path: "variables.env"
});

const path = require("path");
const express = require("express");
const serve_favicon = require("serve-favicon");
const app = express();
const routes = require("./routes/index");

// View engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "/views"));

// Static files
app.use(express.static(path.join(__dirname, "../public")));

// Favicon
app.use(serve_favicon(path.join(__dirname, "../public/favicon.ico")));

// Routes
app.use("/", routes);

// Port
app.set("port", process.env.PORT || 80);

// Server
const server = app.listen(app.get("port"), () => console.info(`Express server listening on PORT ${app.get("port")}. (${server.address().address})`));
