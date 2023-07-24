// FUNCTIONS COPIED
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
} // end function: assertEqual

const eqArrays = (arr1, arr2) => {
  // First, check if the arrays have the same length
  if (arr1.length !== arr2.length) {
      return false;
  }
  
  // Next, check each pair of elements
  for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
          return false;
      }
  }
  
  // If we haven't returned false yet, then the arrays must be equal
  return true;
} // end function: eqArrays

// Function: eqObjects()
const eqObjects = function(object1, object2) {
  // Setup input
  const compareKeyArray1 = Object.keys(object1);
  const compareValArray1 = Object.values(object1);
  const compareKeyArray2 = Object.keys(object2);
  const compareValArray2 = Object.values(object2);
  // Process
  // P1: Compare length
  if (compareKeyArray1.length !== compareKeyArray2.length) {
    return false;
  } // end if
  // P2: Compare key arrays
  for (let key1 of compareKeyArray1) {
    if (compareKeyArray2.includes(key1)) {
    } else {
      console.log(`False key detected: ${key1}.`)
      return false;
    }
  } // end for 1
  // P3: Compare value arrays
  for (let val1 of compareValArray1) {
    if (compareValArray2.includes(val1)) {
    } else if (Array.isArray(val1)) {
      // console.log(val1);
      for (let val2 of compareValArray2) {
        if (Array.isArray(val2)) {
          // console.log(val2);
          // console.log(eqArrays(val1, val2));
          return eqArrays(val1, val2);
        } // end if
      } // end for loop
    } else {
      console.log(`False value detected: ${val1}.`);
      return false;
    }
  }
  // Output: if no false, return true
  return true;
} // end function: eqObjects

// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(shirtObject, anotherShirtObject); // => true
// eqObjects(shirtObject, longSleeveShirtObject); // => false
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
// eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
// eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false);

/*
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Expected: Assertion passed
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Expected: Assertion failed
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Expected: Assertion passed
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Expected: Assertion failed
*/
