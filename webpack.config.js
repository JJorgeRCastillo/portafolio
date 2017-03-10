var webpack = require('webpack');
var path = require('path');
var htmlWebPackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'js');
var APP_DIR = path.resolve(__dirname, 'jsx');

var config = {
   entry: APP_DIR + "/App.jsx",
   output: {
      path: BUILD_DIR,
      filename: 'bundle.js'
   },
   module : {
      loaders: [
         { test: /\.jsx?/,
           loader: 'babel-loader',
           exclude: /node_modules/
         },
         { test: /\.html?/,
           loader: 'raw-loader'
         },
         {
           test: /\.css?/,
           loader: ['css-loader', 'style-loader']
         }
      ],
   },
   plugins: [
     new htmlWebPackPlugin({
       template: './index.html'
     }),
     new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('production')
     })
   ],
   devServer: {
      hot: true,
      port: 8008
   }   
};

module.exports = config;