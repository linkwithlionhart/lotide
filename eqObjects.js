const eqArrays = require('./eqArrays');

/**
 * Compares two objects for strict equality.
 * This function checks if two objects have the same set of keys and if 
 * corresponding values for those keys are equal. It handles the comparison 
 * of values that are arrays using the eqArrays function.
 * @param {object} object1 - The first object to be compared.
 * @param {object} object2 - The second object to be compared.
 * @returns {boolean} Returns `true` if the objects are equal, otherwise returns `false`.
 */
const eqObjects = function(object1, object2) {
  // Extract the keys from both objects.
  const keyArray1 = Object.keys(object1);
  const keyArray2 = Object.keys(object2);
  
  // Compare the lengths of the keys arrays. If they are different, objects can't be equal.
  if (keyArray1.length !== keyArray2.length) {
    return false;
  }
  
  // Iterate over each key in the first object's key array.
  for (let key1 of keyArray1) {
    // Extract corresponding values for the current key from both objects.
    const value1 = object1[key1];
    const value2 = object2[key1];

    // If both values are arrays, compare them using eqArrays.
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) { // If values are not arrays, do a simple comparison.
      return false;
    }
  }
  
  // If loop completes without returning false, the objects are considered equal.
  return true;
};

module.exports = eqObjects;
