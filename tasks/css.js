const { src, dest } = require("gulp");



const css = () => {
  return src("./src/index.html")
   
    .pipe(dest("./dist"));
  //  .pipe(browserSync.stream());
};

module.exports = css;
