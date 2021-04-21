/** @format */

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'example/index.tsx'),
    output: {
        publicPath: '/',
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        libraryTarget: 'system',
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                // pre/nomal/post - loader的执行顺序 - 前/中/后
                enforce: 'pre',
                test: /\.tsx?/,
                loader: 'source-map-loader',
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpg|gif|mp4)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 20,
                    },
                },
            },
        ],
    },
    //映射工具
    // devtool: 'source-map',
    //处理路径解析
    resolve: {
        //extensions 拓展名
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, './example/index.html'),
            filename: './index.html',
            inject: false,
        }),
        // new webpack.ProvidePlugin({
        //     'window.System': 'System',
        // }),
    ],
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
    devServer: {
        port: 3005,
        open: true,
        publicPath: '/',
    },
}
