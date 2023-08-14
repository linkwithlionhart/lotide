/**
 * Returns the middle element(s) of an array.
 * For arrays with a length of 1 or 2, the function returns an empty array.
 * For arrays with an odd length, it returns a single middle element.
 * For arrays with an even length, it returns two middle elements.
 * @param {Array} getArray - The array to analyze.
 * @returns {Array} An array containing the middle element(s) of the input array.
 */
const middle = getArray => {
  // If the array has a length of 1 or 2, return an empty array.
  if (getArray.length <= 2) {
    return [];
  
  // If the array has an odd length, return the single middle element.
  } else if (getArray.length % 2 !== 0) {
    let median = ((getArray.length + 1) / 2) - 1; // -1 to adjust for zero-based indexing
    return [getArray[median]];

  // If the array has an even length, return the two middle elements.
  } else if (getArray.length % 2 === 0) {
    let median1 = (getArray.length / 2) - 1; // -1 to adjust for zero-based indexing
    let median2 = ((getArray.length / 2) + 1) - 1; // -1 to adjust for zero-based indexing
    return [getArray[median1], getArray[median2]];
  }
};

module.exports = middle;
