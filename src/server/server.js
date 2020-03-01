const path = require("path");
const express = require("express");
const serveFavicon = require("serve-favicon");
const compression = require("compression");
const server = express();
const routes = require("./routes");

// View engine
server.set("view engine", "pug");
server.set("views", path.join(__dirname, "/views"));

// g-zip
server.use(compression());

// Static files
server.use(express.static(path.join(__dirname, "../../public")));

// Favicon
server.use(serveFavicon(path.join(__dirname, "../../public/favicon.ico")));

// Routes
server.use("/", routes);

// Server
module.exports = server;
