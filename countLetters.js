// FUNCTION IMPORTED
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

// FUNCTION IMPLEMENTATION
// Input: string - sentence
const countLetters = getSentence => {
  const newSentence = getSentence.split(' ').join('');
  // console.log(processSentence);
  let sentenceKey = {};

  // Loop through the parameter and log keys
  for (letter of newSentence) {
    if (letter) {
      sentenceKey[letter] = '';
      } // end if
  } // end for loop

  // Loop through each letter of string array
  for (letter of newSentence) {
    if (sentenceKey[letter]) {
      sentenceKey[letter] += 1;
     } else {
      sentenceKey[letter] = 1;
    }
  } // end loop
  
  // Output: multiple numbers - count of each letters in the string
  return sentenceKey;
  //return results;
} // end function: countLetters 

// TEST CODE
console.log(countLetters('LHL'));
console.log(countLetters('lighthouse'));
console.log(countLetters("lighthouse in the house"));