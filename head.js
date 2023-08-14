/**
 * Retrieves the first element from an array.
 * This function returns the first item of a given array. If the array is empty, 
 * it will return `undefined` because of the behavior of accessing an undefined index in arrays.
 * @param {Array} getArray - The array from which the first element will be retrieved.
 * @returns {any} The first element of the provided array or `undefined` if the array is empty.
 */
const head = function (getArray) {
  return getArray[0];
};


module.exports = head;
