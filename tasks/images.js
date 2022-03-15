const { src, dest } = require("gulp");

const imagemin = require('gulp-imagemin');

const images = () => {
   return src("./src/images/*",)
     .pipe(dest("./dist/images"))
   //   .pipe(src("./src/images/**/*",))
   //   .pipe(newer('./dist/images/**/*'))
     .pipe(imagemin({ verbose: true }))
     .pipe(dest("./dist/images/"))
   //   .pipe(browserSync.stream());
};

module.exports = images;
