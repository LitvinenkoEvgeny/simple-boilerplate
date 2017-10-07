const path = require('path');
const webpack = require('webpack');
const base = require('./base');
const defaults = require('./defaults');

const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const loaders = [
    {...defaults.pugLoader},
    {...defaults.jsLoader},
    {...defaults.cssLoader},
    {...defaults.imgLoader},
    {...defaults.fontLoader},
    {...defaults.videoLoader},
];

const config = Object.assign(base, {
    entry: {
        bundle: './index.js'
        // vendor: [/* write here all your vendor libs */]
    },
    context: path.join(__dirname, '..', 'src'),

    devtool: 'source-map',


    module: { rules: [...loaders]}
});

config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackHarddiskPlugin()
);

module.exports = config;