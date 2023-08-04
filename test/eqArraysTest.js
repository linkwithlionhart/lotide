// MODULE: REQUIRE
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test code from eqArrays.js
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // should PASS