// MODULE: REQUIRE
const flatten = require('../flatten.js');
const { describe } = require('mocha');
const assert = require('chai').assert;

// Apply tests
describe('#flatten', () => {

  it('should flatten a single level nested array', () => {
    const inputArray = [1, 2, [3, 4], 5, [6]];
    const expectedOutput = [1, 2, 3, 4, 5, 6];
    assert.deepEqual(flatten(inputArray), expectedOutput);
  });

  it('should handle multiple nested arrays correctly', () => {
    const inputArray = [1, [2, [3, [4]], 5]];
    const expectedOutput = [1, 2, [3, [4]], 5];
    assert.deepEqual(flatten(inputArray), expectedOutput);
  });

});

// Test code from flatten.js
// assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
// assertArraysEqual(flatten([1, [2, [3, [4]], 5]]), [1, 2, [3, [4]], 5]);