'use strict';

const NODE_ENV = process.env.NODE_ENV || 0;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

	context: __dirname + '/app',

	entry: {
		main: './main'
	},

	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'main.min.js'
	},

	resolve: {
		extensions: ['', '.js']
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'stage-0'],
					plugins: ['transform-class-properties', 'transform-decorators-legacy']
				}
			}
		]
	},

	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV)
		}),
		new HtmlWebpackPlugin({
			filename: './index.html',
			template: 'index.html'
		})
	]

};

if (NODE_ENV == 0) {
	module.exports.plugins.push(new webpack.OldWatchingPlugin())
}

if (NODE_ENV == 1) {
	module.exports.plugins.push(
		new webpack.optimize.DedupePlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		})
	);
}