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
  resolve: {
    alias: {
      Components: path.resolve(__dirname, 'src/client/Components/'),
      Containers: path.resolve(__dirname, 'src/client/Containers/'),
    },
  },
  devtool: 'eval',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
  },
};
