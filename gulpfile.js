const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer')
function buildStyles() {
    return gulp.src('./source/sass/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./build/css'))
}
exports.buildStyles = buildStyles;
exports.watch = function () {
    gulp.watch('./source/sass/**/*.scss', buildStyles);
  };