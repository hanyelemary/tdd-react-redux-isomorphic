const path = require('path');
const nodeExternals = require('webpack-node-externals');

const PATHS = {
  server: path.resolve(__dirname, '../../src/server.js'),
  root: path.join(__dirname, '../../')
};

const serverConfig = {
  entry: PATHS.server,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: PATHS.root,
    filename: 'server.bundle.js'
  },
  target: 'node',
  externals: [nodeExternals({
    whitelist: []
  })],

  node: {
    __filename: false,
    __dirname: false
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        query: {
          cacheDirectory: true
        }
      }
    ]
  }
};

module.exports = serverConfig;
