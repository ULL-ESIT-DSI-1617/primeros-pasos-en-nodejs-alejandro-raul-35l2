const gulp = require('gulp');
const ghPages = require('gulp-gh-pages');
const shell = require('gulp-shell');

gulp.task('serve',  function() {
  return gulp.src('').pipe(shell([
    'node serve.js'
  ]));
});

gulp.task('build', shell.task([
  'npm run build'
]));

gulp.task('deploy', shell.task([
  'npm run deploy'
]));

