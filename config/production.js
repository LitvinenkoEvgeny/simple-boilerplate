const path = require('path');
const webpack = require('webpack');
const base = require('./base');
const defaults = require('./defaults');
const _ = require('lodash');


const imgLoader = {
    test: /\.(gif|png|jpe?g|svg)$/i,
    loaders: [
        'file-loader?name=[path][name].[hash].[ext]', {
            loader: 'image-webpack-loader?name=[path][name].[hash].[ext]',
            options: {
                gifsicle: {
                    interlaced: false,
                },
                optipng: {
                    optimizationLevel: 7,
                },
                pngquant: {
                    quality: '65-90',
                    speed: 4
                },
                mozjpeg: {
                    progressive: true,
                    quality: 65
                },
                // Specifying webp here will create a WEBP version of your JPG/PNG images
                webp: {
                    quality: 75
                },
            },
        }
    ]
};

const loaders = [
    {...defaults.pugLoader},
    {...defaults.jsLoader},
    {...imgLoader},
    {...defaults.cssLoader},
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
    new webpack.NoEmitOnErrorsPlugin(),
);

module.exports = config;
