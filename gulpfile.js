const { src, dest, watch, series, parallel } = require('gulp');

var browserSync = require('browser-sync').create();

const clear = require('./tasks/clear');
const html = require('./tasks/html');

const server = () => {
   browserSync.init({
      server: {
          baseDir: "./dist"
      }
  });
}

const watcher = () => {
   watch('./src/**/*.html', html).on('all', browserSync.reload);
   watch('./src/css/**/*.css', css).on('all', browserSync.reload);
}

exports.html = html;
exports.css = css;
exports.watch = watcher;
exports.clear = clear;

exports.dev = series (
   clear,
   parallel(html, css),
   parallel (watcher, server)
);