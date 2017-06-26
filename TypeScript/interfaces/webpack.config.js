const webpack = require('webpack');

module.exports = {
  entry: {
    car:'./src/car.ts',
    helicopter: './src/helicopter.ts',
    flyingCar: './src/flyingCar.ts'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [ 
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  }
}