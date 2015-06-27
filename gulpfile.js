var gulp = require('gulp');
var fs = require('fs');
var replace = require('gulp-replace');

gulp.task('insert-burger-template', [], function () {
    var awesomeBurgerHtml = fs.readFileSync('src/awesome-burger.html', "utf8")
    .replace(/(?:\r\n|\r|\n)/g, '');
    return gulp.src(['src/js/awesome-burger.js'])
     .pipe(replace('%AWESOME_BURGER_HTML%', awesomeBurgerHtml))
     .pipe(gulp.dest("dist/js"));
});
