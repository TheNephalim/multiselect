const gulp = require('gulp');

// include plug-ins
const rename = require('gulp-rename');  
const stripDebug = require('gulp-strip-debug');
const terser = require("gulp-terser");

// JS concat, strip debugging and minify
gulp.task('scripts', function() {
    return gulp.src(['dist/js/multiselect.js'])
        .pipe(rename('multiselect.min.js'))
        .pipe(stripDebug())
        .pipe(new terser())
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('default', gulp.parallel('scripts'));
