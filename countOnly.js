/**
 * Counts the occurrences of specific items in an array.
 * This function iterates through an array of items and counts the occurrences
 * of items that are specified within an object.
 * @param {string[]} allItems - An array of strings to be counted.
 * @param {object} itemsToCount - An object where keys represent the items to be counted, 
 *                                and the value is `true` if the item should be counted.
 * @returns {object} An object with the counted items as keys and their counts as values.
 */
const countOnly = function(allItems, itemsToCount) {
  // An object to store the results.
  const results = {};

  // Iterate over each item in the allItems array.
  for (const item of allItems) {
    // Check if the current item is in the itemsToCount object with a truthy value.
    if (itemsToCount[item]) {
      // If the item already exists in results, increment its count.
      if (results[item]) {
        results[item] += 1;
      } else {
        // If the item doesn't exist in results, initialize its count to 1.
        results[item] = 1;
      }
    }
  }
  
  // Return the final counts of the specified items.
  return results;
};

module.exports = countOnly;
