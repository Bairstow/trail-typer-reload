var path = require('path');

module.exports = {
  entry: {
    app: ['./src/client/app.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/',
    filename: 'client-bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|lib|dist)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'react'],
          plugins: ['emotion'],
        },
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },
};
