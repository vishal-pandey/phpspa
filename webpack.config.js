var path = require('path');
var webpack = require('webpack');

module.exports = {
	devtool: 'source-map',
	entry: ['./controller/main.ts'],
	output: {
		path: __dirname+'/build',
		filename: 'app.js'
	},
	module:{
		loaders:[{
			test: /\.ts$/,
			include: path.resolve(__dirname, "controller"),
			loader: "ts-loader"
		}]
	},
	resolve: {
		extensions: [".webpack.js", ".ts", ".js"]
	}
}