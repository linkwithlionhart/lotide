// MODULE: REQUIRE
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

// Test code from assertArraysEqual.js
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Expected: Assertion passed
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Expected: Assertion failed
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Expected: Assertion passed
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Expected: Assertion failed
