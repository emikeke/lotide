// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: [${actual}] !=== [${expected}]`);
  }
};

const countLetters = function(sentence) {
  const finalAnswer = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!(finalAnswer[sentence[i]])) {
      finalAnswer[sentence[i]] = 1;
    } else
      finalAnswer[sentence[i]]++;
  }
  return finalAnswer;
};

// TEST CODE
//console.log(countLetters("lighthouse"));

module.exports = countLetters;