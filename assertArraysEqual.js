const eqArrays = require('./eqArrays');

/**
 * Assert if two arrays are equal and log the result.
 * @param {Array} arr1 - First array.
 * @param {Array} arr2 - Second array.
 */
const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;
