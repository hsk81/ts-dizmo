const pkg = require('../../../package.js');
const gulp = require('gulp');
const gulp_ver = require('gulp-ver');
const gulp_zip = require('gulp-zip');

gulp.task('dizmo', () =>
    gulp.src([`build/${pkg.name}/**/*`], { base: 'build' })
        .pipe(gulp_zip('{0}.dzm'.replace('{0}', pkg.name)))
        .pipe(gulp_ver()).pipe(gulp.dest('build'))
);
