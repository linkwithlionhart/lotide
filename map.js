/**
 * Creates a new array populated with the results of calling a provided function on every element in the input array.
 * @param {Array} array - The array to process.
 * @param {function} callback - The function to execute on each element.
 * @returns {Array} A new array with each element being the result of the callback function.
 */
const map = function(array, callback) {
  // Initialize an empty array to hold the results.
  const results = [];
  
  // Loop through each item in the provided array.
  for (let item of array) {
    // Apply the callback function to the current item and push the result to the results array.
    results.push(callback(item));
  }

  // Return the populated results array.
  return results;
};

module.exports = map;