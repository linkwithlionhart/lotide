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

// FUNCTION IMPLEMENTATION
const middle = getArray => {
  if (getArray.length <= 2) {
    // console.log([]);
    return [];
  } else if (getArray.length % 2 !== 0) {
    let median = ((getArray.length + 1) / 2) - 1; // -1 to adjust for zero-based index
    // console.log([getArray[median]]);
    return [getArray[median]];
  } else if (getArray.length % 2 === 0) {
    let median1 = (getArray.length / 2) - 1; // -1 to adjust for zero-based index
    let median2 = ((getArray.length / 2) + 1) - 1; // -1 to adjust for zero-based index
    // console.log([getArray[median1], getArray[median2]])
    return [getArray[median1], getArray[median2]];
  }
} // end function 

// TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]