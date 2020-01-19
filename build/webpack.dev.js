const Webpack = require('webpack')
const webpackConfig = require('./webpack.config.js')
const WebpackMerge = require('webpack-merge')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = WebpackMerge(webpackConfig,{
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        port: 8001,
        hot: true,
        contentBase: '../dist',
        proxy: [{
            context: [ //代理路径
                '/shopping',
                '/ugc',
                '/v1',
                '/v2',
                '/v3',
                '/v4',
                '/bos',
                '/member',
                '/promotion',
                '/eus',
                '/payapi',
                '/img',
            ],
            target: 'http://cangdu.org:8001',
            changeOrigin: true,
        }]
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new BundleAnalyzerPlugin({
            analyzerHost: '127.0.0.1',
            analyzerPort: 8889
        })
    ]
})