'use strict';

const path = require('path');
const gulp = require('gulp');
const conf = require('./config');
const $ = require('gulp-load-plugins')();

exports.dependencies = ['scripts', 'styles'];

exports.task = function () {

	const injectStyles = gulp.src([path.join(conf.paths.tmp, '/serve/app/css/main.css')], {read: false});

	const injectScripts = gulp.src([path.join(conf.paths.src, '/js/**/*.js')]).on('error', conf.errorHandler('Inject Scripts'));

	const injectOptions = {
		ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve/app')],
		addRootSlash: false
	};

	return gulp
		.src(path.join(conf.paths.src, '/index.html'))
		.pipe($.inject(injectStyles, injectOptions))
		.pipe($.inject(injectScripts, injectOptions))
		.pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')));
};
