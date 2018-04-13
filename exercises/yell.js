'use strict'

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

let yell = (n) => { return n.toUpperCase() }

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell('louis'), 'LOUIS')
assert.strictEqual(yell('salut les geeks'), 'SALUT LES GEEKS')
// End of tests */
