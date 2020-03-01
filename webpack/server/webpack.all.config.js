const path = require("path");
const nodeExternals = require("webpack-node-externals");

const BASEDIR = path.resolve(__dirname, "../", "../");

const config = {
	mode: "development",
	entry: path.join(BASEDIR, "./src/server/start.js"),
	output: {
		path: path.join(BASEDIR, "./build-server"),
		filename: "server.node.js",
	},
	target: "node",
	externals: [nodeExternals()],
	node: {
		__dirname: true,
	},
};

module.exports = config;
