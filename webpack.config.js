const path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: '.public/js/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['es2015', 'react']
        }
      }
    }]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};