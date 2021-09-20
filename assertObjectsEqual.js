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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      if (!(eqArrays(object1[key], object2[key]))){
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  return eqObjects(actual, expected);
};

//const cd = { c: "1", d: ["2", 3] };
//const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects(cd, dc)); // => true

//const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects(cd, cd2)); // => false

module.exports = assertObjectsEqual;