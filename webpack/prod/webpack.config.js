const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  app: path.join(__dirname, '../../src'),
  distJS: path.join(__dirname, '../../dist/js'),
  distCSS: path.join('../../dist/css')
};

const clientConfig = {
  context: PATHS.app,
  entry: [
    './main.less',
    './client.js',
    'babel-polyfill'
  ],
  output: {
    path: PATHS.distJS,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new ExtractTextPlugin(path.join(PATHS.distCSS, '/styles.css')),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true
      },
      comments: false,
      sourceMap: false
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          cacheDirectory: false
        },
        include: [
          PATHS.app
        ]
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')
      },
      {
        test: /\.svg/,
        loader: 'svg-url-loader'
      }
    ]
  }
};

module.exports = clientConfig;
