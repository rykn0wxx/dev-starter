'use strict';

const path = require('path');
const gulp = require('gulp');
const conf = require('./config');
const browserSync = require('browser-sync');

exports.dependencies = ['inject'];

exports.task = function () {

	gulp.watch([path.join(conf.paths.src, '/*.html')], ['inject-reload']);

	gulp.watch([
		path.join(conf.paths.src, '/scss/**/*.css'),
		path.join(conf.paths.src, '/scss/**/*.scss')
	], function(event) {
		if(isOnlyChange(event)) {
			gulp.start('styles-reload');
		} else {
			gulp.start('inject-reload');
		}
	});

	gulp.watch(path.join(conf.paths.src, '/js/**/*.js'), function(event) {
    if(isOnlyChange(event)) {
      gulp.start('scripts-reload');
    } else {
      gulp.start('inject-reload');
    }
  });

	gulp.watch(path.join(conf.paths.src, '/**/*.html'), function(event) {
    browserSync.reload(event.path);
  });

	function isOnlyChange(event) {
		return event.type === 'changed';
	}

};
