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
const without = (source, itemsToRemove) => {
  let subSource = [];
  let filteredSource = [];
  
  for (let i = 0; i <= source.length - 1; i++) {
    subSource.push([source[i], true]);
  }
  // console.log(subSource);

  for (let x = 0; x <= subSource.length - 1; x++) {
    for (let y = 0; y <= itemsToRemove.length - 1; y++) {
      if (subSource[x][0] === itemsToRemove[y]) {
        subSource[x][1] = false;
      }
    } // end for loop 2
  } // end for loop 1
  // console.log(subSource);

  for (let z = 0; z <= subSource.length - 1; z++) {
    if (subSource[z][1] === true) {
      filteredSource.push(subSource[z][0]);
    }
  }
  console.log(filteredSource);

} // end function


// TEST CODE
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

// TEST CASE
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);