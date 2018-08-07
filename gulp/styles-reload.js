'use strict';

const util = require('./util');
const browserSync = require('browser-sync');

// exports.dependencies = ['styles'];

exports.task = function () {
	return util.generateStyles()
		.pipe(browserSync.stream());
};
