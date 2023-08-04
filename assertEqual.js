// FUNCTION IMPLEMENTATION
// Refactored
const assertEqual = function(actual, expected) {
  let message;
  if (actual === expected) {
    message = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    message = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(message);
};

// MODULE: EXPORT
module.exports = assertEqual;

/*
// Outdated
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
} // end function: assertEqual

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('😀', '😀');
assertEqual('😀', '😂');
*/