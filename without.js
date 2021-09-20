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

const without = function(source, itemsToRemove) {
  let sourceRemainder = [];
  for (let sourceIdx = 0; sourceIdx < source.length; sourceIdx++) {
    let itemBoolean = false;
    for (let itemsToRemoveIdx = 0; itemsToRemoveIdx < itemsToRemove.length; itemsToRemoveIdx++){
      if (source[sourceIdx] === itemsToRemove[itemsToRemoveIdx]) {
        itemBoolean = true;
        break;
      } else 
        itemBoolean !== false;
    }
    if (!itemBoolean) {
      sourceRemainder.push(source[sourceIdx]);
    }
  }
  return sourceRemainder;
};

module.exports = without;