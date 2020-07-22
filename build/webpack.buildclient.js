const Webpack = require('webpack')
const path = require('path');
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const vueSSRClient = require('vue-server-renderer/client-plugin')
module.exports = WebpackMerge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    client: path.resolve(__dirname, "../src/client.js"),
  },

  plugins: [
    new vueSSRClient(),
    new Webpack.HotModuleReplacementPlugin(),
  ]
})