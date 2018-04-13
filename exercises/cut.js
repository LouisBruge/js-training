'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
let cutFirst = (n) => {
  return n.slice(2, n.length)
}

let cutLast = (n) => {
  return n.slice(0, (n.length - 2))
}

let cutFirstLast = (n) => {
  return n.slice(2, (n.length - 2))
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.strictEqual(typeof cutLast, 'function')
assert.strictEqual(typeof cutFirstLast, 'function')
assert.strictEqual(cutFirst('Salut tout le monde'), 'lut tout le monde')
assert.strictEqual(cutLast('Salut tout le monde'), 'Salut tout le mon')
assert.strictEqual(cutFirstLast('Salut tout le monde'), 'lut tout le mon')
// End of tests */
