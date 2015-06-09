var path = require("path")
  , webpack = require("webpack")
  , ExtractTextPlugin = require("extract-text-webpack-plugin")
  , pkg = require("./package.json");

function makeConfig(options) {
  var entry = options.entry
    , plugins = options.plugins || []

  var loaders = [
    { test: /\.jsx$|\.js$/, loader: "babel-loader", exclude: /node_modules/ }
  ];

  if (options.hot) {
    loaders.splice(loaders.length - 1,0,
      { test: /\.jsx$|\.js$/, loader: "react-hot-loader", exclude: /node_modules/ })

    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin())

    entry = [
      "webpack-dev-server/client?http://localhost:8080",
      "webpack/hot/only-dev-server",
      entry
    ]
  }

  if (options.loaders)
    loaders = loaders.concat(options.loaders)

  if (options.minimize)
    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        compress: { warnings: false, dead_code: true }
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.NoErrorsPlugin())
  else
    plugins.push(
      new webpack.DefinePlugin({
        "__VERSION__": JSON.stringify(pkg.version)
      }));

  if ( options.production || options.minimize )
    plugins.push(new webpack.DefinePlugin({
        "__VERSION__": JSON.stringify(pkg.version),
        "process.env": { NODE_ENV: JSON.stringify("production") }
      }))

  return {
    cache: true,

    devtool: options.devtool,

    entry: entry,

    output: options.output,

    externals: options.externals,

    resolve: {
      extensions: ["", ".js", ".jsx"]
    },

    module: {
      loaders: loaders
    },

    plugins: plugins,

    node: {
      Buffer: false
    }
  }
}

module.exports = {

  browser: makeConfig({

    banner: true,

    minimize: true,

    entry: "./lib/index.js",

    output: {
      path: path.join(__dirname, "./dist"),
      filename: "react-flags.js",
      library: "ReactFlags",
      libraryTarget: "this"
    },

    externals: {
      react: "React"
    }
  }),

  dev: makeConfig({

    hot: false,
    production: false,

    devtool: "source-map",

    entry: "./dev/dev.jsx",

    output: {
      filename: "bundle.js",
      path: __dirname
    },
  }),
}