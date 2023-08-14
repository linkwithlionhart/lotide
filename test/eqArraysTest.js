const eqArrays = require('../eqArrays');
const assert = require('chai').assert;
const { describe } = require('mocha');

// Apply tests
describe('#eqArrays', () => {
  
  it('should return true for two identical number array', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });

  it('should return false for two number arrays with the same values in different order', () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  })

  it('should return true for two identical string arrays', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
  });

  it('should return false for a string array and a number array with otherwise identical values', () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  
});
