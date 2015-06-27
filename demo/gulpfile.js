var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass({includePaths: 'bower_components/'}))
    .pipe(gulp.dest('css'));
});

gulp.task('build', ['sass']);

gulp.task('watch', ['build'], function() {
  gulp.watch('src/**/*', ['build']);
});

gulp.task('default', ['build', 'watch']);
