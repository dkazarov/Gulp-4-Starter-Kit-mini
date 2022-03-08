const { src, dest } = require("gulp");

const concat = require("gulp-concat");
const autoprefixer = require('gulp-autoprefixer');

const css = () => {
  return src("./src/css/style.css")
    .pipe(autoprefixer({}))
    .pipe(concat("style.min.css"))
    .pipe(dest("./dist/css/"));
  //  .pipe(browserSync.stream());
};

module.exports = css;
