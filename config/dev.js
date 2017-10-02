const path = require('path');
const webpack = require('webpack');
const base = require('./base');
const defaults = require('./defaults');


const config = Object.assign(base, {
    entry: {
        bundle: './src/index'
        // vendor: [/* write here all your vendor libs */]
    },

    devtool: 'source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
    ],

    module: { rules: [...defaults.defaultLoaders]}
});

module.exports = config;