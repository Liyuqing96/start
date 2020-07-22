const Webpack = require('webpack')
const path = require('path');
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const vueSSRServer = require('vue-server-renderer/server-plugin')
module.exports = WebpackMerge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    server: path.resolve(__dirname, "../src/server.js"),
  },
  target: 'node',
  output: {
    libraryTarget: 'commonjs2',
  },

  plugins: [
    new vueSSRServer(),
    new Webpack.HotModuleReplacementPlugin(),
  ]
})