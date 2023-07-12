// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

const tail = function (getArray) {
  const newArray = []
  for (let i = 0; i <= getArray.length - 1; i++) {
    if (i !== 0) {
      newArray.push(getArray[i])
    }
  } // end for loop
  return (newArray)
} // end function: tail()

// Test Case: Check the original array
const words = ['Yo Yo', 'Lighthouse', 'Labs']
tail(words) // no need to capture the return value since we are not checking it
assertEqual(words.length, 3) // original array should still have 3 elements!
assertEqual(tail(words).length, 2) // expected value is 2

// Test Case: An array with only one element should yield an empty array for its tail
const words1 = ['Yo Yo']
assertEqual(tail(words1).length, 0)

// Test Case: An empty array should yield an empty array for its tail
const words2 = []
assertEqual(tail(words2).length, 0)
