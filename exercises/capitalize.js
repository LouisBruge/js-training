'use strict'

/*
 * Create a `capitalize` function that takes a string
 * and transforms it to upper case only for the first letter,
 * and in lowercase for the rest of the string
 *
 */

let capitalize = (n) => {
  n = n.toLowerCase()
  let firstLetter = n[0]
  let newSentence = firstLetter.toUpperCase()

  newSentence += n.slice(1, n.length)

  return newSentence
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof capitalize, 'function')
assert.strictEqual(capitalize('str'), 'Str')
assert.strictEqual(capitalize('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(capitalize('STR'), 'Str')
assert.strictEqual(capitalize('zapZAP'), 'Zapzap')
// End of tests */
