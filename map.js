const callback = function(word){
  return word[0];
}

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//const results1 = map(words, word => word[0]);
//console.log(results1);

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
  //console.log((Boolean(arrayEqual)));
  return (Boolean(arrayEqual));
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

//TEST CASES

const words = ["ground", "control", "to", "major", "tom"];
const words2 = ["hello", "thanks", "welcome", "bye", "farewell"];
const words3 = ["humanities", "biology", "health", "psychology", "math"];

//console.log(map(words, callback));
console.log(assertArraysEqual(map(words, callback), [ 'g', 'c', 't', 'm', 't' ]));
console.log(assertArraysEqual(map(words2, callback), [ 'h', 't', 'w', 'b', 'f' ]));
console.log(assertArraysEqual(map(words3, callback), [ 'h', 'b', 'h', 'p', 'm' ]));