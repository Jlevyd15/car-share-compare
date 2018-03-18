const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
// TODO - use extract-text-plugin to seperate css for production builds

module.exports = {
	entry: {
		cScMain: path.resolve(__dirname, '../frontend/src/index.js')
	},
	devServer: {
		contentBase: path.resolve(__dirname, '../frontend/dist'),
		hot: true
	},
	mode: 'development',
	module: {
		rules: [ 
			{ test: /\.(js|jsx)$/, exclude: /node_modules/, use: 'babel-loader' },
			{
				test: /\.css$/,
				use: [
					{ loader: 'style-loader' },
					{ 
						loader: 'css-loader', 
						options: {
							modules: true,
							localIdentName: '[path][name]__[local]--[hash:base64:5]'
						}
					},
				]
			},
			{ test: /\.(png|jpg|gif)$/, use: [{ loader: 'file-loader', options: {} }] },
			{ 
				test: /\.(js|jsx)$/, 
				exclude: /node_modules/,
				loader: 'eslint-loader',
				options: {
					failOnError: true,
				}
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(['dist']), // this cleans up the dist folder for each build
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../frontend/src/index.html'),
			filename: 'index.html',
			inject: 'body'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
}