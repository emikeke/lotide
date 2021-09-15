const eqArrays = function(input, input2) {
  if (input.length !== input2.length) {
    return false;
  }
  let arrayEqual = true;
  for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
    if (input[inputIndex] === input2[inputIndex]) {
      arrayEqual &= true;
    } else
      arrayEqual &= false;
  }
  return Boolean(arrayEqual);
};

const assertArraysEqual = function(input, input2) {
  if (input.length !== input2.length) {
    return false;
  }
  let arrayEqual = true;
  for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
    if (input[inputIndex] === input2[inputIndex]) {
      arrayEqual &= true;
    } else
      arrayEqual &= false;
  }
  console.log((Boolean(arrayEqual)));
  return (Boolean(arrayEqual));
};

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

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]