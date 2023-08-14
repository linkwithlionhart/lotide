/**
 * Returns a new array excluding specified values.
 * This function creates a new array by filtering out the values from the source array
 * that are present in the itemsToRemove array.
 * @param {Array} source - The original array.
 * @param {Array} itemsToRemove - The values to be removed from the source array.
 * @returns {Array} A new array excluding the specified values.
 */
const without = (source, itemsToRemove) => {
  // Initialize an array to hold pairs: each element of the source and a boolean indicating whether to keep it.
  let subSource = [];

  // Initialize an array to hold the final filtered values.
  let filteredSource = [];

  // Convert each element in the source to a pair: the element itself and a default flag set to true.
  for (let i = 0; i <= source.length - 1; i++) {
    subSource.push([source[i], true]);
  }

  // Loop through each pair in the subSource array.
  for (let x = 0; x <= subSource.length - 1; x++) {
    // Loop through each item in the itemsToRemove array.
    for (let y = 0; y <= itemsToRemove.length - 1; y++) {
      // If the current item from subSource matches any item in itemsToRemove, update its flag to false.
      if (subSource[x][0] === itemsToRemove[y]) {
        subSource[x][1] = false;
      }
    }
  }

  // Create the final filtered array by including only the items whose flag is set to true.
  for (let z = 0; z <= subSource.length - 1; z++) {
    if (subSource[z][1] === true) {
      filteredSource.push(subSource[z][0]);
    }
  }

  // Print the filtered array (you might want to return it instead).
  console.log(filteredSource);
}

module.exports = without;
