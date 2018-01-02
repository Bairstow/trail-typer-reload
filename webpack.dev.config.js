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
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-0', 'react'],
          plugins: ['emotion'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },
  resolve: {
    alias: {
      dux: path.resolve(__dirname, 'src/client/dux/'),
      Components: path.resolve(__dirname, 'src/client/Components/'),
      Containers: path.resolve(__dirname, 'src/client/Containers/'),
      constants: path.resolve(__dirname, 'src/client/constants/'),
    },
  },
  devtool: 'eval',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
  },
};
