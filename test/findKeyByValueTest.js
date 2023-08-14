const findKeyByValue = require('../findKeyByValue');
const { describe } = require('mocha');
const assert = require('chai').assert

// Apply tests
describe('#findKeyByValue', () => {

  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it('should return the first key which contains the given value', () => {
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    assert.equal(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
    assert.equal(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
  });

  it('should return undefined if no key with the given value is found', () => {
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
    assert.isUndefined(findKeyByValue(bestTVShowsByGenre, "Nonexistent Show"));
  });

});
