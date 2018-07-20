const htmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports={
entry: "./src/index.js",
output: {
  path: __dirname+"/dist",
  filename: "bundle.js"
},

module: {
  rules: [
    {
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: '/node_modules/'
    },{
      test: /\.scss$/,
       use: ['sass-loader'],
       exclude: '/node_modules/'
    },{
      test: /\.css$/,
       use: [{loader:'style-loader'},{loader:'css-loader'}]

    }

  ]
},
plugins: [
        new htmlWebpackPlugin({ template:__dirname + './index.html' })
    ],
    watch: true,
devtool: 'source-map'
}
