const eqArrays = require('./eqArrays');
const inspect = require('util').inspect;

/**
 * Compares two objects for exact equality (both in terms of keys and associated values).
 * @param {Object} actual - The object to test.
 * @param {Object} expected - The object to compare against.
 * Logs a message to the console indicating whether the two objects are identical or not. 
 * This function will particularly check if the values are arrays and will do a deep 
 * comparison in such cases.
 * Note: This function relies on 'eqArrays' for array comparison.
 */
const assertObjectsEqual = function(actual, expected) {
  // Initialize utility for object inspection for console logging
  const inspect = require('util').inspect; 

  // Extract keys from the provided objects
  const object1 = actual;
  const object2 = expected;
  const keyArray1 = Object.keys(object1);
  const keyArray2 = Object.keys(object2);
  
  // Check if both objects have the same number of keys
  if (keyArray1.length !== keyArray2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== \n${inspect(object2)}`);
    return;
  }
  
  // Iterate through the keys of the first object
  for (let key1 of keyArray1) {
    // Check if each key of the first object exists in the second object
    if (!keyArray2.includes(key1)) {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== \n${inspect(object2)}`);
      return;
    }

    // Compare the values of the keys if they are arrays
    const value1 = object1[key1];
    const value2 = object2[key1];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      // Check if arrays are equal using eqArrays function
      if (!eqArrays(value1, value2)) {
        console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== \n${inspect(object2)}`);
      }
    } 
    // Compare values if they are not arrays
    else if (value1 !== value2) {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== \n${inspect(object2)}`);
    } 
  } 

  // Log success if objects are identical
  console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === \n${inspect(object2)}`);
};

module.exports = assertObjectsEqual;