const path = require('path');

module.exports = {
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

        options: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  entry: path.resolve(__dirname, 'src'),
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  mode: 'development'
};
