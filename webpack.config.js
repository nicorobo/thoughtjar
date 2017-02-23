const webpack = require('webpack');
var config = {
	entry: './src/js/main.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/src',
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				use: ['babel-loader'],
				include: __dirname + '/src/js',
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