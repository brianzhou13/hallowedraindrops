var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client');

var config = {
  entry: APP_DIR + '/routes.js',
  output: {
	  path: BUILD_DIR,
	  filename: 'bundle.js'
  },
  externals: { // these will help enzyme work properly
  	'cheerio': 'window', // importing the cheerio library
  	'react/lib/ExecutionEnvironment': true,
  	'react/lib/ReactContext': true,
  },
  module: {
	  loaders: [
		  {
			test: /\.jsx?/,
			include: APP_DIR,
			loader: 'babel'
		  },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
       loader: 'url-loader?limit=100000' 
      }
	  ]
  }
};

module.exports = config;