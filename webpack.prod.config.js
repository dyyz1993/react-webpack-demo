/** @format */

const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
        path: path.join(__dirname, 'build'),
        libraryTarget: 'amd',
        filename: 'index.js',
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
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
    //映射工具
    // devtool: 'source-map',
    //处理路径解析
    resolve: {
        //extensions 拓展名
        extensions: ['.tsx', '.ts', '.js', '.jsx', '.json'],
    },
}
