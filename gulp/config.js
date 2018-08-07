'use strict';

const gutil = require('gulp-util');

exports.paths = {
	src: 'app',
	dist: 'release',
	tmp: '.tmp'
};

exports.errorHandler = errorHandler;

function errorHandler (title) {
	'use strict';
	return function (err) {
		gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
		this.emit('end');
	}
}
