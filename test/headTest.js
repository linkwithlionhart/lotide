// MODULE: REQUIRE
const assertEqual = require('../assertEqual');
const head = require('../head');

// Test code from head.js
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1); // Array with one element
assertEqual(head([]), undefined); // Empty array
