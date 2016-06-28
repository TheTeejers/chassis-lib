'use strict'

var test = require('tape')

/**
 * ======= NOTICE =======
 * When adding a regression test, document the issue # (required)
 * where it can be referenced and (optionally) a super short synopsis.
 *
 * For example:
 *
 * // @issue 137
 * // Adding values fails.
 *
 * You can learn more about the tap/tape testing syntax
 * at https://www.npmjs.com/package/tape
 */

test('Regressions', function (t) {
  // @issue 11
  // https://github.com/ngnjs/chassis-lib/issues/11
  // NGN.NET.run should not throw an error
  t.doesNotThrow(function () {
    NGN.NET.run('GET', 'http://localhost', function () {})
  })
  t.end()
})
