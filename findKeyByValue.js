// FUNCTION IMPLEMENTATION
const findKeyByValue = (getObject, getValue) => {
  // Process - scan the object, read the value
  for (const [key, value] of Object.entries(getObject)) {
    // Output - return the key associated to the value
    if (value === getValue) {
      // console.log(key);
      return key;
    } // end if
  } // end for loop
  // Output - edge case: undefined
  // console.log(undefined);
  return undefined;
} // end function: findKeyByValue

// MODULE: EXPORT
module.exports = findKeyByValue; 

/* FUNCTION IMPORTED
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

// Initialization
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

Challenge: It should scan the object and return the first key which contains the given value. 
If no key with that given value is found, then it should return undefined.

// Test code
// findKeyByValue(bestTVShowsByGenre, "The Wire");
// findKeyByValue(bestTVShowsByGenre, "That '70s Show");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/ 
