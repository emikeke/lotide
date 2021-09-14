// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: [${actual}] !=== [${expected}]`);
  }
};

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

// TEST CODE
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false