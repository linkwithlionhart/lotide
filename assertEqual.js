/**
 * Assert if two values are equal and log the result.
 * @param {*} actual - The actual value.
 * @param {*} expected - The expected value.
 */
const assertEqual = function(actual, expected) {
  const message = actual === expected ? 
      `✅✅✅ Assertion Passed: ${actual} === ${expected}` : 
      `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  console.log(message);
};

module.exports = assertEqual;
