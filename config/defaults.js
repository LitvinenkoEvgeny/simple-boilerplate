const path = require('path');


const srcPath = path.join(__dirname, '../src');
const publicPath = '/assets/';

const defaultLoaders = [
    {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['env', 'es2015', 'es2016', 'es2017']
            }
        }
    }
];

module.exports = {
    srcPath,
    publicPath,
    defaultLoaders
};