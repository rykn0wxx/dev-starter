'use strict';

const util = require('./util');
const browserSync = require('browser-sync');

exports.task = function () {
	return util.buildScripts()
		.pipe(browserSync.stream());
};
