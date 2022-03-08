const { src, dest } = require("gulp");

const babel = require("gulp-babel");
const size = require("gulp-size");
const concat = require("gulp-concat");

const js = () => {
  return src("./src/**/*.js", { sourcemaps: true })
    .pipe(concat("main.min.js"))
    .pipe(babel())
    .pipe(size({ title: "JS before compressing" }))
    .pipe(size({ title: "JS after compressing" }))
    .pipe(dest("./dist/js/"));
  //  .pipe(browserSync.stream());
};

module.exports = js;
