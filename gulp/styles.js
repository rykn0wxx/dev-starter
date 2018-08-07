'use strict';

const util = require('./util');

exports.task = function () {
	return util.generateStyles();
};
