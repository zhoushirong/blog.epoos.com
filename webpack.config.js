'use strict';

let webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

let config = {
  context: path.join(__dirname, './'),
  output: {
    path: path.resolve(__dirname, "./publish"),
    filename: "/staticPub/js/[name].entry.js"
  },

  //devtool: false,
  plugins: [
    new CopyWebpackPlugin([
    {
      from: path.resolve(__dirname, './'),
      to: path.resolve(__dirname, './publish'),
    },
    {

    }],{
      ignore: [
        'admin/*',
        'logs/*',
        'node_modules/**/*',
        'shell/*',
        'static/**/*',
        'public/**/*',
        'test/**/*',
        'publish/**/*',
        '.babelrc',
        '.editorconfig',
        '.gitignore',
        'README.md',
      ]
    }),
  ]
};


module.exports = config;