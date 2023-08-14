# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**
`npm install @linkwithlionhart/lotide`

**Require it:**
```javascript
const _ = require('linkwithlionhart/lotide');
```

**Call it:**
```javascript
const results1 = _.assertArraysEqual([1, 2, 3], [1, 2, 3]); // => Assertion passed

const results2 = _.assertEqual("Lighthouse Labs", "Bootcamp"); // => Assertion failed

const results3 = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

const results4 = _.eqArrays([1, 2, 3], [1, 2, 3]); // => Assertion passed

const results5 = _.eqObjects(shirtObject, anotherShirtObject); // => true

const results6 = _.findKeyByValue(bestTVShowsByGenre, "The Wire"); // => "drama"

const results7 = _.flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

const results8 = _.head([1, 2, 3]); // => 1

const results9 = _.letterPositions('LHL'); // => { L: [0, 2], H: [1] }

const results10 = _.middle([1, 2, 3, 4]); // => [2, 3]

const results11 = _.tail([1, 2, 3]); // => [2, 3]
```

## Documentation
The following functions are currently implemented:
* `assertArraysEqual`: Assert two arrays are equal.
* `assertEqual`: Success or failure messages printed to the console to see if functions are behaving as expected.
* `countOnly`: Take in a collection of items and return counts for a specific subset of those items.
* `eqArrays`: Compare arrays.
* `eqObject`: Verifies the equality of two objects based on their keys' count and corresponding values.
* `findKeyByValue`: Returns the key corresponding to a given value in an object, or undefined if not found.
* `flatten`: Given an array with other arrays inside, it can flatten it into a single-level array.
* `head`: Returns the first item in the array.
* `letterPositions`: Return all the indices (zero-based positions) in the string where each character is found.
* `middle`: Takes an array and returns the middle-most element(s) of the given array.
* `tail`: Returns the "tail" of an array: everything except for the first item (head) of the provided array.

## Contributions
Contributions are welcome! Please open an issue or submit a pull request on the project's repository.

## License
This project is open source, under the MIT license.

## Tests
To run tests, navigate to the project's root directory and run:
`npm test`