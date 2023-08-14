/**
 * Count the occurrences of each letter in a given sentence.
 * @param {string} getSentence - The input sentence.
 * @returns {object} An object where keys are letters from the sentence and values are their counts.
 */
const countLetters = getSentence => {
  // Remove spaces from the sentence to only count letters.
  const newSentence = getSentence.split(' ').join('');
  
  // An empty object to store the letters and their counts.
  let sentenceKey = {};

  // Populate the sentenceKey object with keys for each unique letter.
  // Initially, set the value of each letter to an empty string.
  for (letter of newSentence) {
    if (letter) {
      sentenceKey[letter] = '';
    } 
  }

  // Iterate over each letter in the cleaned-up sentence.
  for (letter of newSentence) {
    // If the letter already has a value in sentenceKey, increment it.
    if (sentenceKey[letter]) {
      sentenceKey[letter] += 1;
    } else {
      // If the letter doesn't have a value, initialize it to 1.
      sentenceKey[letter] = 1;
    }
  }
  
  // Return the final counts of each letter.
  return sentenceKey;
};

module.exports = countLetters;