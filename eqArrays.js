// FUNCTIONS COPIED
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION
const eqArrays = (getArray1, getArray2) => {
  if (getArray1.length !== getArray2.length) {
    return false;
  } // end if

  for (let x = 0; x < getArray1.length; x++) {
    for (let y = 0; y < getArray2.length; y++) {
      if (x === y && getArray1[x] !== getArray2[y]) {
        return false;
      } // end if
    } // end for loop 2
  } // end for loop 1

  return true;
} // end function

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => should PASS
