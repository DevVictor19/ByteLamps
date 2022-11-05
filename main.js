"use strict";

const form = document.getElementById("decimal-form");
const input = document.getElementById("decimal-input");
const lights = document.querySelectorAll(".light");
const bits = document.querySelectorAll(".bit");

form.addEventListener("submit", handleInput);
input.addEventListener("input", handleInput);

function handleSubmit(event) {
  event.preventDefault();
  controlLights(parseByte(+event.target[0].value));
}

function handleInput(event) {
  controlLights(parseByte(+event.target.value));
}

function controlLights(byteArr) {
  byteArr.forEach((bit, index) => {
    lights[index].classList.remove("--light-on");
    bits[index].textContent = "0";

    if (bit === 1) {
      lights[index].classList.add("--light-on");
      bits[index].textContent = "1";
    }
  });
}

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
