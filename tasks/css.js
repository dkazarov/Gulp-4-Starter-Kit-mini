const { src, dest } = require("gulp");

const concat = require("gulp-concat");

const css = () => {
  return src("./src/css/style.css")
    .pipe(concat("style.min.css"))
    .pipe(dest("./dist/css/"));
  //  .pipe(browserSync.stream());
};

module.exports = css;
