var webpack = require("webpack");
var path = require("path");
 
var DEV = path.resolve(__dirname, "dev");
var OUTPUT = path.resolve(__dirname, "output");
 
var config = {
  entry: DEV + "/index.jsx",
  output: {
    path: OUTPUT,
    filename: "code.js"
  },
  module: {
    loaders: [
    {
        include: DEV,
        loader: "babel",
    },
    {
      test: /\.css$/, 
      loader: "style-loader!css-loader"
    }
    ]
  }
};
 
module.exports = config;