// MODULE: REQUIRE
const head = require('../head');
const assert = require('chai').assert;
const { describe } = require('mocha');
// const assertEqual = require('../assertEqual');

// Apply tests
describe("#head", () => {
  
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
  
});

/*
// Test code from head.js
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1); // Array with one element
assertEqual(head([]), undefined); // Empty array
*/