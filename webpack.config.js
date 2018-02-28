const path = require('path');

module.exports = {
  mode: 'development',

  entry: './client/index.js',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
      },
    ],
  },
};

