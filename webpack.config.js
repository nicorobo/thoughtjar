module.exports = {
	entry: {
		bundle: './src/js/main.js',
		sw: './src/sw.js'
	},
	output: {
		filename: '[name].js',
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
				test: /\.(sass|scss)$/,
				use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
			},
		]
	}
}