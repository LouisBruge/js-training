'use strict'

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */
let whisper = (n) => {
  return n.toLowerCase()
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper('Salut les Geeks'), 'salut les geeks')
assert.strictEqual(whisper('SALUT LES GEEKS'), 'salut les geeks')
assert.strictEqual(whisper('DalefqfdFES'), 'dalefqfdfes')
// End of tests */
