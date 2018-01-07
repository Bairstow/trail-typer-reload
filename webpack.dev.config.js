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
      config: path.resolve(__dirname, 'src/client/config/'),
      Containers: path.resolve(__dirname, 'src/client/Containers/'),
      constants: path.resolve(__dirname, 'src/client/constants/'),
      utilities: path.resolve(__dirname, 'src/client/utilities/'),
    },
  },
  devtool: 'eval',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    historyApiFallback: true,
  },
};
