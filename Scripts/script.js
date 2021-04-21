"use strict";
let binary = true;
let decimal = false;

//CONVERSION
document.getElementById("convert-button").addEventListener("click", event => {
  const input = document.getElementById("input");
  console.log(input.value);
  if(input.value) {
    binary ? checkIfBinary(input.value): decimalToBinary(input.value);
  }
  else {
    input.placeholder = "ERROR: Enter a number.";
  }
  console.log(event.target);
});

let checkIfBinary = input => {
  const regexBinary = /^[0-1]{1,}$/g;
  if(regexBinary.test(input)) {
    binaryToDecimal(input);
    console.log(true);
  }
  else {
    console.log(false);
    document.getElementById("input").value = "";
    document.getElementById("input").placeholder = "Error: Enter a Binary number(0, 1)";
  }
};

const binaryToDecimal = binary => {
  const decimalConversion = parseInt(binary, 2).toString(10);
  document.getElementById("calcResult").value = decimalConversion;
  console.log(decimalConversion);
};

const decimalToBinary = decimal => {
  const binaryConversion = (decimal >>> 0).toString(2);
  document.getElementById("calcResult").value = binaryConversion;
  console.log(binaryConversion);
};

//RESET
const formReset = () => {
  document.getElementById("calcForm").reset(); 
  document.getElementById("input").placeholder = "";
};

document.getElementById("reset-button").addEventListener("click", formReset);

//SWAP
document.getElementById("swap-button").addEventListener("click", () => {
  formReset();
  if(binary) {
    binary = false;
    decimal = true;
    document.getElementById("header-title").innerHTML = "Decimal to Binary Converter";
    document.getElementById("input-label").innerHTML = "Enter Decimal Number.";
    document.getElementById("result-label").innerHTML = "Binary Result";
    document.title = "Decimal to Binary Converter";
  }
  else {
    binary = true;
    decimal = false;
    document.getElementById("header-title").innerHTML = "Binary to Decimal Converter";
    document.getElementById("input-label").innerHTML = "Enter Binary Number.";
    document.getElementById("result-label").innerHTML = "Decimal Result";
    document.title = "Binary to Decimal Converter";
  }
});