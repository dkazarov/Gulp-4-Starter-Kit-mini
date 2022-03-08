const { src, dest, watch, series, parallel } = require("gulp");

var browserSync = require("browser-sync").create();

const clear = require("./tasks/clear");
const html = require("./tasks/html");
const scss = require("./tasks/scss");
const css = require("./tasks/css");
const js = require("./tasks/js");

const server = () => {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
};

const watcher = () => {
  watch("./src/**/*.html",           html).on("all", browserSync.reload);
  watch("./src/css/**/*.css",         css).on("all", browserSync.reload);
  watch("./src/scss/*.{scss, sass}", scss).on("all", browserSync.reload);
  watch("./src/js/**/*.js",            js).on('all', browserSync.reload);
};

exports.clear = clear;
exports.html = html;
exports.css = css;
exports.scss = scss;
exports.js = js;
exports.watch = watcher;

exports.dev = series(
  clear,
  parallel(html, css, scss, js),
  parallel(watcher, server)
);
