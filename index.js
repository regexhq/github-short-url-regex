/**
 * github-short-url-regex <https://github.com/regexps/github-short-url-regex>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

/**
 * Convert github shorthand url (user/repo#branch) to object
 *
 * @param  {Object} `options`
 * @return {RegExp}
 * @api public
 */
module.exports = function githubShortUrlRegex(options) {
  options = options || {};
  var regex = '([\\w-_]+)\\/([\\w-_.]+)#?([\\w-_.]+)?';

  regex = options.exact === false ? regex : '^'+regex+'$'

  return new RegExp(regex, options.flags)
};
