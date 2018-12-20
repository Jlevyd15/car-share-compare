const path = require('path')
const webpack = require('webpack')

module.exports = {
	target: 'node',
	entry: {
		app: path.resolve(__dirname, '../app.js')
	},
	mode: 'development',
	module: {
		rules: [ 
			{ 
				test: /\.(js|jsx)$/, 
				exclude: /node_modules/, 
				use: [
					{ loader: 'babel-loader' }, 
					{ 
						loader: 'eslint-loader', 
						options: {
							quiet: true,
							failOnError: true,
							formatter: require('eslint-formatter-pretty')
						} 
					}
				]
			}
		],
	},
	// plugins: [
	// 	new webpack.HotModuleReplacementPlugin(),
	// ],
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/'
	},
	resolve: { extensions: ['.js', '.jsx'] }
}