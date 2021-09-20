const assertEqual = require("./assertEqual");

const head = function (input) {
  if (input.length > 0) {
    console.log(input[0]);
    return input[0];
  } else
    return console.log(`undefined`);
};

module.exports = head;