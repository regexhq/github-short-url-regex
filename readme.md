[![npm version][npmjs-img]][npmjs-url]
[![mit license][license-img]][license-url]
[![build status][travis-img]][travis-url]
[![coverage status][coveralls-img]][coveralls-url]

> Regex for converting github shorthand url (user/repo#branch) to object

## Install
```bash
$ npm install github-short-url-regex
$ npm test
```


## [.githubShortUrlRegex](index.js#L17)
> Convert github shorthand url (user/repo#branch) to object

* `[options]` **{Object}**
  - `flags` **{String}** every valid RegExp flag, default `undefined`
  - `exact` **{Boolean}**
* `return` **{RegExp}**


## Usage
> For more use-cases see the [tests](./test.js)

```js
var regex = require('github-short-url-regex');

regex().test('gh tunnckoCore/npmls#master here');
//=> false

regex({flags: 'g'}).test('gh tunnckoCore/npmls#master here');
//=> false

regex({flags: 'g', exact: false}).test('gh tunnckoCore/npmls#master here');
//=> true

regex({flags: 'g', exact: true}).test('gh tunnckoCore/npmls#master here');
//=> false

'gh tunnckoCore/npmls#test here user/repo#branch yea'.match(regex({flags: 'g'}));
//=> null

'gh tunnckoCore/npmls#test here user/repo#branch yea'.match(regex({flags: 'g', exact: false}));
//=> ['tunnckoCore/npmls#test', 'user/repo#branch']

'gh tunnckoCore/npmls#test here user/repo#branch yea'.match(regex({exact: false}))[0];
//=> 'tunnckoCore/npmls#test'

'gh tunnckoCore/npmls#test here user/repo#branch yea'.match(regex({exact: true}));
//=> null

'tunnckoCore/npmls#test'.match(regex({exact: true}))[0];
//=> 'tunnckoCore/npmls#test'
```


## Author
**Charlike Mike Reagent**
+ [gratipay/tunnckoCore][author-gratipay]
+ [twitter/tunnckoCore][author-twitter]
+ [github/tunnckoCore][author-github]
+ [npmjs/tunnckoCore][author-npmjs]
+ [more ...][contrib-more]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][contrib-more], [contributors][contrib-graf].  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/github-short-url-regex
[npmjs-img]: https://img.shields.io/npm/v/github-short-url-regex.svg?style=flat&label=github-short-url-regex

[coveralls-url]: https://coveralls.io/r/regexps/github-short-url-regex?branch=master
[coveralls-img]: https://img.shields.io/coveralls/regexps/github-short-url-regex.svg?style=flat

[license-url]: https://github.com/regexps/github-short-url-regex/blob/master/license.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat

[travis-url]: https://travis-ci.org/regexps/github-short-url-regex
[travis-img]: https://img.shields.io/travis/regexps/github-short-url-regex.svg?style=flat

[daviddm-url]: https://david-dm.org/regexps/github-short-url-regex
[daviddm-img]: https://img.shields.io/david/regexps/github-short-url-regex.svg?style=flat

[author-gratipay]: https://gratipay.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-npmjs]: https://npmjs.org/~tunnckocore

[contrib-more]: http://j.mp/1stW47C
[contrib-graf]: https://github.com/regexps/github-short-url-regex/graphs/contributors

***

_Powered and automated by [readdirp + hogan.js](https://github.com/tunnckoCore), December 20, 2014_