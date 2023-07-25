// Imported functions
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
} // end function: assertEqual

// Implement function: findKey
const findKey = (object, callback) => {
  // Scan the object
  for (const [key, value] of Object.entries(object)) {
    // console.log(value);
    if (callback(value)) {
      // console.log(key);
      return key;
    }
  }
  // Return the first key for which the callback returns the truth value
  // If no key is found, return undefined
}; // end function: findKey

// Test code
// T1
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'); // => "noma"

// T2
assertEqual(findKey({
  "Mango":     { rating: 9 },
  "Apple":     { rating: 7 },
  "Orange":    { rating: 8 },
  "Banana":    { rating: 6 },
  "Peach":     { rating: 9 },
  "Strawberry":{ rating: 7 }
}, x => x.rating === 8), 'Orange'); // => "Orange"

// T3
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars > 2), 'Akaleri'); // => "Akaleri"