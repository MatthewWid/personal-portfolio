const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FixStyleOnlyEntirePlugin = require("webpack-fix-style-only-entries");
const TerserPlugin = require("terser-webpack-plugin");

const BASEDIR = path.resolve(__dirname, "../", "../");

const config = {
	target: "web",
	entry: {
		"js/index": path.join(BASEDIR, "./src/client/ts/index.ts"),
		"css/index": path.join(BASEDIR, "./src/client/scss/index.scss"),
	},
	output: {
		path: path.join(BASEDIR, "./public/"),
		publicPath: "/",
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new FixStyleOnlyEntirePlugin({
			silent: true,
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
			chunkFilename: "[id].css",
		}),
	],
	optimization: {
		minimizer: [new TerserPlugin()],
		splitChunks: {
			automaticNameDelimiter: "-",
			chunks: "all",
		},
	},
};

module.exports = config;
