'use strict';

const path = require('path');
const conf = require('./config');
const util = require('./util');

exports.dependencies = ['watch'];

exports.task = function () {
	util.browserSyncInit([path.join(conf.paths.tmp, '/serve/app'), conf.paths.src]);
};
