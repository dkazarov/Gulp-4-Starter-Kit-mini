const { src, dest } = require('gulp')

const html = () => {
   return src('./src/index.html')
      .pipe(dest('./dist'))   
}

exports.html = html;