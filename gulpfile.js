"use strict";
var gulp    = require("gulp");
var del     = require("del");
var merge   = require("merge-stream");
var webpack = require("webpack");
var release = require("jq-release");
var WebpackServer = require("webpack-dev-server");
var rename = require("gulp-rename");
var babelTransform = require("gulp-babel-helpers");
var plumber = require("gulp-plumber");
var configs = require("./webpack.configs");

gulp.task("dist-clean", function(cb){
  del("./dist/*", cb);
})

gulp.task("lib-clean", function(cb){
  del("./lib/*", cb);
})

gulp.task("lib-assets", [ "lib-clean" ], function(){

  return merge(
    gulp.src("./vendor/flags/flags-iso/**")
      .pipe(gulp.dest("./lib/img/flags"))
  );
})

gulp.task("lib-compile", [ "lib-clean" ], function(){

  return gulp.src(["./src/**/*.js", "./src/**/*.jsx"])
      .pipe(plumber())
      .pipe(babelTransform("./util/babelHelpers.js"))
      .pipe(rename({ extname: ".js" }))
      .pipe(gulp.dest("./lib"));
})

gulp.task("lib", [ "lib-clean", "lib-assets", "lib-compile"])

gulp.task("dist-assets", function(){
  return merge(
    gulp.src("./vendor/flags/flags-iso/**")
      .pipe(gulp.dest("./lib/img/flags"))
  );
})

gulp.task("dist-build", ["lib", "dist-assets"], function(cb) {
  webpack(configs.browser, function(err, stats){
    console.log(stats.toString({ colors: true }))
    cb()
  });
})

gulp.task("test-build", function(cb) {
  del("./_test.bundle.js", function(){
     webpack(configs.test, cb);
  });
})

gulp.task("dev", function(cb) {

  new WebpackServer(webpack(configs.dev), {
    publicPath: "/dev",
    hot: true,
    hotComponent: true,
    stats: { colors: true }
  })
  .listen(8080, "localhost", function (err, result) {
    if (err) return console.log(err);

    console.log("Listening on localhost:8080");
    cb()
  });
})

gulp.task("release", [ "lib", "dist-build"]);

gulp.task("publish", ["release"], release);