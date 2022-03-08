const { src, dest, watch, series, parallel } = require('gulp');

var browserSync = require('browser-sync').create();

const html = require('./tasks/html');
const clear = require('./tasks/del');

const server = () => {
   browserSync.init({
      server: {
          baseDir: "./dist"
      }
  });
}


const watcher = () => {
   watch('./src/**/*.html', html).on('change', browserSync.reload);
}

exports.html = html;
exports.watch = watcher;
exports.clear = clear;

exports.dev = series (
   clear,
   html, 
   parallel (watcher, server)
);