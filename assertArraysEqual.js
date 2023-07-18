// FUNCTIONS COPIED
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

// FUNCTION IMPLEMENTATION
const assertArraysEqual = (getArray1, getArray2) => {
  // Take two arrays and print a message
  if (getArray1.length !== getArray2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${getArray1} !== ${getArray2}`);
    return;
  } // end if

  for (let x = 0; x < getArray1.length; x++) {
    for (let y = 0; y < getArray2.length; y++) {
      if (x === y && getArray1[x] !== getArray2[y]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${getArray1} !== ${getArray2}`);
        return;
      } // end if
    } // end for loop 2
  } // end for loop 1

  console.log(`✅✅✅ Assertion Passed: ${getArray1} === ${getArray2}`);
}

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Expected: Assertion passed
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Expected: Assertion failed
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Expected: Assertion passed
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Expected: Assertion failed
