var gulp = require('gulp');
gulp.task('pranie', function(done) {
    console.log('robię pranie');
    done();
});

var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('sass', function() {
  return gulp.src('scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
});
gulp.task('watch', function(){
  return gulp.watch('scss/**/*.scss', gulp.series("sass"));
});
