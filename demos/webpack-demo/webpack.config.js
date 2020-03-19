const path = require('path');

const { stats } = require('./webpack/stats')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env) => ({
  mode: env || 'development',
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    usedExports: true,
    // sideEffects: false
  },
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Web components test',
      template: './src/index.html'
    }),
    //copy assets
    //https://webpack.js.org/plugins/copy-webpack-plugin/
    new CopyWebpackPlugin([
      //copy all files from static dir to root
      //note: when no files folder is not copied!
      './static/',
    ]),
  ],
  /**
   * Webpack dev server setup
   */
  devtool: 'source-map',
  devServer: {
    port: 3000,
    stats: stats,
    compress: true,
    //route rewrites
    historyApiFallback: true,
  },
});