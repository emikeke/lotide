// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertation Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑 Assertation Failed: [${actual}] !=== [${expected}]`);
  }
};

const findKey = function(object1, callback) {
  for (let key of Object.keys(object1)){
    if (callback(object1[key])){
      return key;
    }
  }
  return `undefined`;
};

/*console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma")); // => "noma"*/

module.exports = findKey;