const takeUntil = function(array, callback){
  const results =[];
    for (const element of array) {
      if (callback(element)){
        break;
      }
      results.push(element);
    }
    return results;
};

/*const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);*/

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

//console.log(assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2 ]));

module.exports = takeUntil;