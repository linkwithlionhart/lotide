const tail = require('../tail');
const { describe } = require('mocha');
const assert = require('chai').assert;

// Apply tests
describe('#tail', () => {

  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it('original array remains unmodified', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    const wordsResult = tail(words);
    assert.deepEqual(wordsResult, ["Lighthouse", "Labs"]);
    assert.lengthOf(words, 3);
  });

  it('returns empty array when single element array is passed', () => {
    const singleElement = ["Hello"];
    const singleResult = tail(singleElement);
    assert.deepEqual(singleResult, []);
  });

  it('returns empty array when empty array is passed', () => {
    const emptyArray = [];
    const emptyResult = tail(emptyArray);
    assert.deepEqual(emptyResult, emptyArray);
  });

});
