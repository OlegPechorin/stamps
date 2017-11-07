const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.jsx'],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  devServer: {
    inline: true,
    contentBase: './public',
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.scss?$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: ['url-loader']
      }
    ]
  },

  devtool: 'eval-source-map',

  resolve: {
    extensions: ['.js', '.jsx', '.json', '*']
  }
};
