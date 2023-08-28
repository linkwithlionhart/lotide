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

  it('returns true for equal objects', () => {
    const object1 = { a: { z: 1 }, b: 2 };
    const object2 = { a: { z: 1 }, b: 2 };
    assert.isTrue(eqObjects(object1, object2));
  });

  it('returns false for unequal objects', () => {
    const object1 = { a: { y: 0, z: 1 }, b: 2 };
    const object2 = { a: { z: 1 }, b: 2 };
    assert.isFalse(eqObjects(object1, object2));
  });

  it('returns false for objects with different structures', () => {
    const object1 = { a: { y: 0, z: 1 }, b: 2 };
    const object2 = { a: 1, b: 2 };
    assert.isFalse(eqObjects(object1, object2));
  });

});
