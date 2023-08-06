// MODULE: REQUIRE
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const { describe } = require('mocha');

describe("#assertEqual", () => {
  
  let consoleOutput = [];
  const originalLog = console.log;
  
  beforeEach(() => {
    consoleOutput = [];
    console.log = (message) => { consoleOutput.push(message); };
  });
  
  afterEach(() => {
    console.log = originalLog;
  });
  
  it('should pass for equal strings', () => {
    assertEqual("Lighthouse Labs", "Lighthouse Labs");
    assert.strictEqual(consoleOutput[0], `✅✅✅ Assertion Passed: Lighthouse Labs === Lighthouse Labs`);
  });

  it('should fail for non-equal strings', () => {
    assertEqual("Lighthouse Labs", "Boootcamp");
    assert.strictEqual(consoleOutput[0], `🛑🛑🛑 Assertion Failed: Lighthouse Labs !== Boootcamp`)
  });

  it('should pass for equal numbers', () => {
    assertEqual(1, 1);
    assert.strictEqual(consoleOutput[0], `✅✅✅ Assertion Passed: 1 === 1`);
  });

  it('should pass for equal emojis', () => {
    assertEqual('😀', '😀');
    assert.strictEqual(consoleOutput[0], `✅✅✅ Assertion Passed: 😀 === 😀`);
  });

  it('should fail for non-equal emojis', () => {
    assertEqual('😀', '😂');
    assert.strictEqual(consoleOutput[0], `🛑🛑🛑 Assertion Failed: 😀 !== 😂`);
  });

});

/*
// Test code from AssertEqual.js
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual('😀', '😀');
assertEqual('😀', '😂');
*/ 