var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
    imagemin = require('gulp-imagemin'),
	uglifyjs = require('gulp-uglifyjs');



gulp.task('concatCss', function() {
  return gulp.src('css/*.css')
    .pipe(concatCss('style.min.css'))
    .pipe(gulp.dest('dist/css'));
});

gulp.task('imagemin', function() {
	 gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'));
});

gulp.task('uglifyjs', function() {
  gulp.src('js/*.js')
    .pipe(uglifyjs('script.min.js'))
    .pipe(gulp.dest('dist/js'));
});


gulp.task('default',[ 'concatCss', 'imagemin', 'uglifyjs']);
