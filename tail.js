/**
 * Returns a new array containing all elements of the input array except the first one.
 * Utilizes the array's slice method to achieve this.
 * @param {Array} array - The input array.
 * @returns {Array} A new array containing all elements after the first one from the input array.
 */
const tail = array => array.slice(1);


module.exports = tail;
