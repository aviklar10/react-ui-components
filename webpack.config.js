var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
	entry: {
		app: path.resolve(__dirname, 'src/main.jsx')
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'react-ui-components.js',
		library: 'RUC',
		libraryTarget: 'umd'
	},
	externals: {
		react: {
			root: 'React',
			commonjs: 'react',
			commonjs2: 'react',
			amd: 'react'
		},
		'fixed-data-table': {
			root: 'FixedDataTable',
			commonjs: 'fixed-data-table',
			commonjs2: 'fixed-data-table',
			amd: 'fixedDataTable'
		}
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: [node_modules_dir],
			loader: 'babel' // "babel" is short for "babel-loader"
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		}, {
			test: /\.less$/,
			loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
		},{
			test: /\.(png|gif|svg)$/,
			loader: 'url-loader?limit=100000'
		}]
	},
	plugins: [
		new ExtractTextPlugin("react-ui-components.css")
	]
};

module.exports = config;