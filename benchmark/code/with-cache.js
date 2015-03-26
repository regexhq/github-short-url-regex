/**
 * github-short-url-regex <https://github.com/regexps/github-short-url-regex>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var cache = require('regex-cache');
var regexFn = require('../support');

module.exports = function(opts) {
  return cache(regexFn, opts)
  .exec('gulpjs/gulp@v3.8.10 and mochajs/mocha@2.2.1 and tunnckoCore/npmls#master');
};
