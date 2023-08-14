/**
 * Finds the first key in an object that satisfies a callback function.
 * Iterates through the object's key-value pairs and applies the callback 
 * to each value. Returns the key for the first value that makes the callback
 * return a truthy value. If no such key is found, the function returns undefined.
 * @param {object} object - The object to be scanned.
 * @param {function} callback - The function that tests each value.
 * @returns {string|undefined} The first key found that satisfies the callback, or undefined if no key is found.
 */
const findKey = (object, callback) => {
  // Iterate over each key-value pair in the object.
  for (const [key, value] of Object.entries(object)) {
    // If the callback returns a truthy value for the current value, return the corresponding key.
    if (callback(value)) {
      return key;
    }
  }
  // If loop completes without returning a key, return undefined.
};

module.exports = findKey;