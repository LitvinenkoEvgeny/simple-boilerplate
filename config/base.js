const path = require('path');
const defaults = require('./defaults');

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
    }
};
