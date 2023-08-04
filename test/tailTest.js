// MODULE: REQUIRE
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// Test code from tail.js
// Test Case 1: Checking the returned array and original array
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(["Hello", "Lighthouse", "Labs"].length, 3); // Should pass

// Test Case 2: Checking if the original array remains unmodified
const words = ["Yo Yo", "Lighthouse", "Labs"];
const wordsResult = tail(words);
assertEqual(wordsResult.length, 2); // ensure we get back two elements
assertEqual(wordsResult[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(wordsResult[1], "Labs"); // ensure second element is "Labs"
assertEqual(words.length, 3); // Should pass

// Test Case 3: An array with only one element should yield an empty array for its tail
const singleElement = ["Hello"];
const singleResult = tail(singleElement);
assertEqual(singleResult.length, 0); // ensure we get back no elements
assertEqual(singleElement.length, 1); // Should pass

// Test Case 4: An empty array should yield an empty array for its tail
const emptyArray = [];
const emptyResult = tail(emptyArray);
assertEqual(emptyResult.length, 0); // ensure we get back no elements
assertEqual(emptyArray.length, 0); // Should pass
