// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: [${actual}] !=== [${expected}]`);
  }
};

const tail = function(input) {
  let finalArray = [];
  for (let i = 1; i < input.length; i++) {
    finalArray.push(input[i]);
  }
  console.log(`[${finalArray}]`);
  return finalArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
tail([]);