// FUNCTION IMPLEMENTATION
// Refactored
const tail = array => array.slice(1);

// MODULE: EXPORT
module.exports = tail;

/* Outdated
const tail = function (getArray) {
  const newArray = []
  for (let i = 0; i <= getArray.length - 1; i++) {
    if (i !== 0) {
      newArray.push(getArray[i])
    }
  } // end for loop
  return (newArray)
} // end function: tail()

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

// Test cases for the tail function
// Test Case 1: Checking the returned array
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // Should pass

// Test Case 2: Checking if the original array remains unmodified
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); 
assertEqual(words.length, 3); // Should pass

// Test Case 3: An array with only one element should yield an empty array for its tail
const singleElement = ["Hello"];
const singleResult = tail(singleElement);
assertEqual(singleResult, []); // Should pass

// Test Case 4: An empty array should yield an empty array for its tail
const emptyArray = [];
const emptyResult = tail(emptyArray);
assertEqual(emptyResult, []); // Should pass
*/
