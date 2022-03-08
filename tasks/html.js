const { src, dest } = require("gulp");

const htmlmin = require("gulp-htmlmin");
const size = require('gulp-size');

const html = () => {
  return src("./src/index.html")
    .pipe(size({title: "html before compressing"}))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size({title: "html after compressing"}))
    .pipe(dest("./dist"));
  //  .pipe(browserSync.stream());
};

module.exports = html;
