const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const BASEDIR = path.resolve(__dirname, "../", "../");

const config = {
	target: "web",
	entry: {
		index: path.join(BASEDIR, "./src/client/js/index.js"),
	},
	output: {
		path: path.join(BASEDIR, "./public/"),
		publicPath: "/static/",
		filename: "js/[name].bundle.js",
	},
	optimization: {
		minimizer: [new TerserPlugin()],
		splitChunks: {
			automaticNameDelimiter: "-",
			chunks: "all",
		},
	},
};

module.exports = config;
