/**
 * github-short-url-regex <https://github.com/regexps/github-short-url-regex>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var Suite = require('benchmarked');

var suite = new Suite({
  result: false,
  fixtures: 'fixtures/*.js',
  add: 'code/*.js',
  cwd: __dirname
});

suite.run();
