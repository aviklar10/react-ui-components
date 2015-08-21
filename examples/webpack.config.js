var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

function isDirectory(dir) {
	return fs.lstatSync(dir).isDirectory();
}

var config = {
	devtool: 'inline-source-map',
	entry: fs.readdirSync(__dirname).reduce(function (entries, dir) {
		var isDraft = dir.charAt(0) === '_';

		if (!isDraft && isDirectory(path.join(__dirname, dir)))
			entries[dir] = path.join(__dirname, dir, 'main.js');

		return entries;
	}, {}),
	output: {
		path: 'examples/__build__',
		filename: '[name].js',
		chunkFilename: '[id].chunk.js',
		publicPath: '/__build__/'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel'
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		}, {
			test: /\.less$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
		}, {
			test: /\.(png|gif|svg)$/,
			loader: 'url-loader?limit=100000'
		}]
	},
	resolve: {
		alias: {
			'ruc': process.cwd() + '/src'
		}
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin('shared.js'),
		new ExtractTextPlugin("[name].css"),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
		})
	]
};

module.exports = config;