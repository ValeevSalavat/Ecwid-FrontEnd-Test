const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  context: path.resolve(__dirname,'src'), 
  mode:'development',
  entry: {
      main:'./js/index.js'
    },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',    
  },
  plugins:[
      new HTMLWebpackPlugin({
          title:'Picture Gallery',
          filename:'./index.html',
          template:'./index.html'
      }),
      new CleanWebpackPlugin(),
      new VueLoaderPlugin()
  ],
  module:{
      rules:[
        {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader",
              "css-loader",
              "sass-loader",
            ],
          },
          {
            test: /\.vue$/,
            use: ['vue-loader']
          },
      ]
  }
};
