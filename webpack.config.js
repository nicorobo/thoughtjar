const webpack = require('webpack');
var config = {
	entry: './src/js/main.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['babel-loader'],
				exclude: /node_modules/,
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(sass|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		]
	}
}

module.exports = config;