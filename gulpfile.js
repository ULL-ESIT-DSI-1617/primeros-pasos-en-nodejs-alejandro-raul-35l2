const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');
const shell = require('gulp-shell');

gulp.task('deploy', function() {
  return gulp.src('./gh-pages/**/*')
    .pipe(ghPages())
});

gulp.task('serve', shell.task([
  'gitbook serve --port ' + process.env.PORT
]));

gulp.task('build', shell.task([
  'gitbook build ./txt gh-pages'
]));
