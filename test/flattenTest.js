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
