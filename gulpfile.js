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
}

exports.html = html;
exports.watch = watcher;
exports.clear = clear;

exports.dev = series (
   clear,
   html, 
   parallel (watcher, server)
);