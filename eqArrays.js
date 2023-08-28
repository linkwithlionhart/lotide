/**
 * Compares two arrays for strict equality.
 * This function checks if two arrays have the same length, and then
 * checks if each corresponding pair of elements in the two arrays are equal.
 * @param {Array} arr1 - The first array to be compared.
 * @param {Array} arr2 - The second array to be compared.
 * @returns {boolean} Returns `true` if the arrays are equal, otherwise returns `false`.
 */
const eqArrays = (arr1, arr2) => {
  // Check if the lengths of both arrays are the same.
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Iterate over each element in the first array.
  for (let i = 0; i < arr1.length; i++) {
    // If the current element in both arrays are arrays, use recursion.
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      // Recursive call.
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    // Compare the current element of the first array with the corresponding element of the second array.
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // If the loop completes without returning false, the arrays are equal.
  return true;
};

module.exports = eqArrays;
