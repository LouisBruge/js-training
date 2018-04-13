'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

let jadenCase = (n) => {
  let newSentence = []

  for (let word of n.toLowerCase().split(' ')) {
    let firstLetter = word[0]
    let capitalizedWord = firstLetter.toUpperCase()
    capitalizedWord += word.slice(1, word.length)
    newSentence.push(capitalizedWord)
  }
  return newSentence.join(' ')
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('How are you ?'), 'How Are You ?')
assert.strictEqual(jadenCase('Hello word'), 'Hello Word')
assert.strictEqual(jadenCase('it iS a gReAT daY'), 'It Is A Great Day')
// End of tests */
