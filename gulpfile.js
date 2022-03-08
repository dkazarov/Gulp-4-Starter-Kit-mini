const { src, dest, watch, series, parallel } = require("gulp");

var browserSync = require("browser-sync").create();

const clear = require("./tasks/clear");
const html = require("./tasks/html");
const scss = require("./tasks/scss");
const css = require("./tasks/css");
const js = require("./tasks/js");
const images = require("./tasks/images");

const server = () => {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });
};

const watcher = () => {
  watch("./src/**/*.html", html).on("all", browserSync.reload);
  watch("./src/css/**/*.css", css).on("all", browserSync.reload);
  watch("./src/scss/*.{scss, sass}", scss).on("all", browserSync.reload);
  watch("./src/js/**/*.js", js).on("all", browserSync.reload);
  watch("./src/images", images).on("all", browserSync.reload);
};

const build = series(
  clear, 
  parallel(html, css, scss, js, images)
);

const dev = series(
  build, 
  parallel(watcher, server)
);

exports.clear = clear;
exports.images = images;
exports.html = html;
exports.css = css;
exports.scss = scss;
exports.js = js;
exports.watch = watcher;

exports.default = dev;
exports.build = build;
exports.dev = dev;
