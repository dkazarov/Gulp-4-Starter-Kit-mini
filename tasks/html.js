const { src, dest } = require('gulp')

const htmlmin = require('gulp-htmlmin');

const html = () => {
   return src('./src/index.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(dest('./dist'))   
}

module.exports = html;