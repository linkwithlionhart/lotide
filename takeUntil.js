/**
 * Returns a slice of the input array with elements taken from the beginning 
 * until the callback function returns a truthy value.
 * The function iterates through the array elements and adds them to a new array. 
 * The process stops when the callback function, applied to the current element, 
 * returns a truthy value.
 * @param {Array} array - The array to process.
 * @param {function} callback - The function to apply to each element.
 * @returns {Array} An array containing elements from the beginning up to, 
 *                  but not including, the element that caused the callback to return a truthy value.
 */
const takeUntil = function(array, callback) {
  // Initialize an empty array to hold the results.
  const results = [];

  // Loop through each item in the provided array.
  for (let item of array) {
    // If the callback function returns true for the current item, stop processing and return the results array.
    if (callback(item)) {
      return results;
    } else {
      // If the callback function returns false, add the current item to the results array.
      results.push(item);
    }
  }

  // Return the populated results array.
  return results;
}

module.exports = takeUntil;
