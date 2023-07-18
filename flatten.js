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
} // end function


// FUNCTION IMPLEMENTATION
const flatten = getArray => {
  // Create new flattened array for return
  const flattenArray = [];
  // Loop through passed array
  for (let i = 0; i < getArray.length; i++) {
    // Detect if an array is in the passed array
    if (Array.isArray(getArray[i])) {
      // Loop through the detected array and push to flatten array
      for (let j = 0; j < getArray[i].length; j++) {
        flattenArray.push(getArray[i][j]);
      } // end for loop 2
    // Anything that is not an array is still pushed to new flattened array
    } else {
      flattenArray.push(getArray[i]);
    }
  } // end for loop 1
  // Print and return the new flattened array
  // console.log(flattenArray);
  return flattenArray;
} // end function

// Test cases
console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2, [3, [4]], 5]])); // => [1, 2, [3, [4]], 5] 

// TEST CODE
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([1, [2, [3, [4]], 5]]), [1, 2, [3, [4]], 5]);