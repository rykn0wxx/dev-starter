'use strict';

const path = require('path');
const gulp = require('gulp');
const conf = require('./config');
const $ = require('gulp-load-plugins')();

gulp.task('useref', function () {
	return gulp.src(path.join(conf.paths.tmp, '/serve/app/*.html'))
		.pipe($.useref())
		.pipe($.gulpIf('*.js', $.uglify()))
		.pipe($.gulpIf('*.css', $.cssnano()))
		.pipe(gulp.dest(conf.paths.dist));
});
