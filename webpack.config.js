const path = require('path'),
  webpack = require('webpack');

module.exports = {
  entry: './server.js',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.bundle.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          query: { presets: ['react', 'es2015', 'stage-1'] }
        }
      },
    stats: { colors: true },
    devtool: 'source-map'
};