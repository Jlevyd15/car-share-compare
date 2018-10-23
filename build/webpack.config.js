const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const env = process.env.NODE_ENV
module.exports = {
	entry: {
		cScMain: ['@babel/polyfill', path.resolve(__dirname, '../frontend/src/index.js')]
	},
	devServer: {
		contentBase: path.resolve(__dirname, '../frontend/dist'),
		hot: true,
		overlay: true,
		historyApiFallback: true
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
			},
			env === 'production' ? {
				test: /\.(css|less)$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: '[path][name]__[local]--[hash:base64:5]'
							}
						},
						{ loader: 'less-loader' }
					]
				})
			} : // in development mode we don't want to extract the css because we lose hmr
				{
					test: /\.(css|less)$/,
					use: [
						{ loader: 'style-loader' },
						{
							loader: 'css-loader',
							options: {
								modules: true,
								localIdentName: '[path][name]__[local]--[hash:base64:5]'
							}
						},
						{ loader: 'less-loader' }
					]
				},
			// TODO - add additional config object for global css
			// TODO - add autoprefixer
			// TODO - add loader for sass/less
			{ test: /\.(png|jpg|gif|svg)$/, use: [{ loader: 'file-loader', options: {} }] },
		],
	},
	plugins: [
		// new CleanWebpackPlugin(['dist']), // this cleans up the dist folder for each build
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../frontend/src/index.html'),
			filename: 'index.html',
			inject: 'body'
		}),
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin('stylesheets/style.bundle.css')
	],
	output: {
		filename: 'javascripts/[name].bundle.js',
		path: path.resolve(__dirname, '../server/public'),
		publicPath: '/'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.less']
	}
}