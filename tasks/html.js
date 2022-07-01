const { src, dest } = require('gulp');
const browserSync = require('browser-sync');

const size = require('gulp-size');
const htmlmin = require('gulp-htmlmin');
var webpHTML = require('gulp-webp-html');

const html = () => {
  return src('./src/index.html')
    .pipe(size({ title: 'html before compressing' }))
    .pipe(webpHTML())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size({ title: 'html after compressing' }))
    .pipe(dest('./dist'))
    .pipe(browserSync.stream());
};

module.exports = html;
