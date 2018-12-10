'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const rm = require('rimraf');
const merge = require('webpack-merge');

const distDir = path.join(__dirname, 'dist');//__dirname指webpack.config.js所在的目录
const postCssConfig = {
    loader: 'postcss-loader',
    options: {
        plugins: [
            require('postcss-preset-env')(),
        ],
    },
};
const baseConfig = {
    entry: {
        app: ['@babel/polyfill', './src/index.js'],
    },
    output: {
        path: distDir,
        // filename: '[name]_[hash:5].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
    },
    performance: { //性能
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',//图片的搬运工作
                options: {
                    limit: 1024,
                    // name: 'kfb/hh/imgs/[name]_[hash:5].[ext]',
                },
            },
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            React: 'react', //插件可配置在全局，就不需要每个组件中都引入
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
};

const devConfig = {
    devServer: {
        contentBase: distDir,
        noInfo: true,
        overlay: true,
        historyApiFallback: true,
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

const proConfig = {
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    postCssConfig,
                ],
            },
        ],
    },
    optimization: {
        splitChunks: {
            automaticNameDelimiter: '_',
            chunks: 'all',
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            // filename: '[name]_[hash:5].css',
        }),
        new OptimizeCSSAssetsPlugin(),
    ],
    stats: {
        children: false,
        modules: false,
    },
};


module.exports = env => {
    let webpackConfig = null;
    if (env === 'production') {
        webpackConfig = merge(baseConfig, proConfig);
        rm.sync(path.join(distDir));
    } else {
        webpackConfig = merge(baseConfig, devConfig);
    }
    return webpackConfig;
};