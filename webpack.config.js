/* eslint func-names: 0 */
const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const LodashWebpackPlugin = require('lodash-webpack-plugin');

module.exports = function(env, argv) {
    const isProduction = argv.mode === 'production';

    return {
        entry: './index.tsx',
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'source-map' : 'cheap-module-source-map',
        optimization: {
            minimize: isProduction,
            minimizer: [
                new TerserPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true,
                }),
                new OptimizeCSSAssetsPlugin({}),
            ],
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.ts(x)?$/,
                    include: [path.resolve(__dirname, 'index.tsx'), path.resolve(__dirname, 'src')],
                    loader: 'babel-loader',
                },
                {
                    test: /\.scss$/,
                    loaders: [
                      'style-loader',
                      { loader: 'css-loader', options: { importLoaders: 1 } },
                      { loader: 'postcss-loader', options: { options: {}, } },
                      'sass-loader',
                    ],
                },    {
                    test: /\.(png|jpg)$/,
                    loader: 'url-loader?limit=100000',
                    include: [path.resolve(__dirname, 'src/resources/images')],
                },
            ],
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: './index.html',
                favicon: 'src/resources/favicon/favicon.ico',
            }),
            new MiniCssExtractPlugin(),
            new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
            new Dotenv(),
            new LodashWebpackPlugin(),
            new CopyPlugin([
                { from: 'src/resources/images/', to: 'images/' },
                { from: 'config.js', to: 'config.js' },
            ]),
        ],
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        devServer: {
            historyApiFallback: true,
        },
    };
};
