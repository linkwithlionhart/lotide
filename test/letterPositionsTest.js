const letterPositions = require('../letterPositions');
const { describe } = require('mocha');
const assert = require('chai').assert;

// Apply tests
describe('#letterPositions', () => {

  it('returns correct letter positions for "LHL"', () => {
    const result = letterPositions('LHL');
    assert.deepEqual(result, { L: [0, 2], H: [1] });
  });

  it('returns correct letter positions for "lighthouse"', () => {
    const result = letterPositions('lighthouse');
    assert.deepEqual(result, {
      l: [0], 
      i: [1], 
      g: [2], 
      h: [3, 5], 
      t: [4], 
      o: [6], 
      u: [7], 
      s: [8], 
      e: [9]
    });
  });
  

  it('returns correct letter positions for "lighthouse in the house"', () => {
    const result = letterPositions("lighthouse in the house");
    assert.deepEqual(result, { 
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12]
    });
  });

});
