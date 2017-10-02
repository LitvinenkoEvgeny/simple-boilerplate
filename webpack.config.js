const webpack = require('webpack');
const path = require('path');
const devConfig = require('./config/dev');

const NODE_ENV = JSON.stringify(process.env.NODE_ENV);
const isDevelopment = NODE_ENV === 'development';

module.exports = devConfig;
