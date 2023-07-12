// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
}

const head = function (getArray) {
  for (let i = 0; i <= getArray.length; i++) {
    if (getArray[0]) {
      return getArray[0]
    }
  }
}

// TEST CODE
assertEqual('LHL', 'LHL')
assertEqual('Lighthouse Labs', 'Bootcamp')
assertEqual(1, 1)
assertEqual(1, 2)
assertEqual(head([5, 6, 7]), 5)
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello')
assertEqual(head(['One Element in the Array']), 1)
assertEqual(head([]), 0)
