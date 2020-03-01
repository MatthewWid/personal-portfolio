const merge = require("webpack-merge");
const common = require("./webpack.common.config");

module.exports = (mode = "prod") =>
	merge(common, require(`./webpack.${mode}.config.js`));
