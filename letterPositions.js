/**
 * Finds the positions of each letter in a given sentence.
 * This function returns an object where keys are the letters from the sentence, 
 * and values are arrays containing the indices (positions) at which each letter appears.
 * It ignores spaces.
 * @param {string} sentence - The sentence to analyze.
 * @returns {object} An object with letters as keys and arrays of indices as values.
 */
const letterPositions = function(sentence) {
  // Create an empty object to hold the results.
  let results = {};

  // Loop through each character in the sentence.
  for (let i = 0; i < sentence.length; i++) {
    // Fetch the character at the current position.
    let letter = sentence[i];

    // Ignore spaces.
    if (letter !== ' ') {
      // If this character has been encountered before, append the index to its array.
      if (results[letter]) {
        results[letter].push(i);
      } else {
        // If this is the first occurrence of the character, create a new array for it with the current index.
        results[letter] = [i];
      }
    }
  }

  // Return the filled results object.
  return results;
};

module.exports = letterPositions;
