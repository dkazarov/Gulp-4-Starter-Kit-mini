const html = () => {
   return src('../index.html')
      .pipe(dest('../dist'));
}

exports.html = html;