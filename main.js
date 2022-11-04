"use strict";

const form = document.getElementById("main-form");

form.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const inputValue = Number(ev.target[0].value);

  console.log(parseByte(inputValue));
});

function parseByte(decimal) {
  const result = [0, 0, 0, 0, 0, 0, 0, 0];
  let total = decimal;

  if (total >= 128) {
    result[0] = 1;
    total -= 128;
  }

  if (total >= 64) {
    result[1] = 1;
    total -= 64;
  }

  if (total >= 32) {
    result[2] = 1;
    total -= 32;
  }

  if (total >= 16) {
    result[3] = 1;
    total -= 16;
  }

  if (total >= 8) {
    result[4] = 1;
    total -= 8;
  }

  if (total >= 4) {
    result[5] = 1;
    total -= 4;
  }

  if (total >= 2) {
    result[6] = 1;
    total -= 2;
  }

  if (total >= 1) {
    result[7] = 1;
    total -= 1;
  }

  return result;
}
