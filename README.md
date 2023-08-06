# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @linkwithlionhart/lotide`

**Require it:**

`const _ = require('linkwithlionhart/lotide');`

**Call it:**

`const results = _.assertArraysEqual([1, 2, 3], [1, 2, 3]); // => Assertion passed`
`const results = _.assertEqual("Lighthouse Labs", "Bootcamp") // => Assertion failed`
`const results = _.countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })`
`const results = _.eqArrays([1, 2, 3], [1, 2, 3]), true); // => Assertion passed`
`const results = _.eqObjects(shirtObject, anotherShirtObject) // => true`
`const results = _.findKeyByValue(bestTVShowsByGenre, "The Wire") // => "drama"`
`const results = _.flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]`
`const results = _.head([1, 2, 3]) // => 1`
`const results = _.letterPositions('LHL') // => { L: [0, 2], H: [1] }`
`const results = _.middle([1, 2, 3, 4]) // => [2, 3]`
`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:
* `function1(assertArraysEqual)`: Assert two arrays are equal.
* `function2(assertEqual)`: Success or failure messages printed to the console to see if functions are behaving as expected.
* `function3(countOnly):`: Take in a collection of items and return counts for a specific subset of those items.
* `function4(eqArrays)`: Compare arrays.
* `function5(eqObject)`: Verifies the equality of two objects based on their keys' count and corresponding values.
* `function6(findKeyByValue)`: Returns the key corresponding to a given value in an object, or undefined if not found.
* `function7(flatten)`: Given an array with other arrays inside, it can flatten it into a single-level array.
* `function8(head)`: Returns the first item in the array.
* `function9(letterPositions)`: Return all the indices (zero-based positions) in the string where each character is found.
* `function10(middle)`: Takes an array and returns the middle-most element(s) of the given array.
* `function11(tail)`: Returns the "tail" of an array: everything except for the first item (head) of the provided array.