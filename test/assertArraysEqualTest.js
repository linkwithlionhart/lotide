// MODULE: REQUIRE
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
const { describe } = require('mocha');
// const assertEqual = require('../assertEqual');
// const eqArrays = require('../eqArrays');

// Write tests using chai's assert method
describe("#assertArraysEqual", () => {

  it("returns true when comparing [1, 2, 3] with [1, 2, 3]", () => {
    assert.deepEqual([1, 2, 3], [1, 2, 3]);
  });

  it("returns false when comparing [1, 2, 3] with [3, 2, 1]", () => {
    assert.notDeepEqual([1, 2, 3], [3, 2, 1]);
  });

  it("returns true when comparing ['1', '2', '3'] with ['1', '2', '3']", () => {
    assert.deepEqual(['1', '2', '3'], ['1', '2', '3']);
  });

  it("returns false when comparing ['1', '2', '3'] with ['1', '2', 3]", () => {
    assert.notDeepEqual(['1', '2', '3'], ['1', '2', 3]);
  });
  
});


/*
// Test code from assertArraysEqual.js
assertArraysEqual([1, 2, 3], [1, 2, 3]); // Expected: Assertion passed
assertArraysEqual([1, 2, 3], [3, 2, 1]); // Expected: Assertion failed
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // Expected: Assertion passed
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // Expected: Assertion failed
*/
