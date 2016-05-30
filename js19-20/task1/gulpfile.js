'use strict'

const gulp = require('gulp');
const sass = require('gulp-sass');
const notify = require("gulp-notify");
const concatCss = require('gulp-concat-css');
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglifyjs');
const sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
    return gulp.src('src/scss/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('src/css'))
        .pipe(notify("SASS - OK"));
});

gulp.task('css', function () {
    return gulp.src('src/css/*.css')
        .pipe(concatCss("main.css"))
        .pipe(gulp.dest('dist/css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('main.min.css'))
        .pipe(gulp.dest('dist/css'))
        .pipe(notify("CSS - OK"));
});

gulp.task('img', function () {
    return gulp.src('src/img/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('dist/img'))
        .pipe(notify("ImageMin - OK"));
});


gulp.task('js', function() {
    return gulp.src('src/js/*.js')
        .pipe(uglify('script.min.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(notify("JS - OK"));
});

gulp.task('default',[ 'sass', 'css', 'img', 'js']);