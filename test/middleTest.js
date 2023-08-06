// MODULE: REQUIRE
// const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const { describe } = require('mocha');
const assert = require('chai').assert

// Apply tests
describe('#middle', () => {
  
  it('returns an empty array for input array with one element', () => {
    assert.deepEqual(middle([1]), []);
  });

  it('returns an empty array for input array with two elements', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('returns [2] for input array of [1, 2, 3]', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('returns [3] for input array of [1, 2, 3, 4, 5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('returns [2, 3] for input array of [1, 2, 3, 4]', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('returns [3, 4] for input array of [1, 2, 3, 4, 5, 6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

});

/* Test code from assertArraysEqual.js
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
*/
