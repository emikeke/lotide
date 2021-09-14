
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
