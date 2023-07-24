// FUNCTIONS COPIED
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
} // end function: assertEqual

const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  // Next, check each pair of elements
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
} // end function: eqArrays

const eqObjects = function(object1, object2) {
  // Setup input
  const keyArray1 = Object.keys(object1);
  const keyArray2 = Object.keys(object2);
  
  // Process
  // P1: Compare length
  if (keyArray1.length !== keyArray2.length) {
    // console.log(`Key array length ${keyArray1.length} !== ${keyArray2.length}.`)
    return false;
  } // end if
  
  // P2: Compare key arrays
  for (let key1 of keyArray1) {
    if (!keyArray2.includes(key1)) {
      // console.log(`False key detected: ${key1}.`)
      return false;
    } // end if

  // P3: Compare value arrays
    const value1 = object1[key1];
    const value2 = object2[key1];
    if (Array.isArray(value1) && Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false;
      }
    } else if (value1 !== value2) {
      return false;
    }
  } // end for loop
  
  // Output: if no false, return true
  return true;
} // end function: eqObjects

const assertArraysEqual = (arr1, arr2) => {
  // Take two arrays and print a message
  if (arr1.length !== arr2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
    return;
  } // end if
  
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
      return;
    } // end if
  } // end for loop
  console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
}

// FUNCTION IMPLEMENTATION: assertObjectsEqual
const assertObjectsEqual = function(actual, expected) {
  // Setup input
  const inspect = require('util').inspect; 
  const object1 = actual;
  const object2 = expected;
  const keyArray1 = Object.keys(object1);
  const keyArray2 = Object.keys(object2);
  
  // Process
  // P1: Compare length
  if (keyArray1.length !== keyArray2.length) {
    // console.log(`Key array length ${keyArray1.length} !== ${keyArray2.length}.`)
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== \n${inspect(object2)}`);
    return;
  } // end if
  
  // P2: Compare key arrays
  for (let key1 of keyArray1) {
    if (!keyArray2.includes(key1)) {
      // console.log(`False key detected: ${key1}.`)
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== \n${inspect(object2)}`);
      return;
    } // end if

  // P3: Compare value arrays
  const value1 = object1[key1];
  const value2 = object2[key1];
  if (Array.isArray(value1) && Array.isArray(value2)) {
    if (!eqArrays(value1, value2)) {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== \n${inspect(object2)}`);
    } // end if 2
  } else if (value1 !== value2) {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== \n${inspect(object2)}`);
    } // end if 1 
  } // end for loop
  // Output: if no false, return true
  console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === \n${inspect(object2)}`);
} // end function: assertObjectsEqual

// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

assertObjectsEqual(shirtObject, anotherShirtObject);
// eqObjects(shirtObject, anotherShirtObject); // => true
assertObjectsEqual(shirtObject, longSleeveShirtObject);
// eqObjects(shirtObject, longSleeveShirtObject); // => false
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);
// eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);
// eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
