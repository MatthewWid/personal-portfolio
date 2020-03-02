const path = require("path");
const nodeExternals = require("webpack-node-externals");

const BASEDIR = path.resolve(__dirname, "../", "../");

const config = {
	target: "node",
	mode: "development",
	entry: path.join(BASEDIR, "./src/server/start.ts"),
	output: {
		path: path.join(BASEDIR, "./build-server"),
		filename: "server.node.js",
	},
	externals: [nodeExternals()],
	node: {
		__dirname: true,
	},
};

module.exports = config;
