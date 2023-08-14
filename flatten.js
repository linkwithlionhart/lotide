/**
 * Flattens a one-level deep nested array.
 * This function iterates through an array and if an element is also an array, 
 * it merges its contents into the main array. It handles only one level of nesting.
 * @param {Array} getArray - The array to be flattened.
 * @returns {Array} The flattened array.
 */
const flatten = getArray => {
  // Initialize an empty array to store the flattened values.
  const flattenArray = [];
  
  // Iterate over each element in the input array.
  for (let i = 0; i < getArray.length; i++) {
    // If the current element is an array, merge its contents into the flattened array.
    if (Array.isArray(getArray[i])) {
      for (let j = 0; j < getArray[i].length; j++) {
        flattenArray.push(getArray[i][j]);
      }
    } else {
      // If the current element is not an array, add it directly to the flattened array.
      flattenArray.push(getArray[i]);
    }
  }
  
  // Return the resulting flattened array.
  return flattenArray;
};

module.exports = flatten;
