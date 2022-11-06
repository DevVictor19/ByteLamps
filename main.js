"use strict";

const lamps = document.querySelectorAll(".lamp");
const form = document.getElementById("actions-form");
const inputText = document.getElementById("actions-input");
const display = document.getElementById("actions-display");
const switchSound = new Audio("assets/click.mp3");

// events
inputText.addEventListener("input", handleInput);
form.addEventListener("submit", handleSubmit);

// events handlers
function handleInput(event) {
  const currentValue = event.target.value;
  let parsedValue = +makeStringWithOnlyNumbers(currentValue);

  if (parsedValue > 255) {
    parsedValue = 255;
    inputText.value = parsedValue;
  } else {
    inputText.value = parsedValue;
  }

  const byteArr = parseByte(parsedValue);

  controlDisplay(byteArr);
  controlLampsLightAndSound(byteArr);
}

function handleSubmit(event) {
  event.preventDefault();
}

// UI control
function controlLampsLightAndSound(byteArr) {
  byteArr.forEach((bit, index) => {
    lamps[index].classList.remove("--lamp-on");

    if (bit === 1) {
      lamps[index].classList.add("--lamp-on");
      switchSound.load();
      switchSound.play();
    }
  });
}

function controlDisplay(byteArr) {
  const displayContent = byteArr.join("");

  if (+displayContent != 0) {
    display.style.display = "block";
    display.textContent = `Byte: ${displayContent}`;
  } else {
    display.style.display = "none";
  }
}

// utilities functions
function makeStringWithOnlyNumbers(str) {
  return str.replace(/\D/g, "");
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
