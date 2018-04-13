'use strict'

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :
let multiply = (a, b, counter = 0, result = null) => {
  if (a === 0 || b === 0) {
    return 0
  }

  if (result === null) {
    result = a
  }

  if (counter < Math.abs(b) - 1) {
    counter++
    result += a
    result = multiply(a, b, counter, result)
  }

  if (Math.sign(a) !== Math.sign(b)) {
    result = Math.abs(result)
    return -result
  } else {
    return Math.abs(result)
  }
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
