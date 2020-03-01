const merge = require("webpack-merge");
const base = require("./webpack/webpack.base.config");

module.exports = ({env, mode}) =>
	merge(base, require(`./webpack/${env}`)(mode));
