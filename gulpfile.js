const { src, dest, watch, series, parallel } = require('gulp');

var browserSync = require('browser-sync').create();

const html = require('./tasks/html');

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

exports.dev = series (
   html, 
   parallel (watcher, server)
);