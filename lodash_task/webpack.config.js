var webpack = require('webpack');
var fs = require('fs');
var _ = require('lodash');

module.exports = {
	entry: "./src/app.js",
    output: {
        path: __dirname + '/dist/',
        publicPath: "build/",
        filename: "script.js"
    }
}