var gulp = require('gulp');
var replace = require('gulp-replace');
var sass = require('gulp-sass');
var fs = require('fs');

gulp.task('script', [], function () {
    var awesomeBurgerHtml = fs.readFileSync('src/awesome-burger.html', "utf8")
      .replace(/(?:\r\n|\r|\n)/g, '');

    return gulp.src(['src/js/awesome-burger.js'])
     .pipe(replace('%AWESOME_BURGER_HTML%', awesomeBurgerHtml))
     .pipe(gulp.dest("dist"));
});

gulp.task('sass', function () {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ['script', 'sass']);

gulp.task('watch', [], function() {
  gulp.watch('src/**/*', ['build']);
});

gulp.task('default', ['build', 'watch']);
