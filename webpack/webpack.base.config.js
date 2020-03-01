const path = require("path");

const BASEDIR = path.resolve(__dirname, "../");

const config = {
	resolve: {
		extensions: [".ts", ".js"],
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					{
						loader: "ts-loader",
						options: {
							configFile: path.join(BASEDIR, "./tsconfig.json"),
						},
					},
				],
			},
		],
	},
};

module.exports = config;
