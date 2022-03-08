const { src, dest } = require("gulp");

const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
var csso = require("gulp-csso");

const css = () => {
  return src("./src/css/style.css")
    .pipe(autoprefixer({}))
    .pipe(csso())
    .pipe(concat("style.min.css"))
    .pipe(dest("./dist/css/"));
  //  .pipe(browserSync.stream());
};

module.exports = css;
