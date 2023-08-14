// MODULE: REQUIRE
const countOnly = require('../countOnly');
const { describe } = require('mocha');
const assert = require('chai').assert;

// Apply tests
describe("#countOnly", () => {

  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  let result1;

  beforeEach(() => {
    result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  });

  it("should return the correct count for 'Jason'", () => {
    assert.equal(result1["Jason"], 1);
  });

  it("should return 'undefined' for 'Karima'", () => {
    assert.equal(result1["Karima"], undefined);
  });

  it("should return the correct count for 'Fang'", () => {
    assert.equal(result1["Fang"], 2);
  });

  it("should return 'undefined' for 'Agouhanna'", () => {
    assert.equal(result1["Agouhanna"], undefined);
  });

});
