const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const glob_entries = require('webpack-glob-entries');
const values = require('object.values');

let entryPaths = values(glob_entries('./lib/css/**/*.css'));
entryPaths = entryPaths.concat([
    'babel-polyfill',
    './index.jsx',
]);

module.exports = {
    entry: entryPaths,
    devServer: {
        port: 8080,
        historyApiFallback: true,
    },
    output: {
        filename: 'bundle.js',
        publicPath: '',
    },
    module: {
        loaders: [
            {
                test: /\.(css|scss)$/,
                include: __dirname,
                loader: ExtractTextPlugin.extract('style-loader', [ 'css-loader?modules&importLoaders=1&camelCase=true&localIdentName=[local]', 'sass-loader' ]),
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel',
                include: __dirname,
            },
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: 'json-loader',
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new Dotenv({ safe: true }),
    ],
    resolve: {
        root: path.resolve(__dirname),
        alias: {
            components: 'lib/components',
        },
        extensions: [
            '',
            '.js',
            '.jsx',
        ],
        modules: [ path.resolve('./node_modules') ],
    },
};
