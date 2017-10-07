const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');


const srcPath = path.join(__dirname, '../src');
const publicPath = 'assets/';

const pugLoader = {
    test: /\.(pug)$/,
    use: {
        loader: 'pug-loader',
    }
};

const jsLoader = {
    test: /\.js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ['env', 'es2015', 'es2016', 'es2017']
        }
    }
};

const cssLoader = {
    test: /\.s(c|a)ss$/,
    use: [{
        loader: "style-loader" // creates style nodes from JS strings
    }, {
        loader: "css-loader" // translates CSS into CommonJS
    }, {
        loader: "postcss-loader"
    },{
        loader: "sass-loader" // compiles Sass to CSS
    }]
};

const imgLoader = {
    test: /\.(png|svg|jpg|gif)$/,
    loader: 'url-loader',
    options: {
        limit: '8192',
        name: '[path][name].[hash].[ext]'
    }
};

const fontLoader = {
    test: /\.(ttf|eot|woff2?)(\?v=[a-z0-9=\.]+)?$/i,
    loader: 'url-loader',
    options: {
        limit: '8192',
        name: '[path][name].[hash].[ext]'
    },

};

const videoLoader = {
    test: /\.(mp4|ogg)$/,
    loader: 'file-loader',
    options: {
        name: '[path][name].[hash].[ext]',
    }
};

module.exports = {
    srcPath,
    publicPath,
    jsLoader,
    pugLoader,
    cssLoader,
    imgLoader,
    fontLoader,
    videoLoader,
};