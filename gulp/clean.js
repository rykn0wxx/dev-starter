'use strict';

const path = require('path');
const gulp = require('gulp');
const del = require('del');
const conf = require('./config');

exports.task = function () {
	return del([path.join(conf.paths.dist, '/'), path.join(conf.paths.tmp, '/')]);
};
