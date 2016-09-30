var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/public');
var APP_DIR = path.resolve(__dirname, 'client/app');

var config = {
  entry: APP_DIR + '/index.jsx',
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
		  }
	  ]
  }
};

module.exports = config;