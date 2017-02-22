var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

var TARGET = process.env.npm_lifecycle_event;
var ROOT_PATH = path.resolve(__dirname);

var common = {
	entry: path.resolve(ROOT_PATH, 'src/entry.js'),
	output: {
		path: path.resolve(ROOT_PATH, 'assets/js/'),
		filename: 'bundle.js',
		publicPath: 'js/'
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loaders: ['style-loader', 'css-loader', 'sass-loader'],
				exclude: /node_modules/
			}
		]
	},
    plugins: [
    	new HtmlwebpackPlugin({
    		template: path.resolve(ROOT_PATH, 'src/templates/index.html'),
    		filename: path.resolve(__dirname, 'views/homepage.ejs'),
    		inject: 'body'
    	})
    ]

}

if(TARGET === 'dev' || !TARGET) {
	module.exports = merge(common, {
		devtool: "#source-map",
    watch: true,
		module: {
			loaders: [
				{
					test: /\.js$/,
					loader: 'babel-loader',
					exclude: /node_modules/,
					query: {
						presets: ['react', 'es2015']
					}
				}
			]
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin()
		]
	});
}
