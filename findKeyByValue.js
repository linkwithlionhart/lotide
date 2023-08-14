/**
 * Finds the key associated with a given value in an object.
 * Iterates through the object's key-value pairs and returns the key for the 
 * provided value. If the value isn't found in the object, the function returns undefined.
 * @param {object} getObject - The object to be searched.
 * @param {any} getValue - The value to be searched for.
 * @returns {string|undefined} The key associated with the given value, or undefined if the value is not found.
 */
const findKeyByValue = (getObject, getValue) => {
  // Iterate over each key-value pair in the object.
  for (const [key, value] of Object.entries(getObject)) {
    // If the current value matches the given value, return the corresponding key.
    if (value === getValue) {
      return key;
    }
  }
  // If loop completes without finding the value, return undefined.
  return undefined;
};

module.exports = findKeyByValue; 
