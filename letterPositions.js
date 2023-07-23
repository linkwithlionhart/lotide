const letterPositions = function(sentence) {
  let results = {};
  // const newSentence = sentence.split(' ').join('');
// Process: 
  // Loop through string array and add keys to object
  for (letter of sentence) {
    if (letter !== ' ') {
      results[letter] = [];
    }
  } // end for 

  // Loop through string array and push index positions
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    }
  }
  
// Output: return all indices in the string where each character is found
  return results;
};

// Test code
console.log(letterPositions('LHL'));
console.log(letterPositions('lighthouse'));
console.log(letterPositions("lighthouse in the house"));
// assertArraysEqual(letterPositions("hello").e, [1]);


/* E.g., expected output for "lighthouse in the house"
{ 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
*/ 