var webpack = require("webpack");
var path = require("path");

module.exports = {
  entry: [
    path.resolve("./src/Flag.js")
  ],

  output: {
    filename: "react-flags.js",
    path: path.resolve("./lib"),
    library: "react-flags",
    libraryTarget: "umd"
  },

  module: {
    loaders: [
      {
        test: /\.js$/, loaders: ["react-hot", "babel"],
        include: [path.join(__dirname, "src")]
      },
      // Images.
      {test: /\.(png|ico|icns)$/, loader: "url?limit=8192"},
      // JSON files (Mostly used for languages).
      {test: /\.json$/, loader: "json"},
      {test: /\.json5$/, loader: "json5"},
    ]
  },

  resolve: {
    extensions: ["", ".js"]
  },

  stats: {
    colors: true
  },

  externals: [
    {
      'react': {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ]
};
