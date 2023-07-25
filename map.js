// Imported functions
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
} // end function: assertArraysEqual

// Implement function: map
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
    /*
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
    */
  }
  return results;
}

// Tests
// T1
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

// T2
const words1 = ["slick", "ton", "over", "team"];
const results2 = map(words1, word => word[1]);
assertArraysEqual(results2, ['l', 'o', 'v', 'e']);