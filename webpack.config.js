var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require("path");

module.exports = {
  devtool: "eval",

  entry: [
    "./src/dev.js",
    "webpack-dev-server/client?http://localhost:8080",
    "webpack/hot/only-dev-server"
  ],

  output: {
    filename: "index.js",
    path: path.resolve("./dev")
  },

  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/, loaders: ["react-hot", "babel"],
        include: [path.join(__dirname, "src")]
      }
    ]
  },

  resolve: {
    extensions: ["", ".js"]
  },

  stats: {
    colors: true
  }
};
