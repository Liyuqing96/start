const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
const devMode = process.argv.indexOf('--mode=production') === -1;
module.exports = {
    // entry: path.resolve(__dirname, '../src/main.js'),
    entry: {
        main: path.resolve(__dirname, '../src/main.js'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash:8].js',
        chunkFilename: 'js/[name].[hash:8].js'
    },
    module: {
        rules:[
            {
                test:/\.js$/,
                use:{
                  loader:'babel-loader',
                  options:{
                    presets:['@babel/preset-env']
                  }
                },
                exclude:/node_modules/
            },
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        compilerOptions: {
                            preserveWhitespace: false
                        }
                    }
                }],
            },
            {
                test: /\.css$/,
                use:[{
                    loader: devMode ? 'vue-style-loader': MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: "../dist/css",
                        hmr: devMode
                    }
                },'css-loader',{
                    loader: 'postcss-loader',
                    options: {
                        plugins: [require('autoprefixer')]
                    }
                }] //从右向左解析
            },
            {
                test: /\.less$/,
                use:[{
                        loader: devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader
                    }, 'css-loader', 'less-loader',{
                        loader: 'postcss-loader',
                        options: {
                            plugins: [require('autoprefixer')]
                        }
                    }] //从右向左解析
            },
            {
                test: /\.(jpe?g|png|gif)$/i, //图片文件
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10240,
                      fallback: {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[hash:8].[ext]'
                        }
                      }
                    }
                  }
                ]
            },
            {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
            use: [
                {
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    fallback: {
                    loader: 'file-loader',
                    options: {
                        name: 'media/[name].[hash:8].[ext]'
                    }
                    }
                }
                }
            ]
            },
            {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
            use: [
                {
                loader: 'url-loader',
                options: {
                    limit: 10240,
                    fallback: {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[hash:8].[ext]'
                    }
                    }
                }
                }
            ]
            },
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js',
            '@': path.resolve(__dirname, '../src')
        },
        extensions:['*','.js','.json','.vue']
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname,'../public/index.html'),
            // filename: 'index.html',
            // chunks: ['main']
        }),
        new vueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: devMode ? "[name].css" : "[name].[hash].css",
            chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
        }),
    ]
}