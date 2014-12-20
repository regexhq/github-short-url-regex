/**
 * github-short-url-regex <https://github.com/regexps/github-short-url-regex>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var regexp = require('./index');

describe('github-short-url-regex', function() {
  it('should `options` be optional, exact true by default', function(done) {
    var fixture = 'gh tunnckoCore/npmls#master here';
    var actual = regexp().test(fixture);
    assert.strictEqual(actual, false);
    done();
  });

  describe('should handle `options` - regex.test(str)', function() {
    it('with `flags: \'g\'` only, exact true by default', function(done) {
      var opts = {flags: 'g'};
      var fixture = 'gh tunnckoCore/npmls#master here';
      var actual = regexp(opts).test(fixture);
      assert.strictEqual(actual, false);
      done();
    });

    it('with `flags: \'g\', exact: false`', function(done) {
      var opts = {flags: 'g', exact: false};
      var actual = regexp(opts).test('gh tunnckoCore/npmls#master here');
      assert.strictEqual(actual, true);
      done();
    });

    it('with `flags: \'g\', exact: true`', function(done) {
      var opts = {flags: 'g', exact: true};
      var fixture = 'gh tunnckoCore/npmls#master here';
      var actual = regexp(opts).test(fixture);
      assert.strictEqual(actual, false);
      done();
    });
  });

  describe('should handle `options` - str.match(regex())', function() {
    it('with `flags: \'g\'` only, exact true by default', function(done) {
      var opts = {flags: 'g'};
      var fixture = 'gh tunnckoCore/npmls#master here user/repo#branch yea';
      var actual = fixture.match(regexp(opts));
      assert.strictEqual(actual, null);
      done();
    });

    it('with `flags: \'g\', exact: false` in text', function(done) {
      var opts = {flags: 'g', exact: false};
      var fixture = 'gh tunnckoCore/npmls#test here user/repo#branch yea';
      var actual = fixture.match(regexp(opts));
      assert.deepEqual(actual, ['tunnckoCore/npmls#test', 'user/repo#branch']);
      done();
    });

    it('without flags, `exact: false` in text', function(done) {
      var opts = {exact: false};
      var fixture = 'gh tunnckoCore/npmls#master here user/repo#branch yea';
      var actual = fixture.match(regexp(opts))[0];
      assert.strictEqual(actual, 'tunnckoCore/npmls#master');
      done();
    });

    it('without flags, `exact: true` in text', function(done) {
      var opts = {exact: true};
      var fixture = 'gh tunnckoCore/npmls#master here user/repo#branch yea';
      var actual = fixture.match(regexp(opts));
      assert.strictEqual(actual, null);
      done();
    });

    it('without flags, `exact: true`', function(done) {
      var opts = {exact: true};
      var fixture = 'tunnckoCore/npmls#master';
      var actual = fixture.match(regexp(opts))[0];
      assert.strictEqual(actual, 'tunnckoCore/npmls#master');
      done();
    });
  });
});
