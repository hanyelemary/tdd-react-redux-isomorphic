const path = require('path');

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
          cacheDirectory: false
        }
      }
    ]
  }
};

module.exports = serverConfig;
