const tail = function(input) {
  let finalArray = [];
  for (let i = 1; i < input.length; i++) {
    finalArray.push(input[i]);
  }
  console.log(`[${finalArray}]`);
  return finalArray;
};

module.exports = tail;