const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

const middle = function(array) {
  let arrayLength = array.length;
  let middleIdx = arrayLength / 2;
  if (arrayLength <= 2) {
    return [];
  }
  if (arrayLength % 2 === 0) {
    return array.slice(middleIdx - 1, middleIdx + 1);
  } else {
    return array.slice(Math.floor(middleIdx), Math.floor(middleIdx + 1));
  }
};

module.exports = middle;