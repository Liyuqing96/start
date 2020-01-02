const Webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = WebpackMerge(webpackConfig,{
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 3000,
        hot: true,
        contentBase: '../dist'
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            analyzerHost: '127.0.0.1',
            analyzerPort: 8889
        })
    ]
})