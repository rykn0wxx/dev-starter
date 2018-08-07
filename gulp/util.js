'use strict';

const path = require('path');
const gulp = require('gulp');
const conf = require('./config');
const $ = require('gulp-load-plugins')();
const browserSync = require('browser-sync');

exports.generateStyles = generateStyles;
exports.browserSyncInit = browserSyncInit;
exports.buildScripts = buildScripts;

function generateStyles () {
	const sassOptions = {
		style: 'expanded',
		indentType: 'tab',
		indentWidth: 1,
		linefeed: 'lf',
		outputStyle: 'expanded',
		omitSourceMapUrl: true
	};

	return gulp
		.src([path.join(conf.paths.src, '/scss/main.scss')])
		.pipe($.sass(sassOptions)).on('error', conf.errorHandler('Sass'))
		.pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
		.pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/css/')));
}

function browserSyncInit (baseDir, webBrowser, siteRoutes) {
	const browser = webBrowser || 'default';
	const routes = siteRoutes || null;
	const server = {
		baseDir: baseDir,
		routes: routes
	};

	browserSync.instance = browserSync.init({
		startPath: '/',
		server: server,
		browser: browser,
		ghostMode: false,
		open: false
	});
}

function buildScripts () {
	return gulp
		.src(path.join(conf.paths.src, '/js/**/*.js'))
		.pipe($.eslint())
		.pipe($.eslint.format());
}
