const eqObjects = require('../eqObjects');
const { describe } = require('mocha');
const assert = require('chai').assert;

// Apply tests
describe('#eqObjects', () => {

  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };

  it('returns true for equal shirt objects', () => {
    assert.isTrue(eqObjects(shirtObject, anotherShirtObject));
  });

  it('returns false for unequal shirt objects', () => {
    assert.isFalse(eqObjects(shirtObject, longSleeveShirtObject));
  });

  it('returns true for equal multi color shirt objects', () => {
    assert.isTrue(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
  });

  it('returns false for unequal multi color shirt objects', () => {
    assert.isFalse(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));
  });

});
