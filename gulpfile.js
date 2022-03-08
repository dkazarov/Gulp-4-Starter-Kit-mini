const { src, dest, watch, series, parallel } = require('gulp');

const html = require('./tasks/html');

const watcher = () => {
   watch('./src/**/*.html', html);
}

exports.html = html;
exports.watch = watcher;

exports.dev = series (html, watcher);