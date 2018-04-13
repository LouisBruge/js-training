'use strict'

/*
 * Create a `keepFirst` function that takes a string as parameter
 * and return the string only keeping the 2 first characters
 *
 * Create a `keepLast` function that takes a string as parameter
 * and return the string only keeping the 2 last characters
 *
 * Create a `keepFirstLast` function that takes a string as parameter
 * and only keep 2 characters from the third character
 *
 */

let keepFirst = (n) => {
  return n.slice(0, 2)
}

let keepLast = (n) => {
  return n.slice(n.length - 2, n.lenght)
}

let keepFirstLast = (n) => {
  return (n.length > 5 ? n.slice(3, 5) : 'Erreur, mot pas assez long')
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.strictEqual(typeof keepLast, 'function')
assert.strictEqual(typeof keepFirstLast, 'function')
assert.strictEqual(keepFirst('Hello world'), 'He')
assert.strictEqual(keepLast('Hello world'), 'ld')
assert.strictEqual(keepFirstLast('Hello world'), 'lo')
assert.strictEqual(keepFirstLast('Lorem ipsum'), 'em')
assert.strictEqual(keepFirstLast('Lore'), 'Erreur, mot pas assez long')

// End of tests */
