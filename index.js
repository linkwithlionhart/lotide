// Importing utility functions from other modules.
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const head = require('./head');
const middle = require('./middle');
const tail = require('./tail');

// Aggregating the imported functions into an object to be exported.
module.exports = {
  assertArraysEqual, // Function to assert if two arrays are equal
  assertEqual,       // Function to assert if two primitive values are equal
  eqArrays,          // Function to check if two arrays are equal
  head,              // Function to retrieve the first element of an array
  middle,            // Function to retrieve the middle element(s) of an array
  tail               // Function to retrieve all but the first element of an array
};
