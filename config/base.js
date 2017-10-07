const path = require('path');
const defaults = require('./defaults');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, '..', 'dist', 'assets'),
        filename: '[name].[hash].js',
        publicPath: defaults.publicPath
    },

    devServer: {
        contentBase: path.join(__dirname, '..', 'dist'),
        historyApiFallback: true,
        hot: true,
        publicPath: defaults.publicPath
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: '!!pug-loader!src/index.pug',
            filename: '../index.html',
            alwaysWriteToDisk: true
        })
    ]
};
