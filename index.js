/**
 * github-short-url-regex <https://github.com/regexps/github-short-url-regex>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var cache = require('regex-cache');

/**
 * Find github shorthand url (user/repo#branch)
 *
 * @param  {Object} `options`
 * @return {RegExp}
 * @api public
 */
module.exports = function githubShortUrlRegex(options) {
  options = options || {};
  var regex = '([-_\\w]+)\\/([-_.\\w]+)(?:#|@)?([-_.\\w]+)?';

  regex = options.exact === false ? regex : '^' + regex + '$';

  return cache(function _regexCache() {
    return new RegExp(regex, options.flags);
  }, options);
};
