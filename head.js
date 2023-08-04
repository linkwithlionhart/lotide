// FUNCTION IMPLEMENTATION
// Refactored
const head = function (getArray) {
  return getArray[0];
}

// MODULE: EXPORT
module.exports = head;

/* Outdated
const head = function (getArray) {
  for (let i = 0; i <= getArray.length; i++) {
    if (getArray[0]) {
      return getArray[0]
    }
  }
}

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1); // Array with one element
assertEqual(head([]), undefined); // Empty array
*/
