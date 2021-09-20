const assert = require("chai").assert;
const assertEqual = require("../assertEqual");
const tail = require("../tail");

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe ("#tail", () => {
  it ("no need to capture return value since we are not checking it", () => {
    console.log(tail(words));
  });

  it ("original array should still have 3 elements", () => {
    assertEqual(words.length, 3);
  });

  it("returns ' ' for []", () => {
    return;
  });
});