const eqArrays = require("./eqArrays");

const assertArraysEqual = function(input, input2) {
  return eqArrays(input, input2);
};

module.exports = assertArraysEqual;