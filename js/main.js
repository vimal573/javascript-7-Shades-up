function randompickerbtn() {
  const randomVal = "0123456789ABCDEF";
  let randomHex = "#";

  for (let i = 0; i < 6; i++) {
    randomHex += randomVal[Math.floor(Math.random() * 16)];
  }

  document.getElementById("randomValuePara").textContent = randomHex;
  document.getElementById("randomPicker").style.backgroundColor = randomHex;
}

function hexFindbtn() {
  const colorHex = document.getElementById("hexInput").value;

  document.getElementById("color-box").style.backgroundColor = colorHex;
}

function RGBFindbtn() {
  const red = document.getElementById("RInput").value;
  const green = document.getElementById("GInput").value;
  const blue = document.getElementById("BInput").value;

  document.getElementById(
    "rgb-color-box"
  ).style.backgroundColor = `rgb(${red},${blue},${green})`;
}

function RangeSelector() {
  const rangeRed = document.getElementById("RrInput").value;
  const rangeGreen = document.getElementById("GrInput").value;
  const rangeBlue = document.getElementById("BrInput").value;

  document.getElementById(
    "range-color-box"
  ).style.backgroundColor = `rgb(${rangeRed},${rangeGreen}, ${rangeBlue})`;
}

// hex to rgb converter

String.prototype.convertToRGB = function () {
  const hexColor = document.getElementById("hexCInp").value;

  let hexVal;

  const hexArray = [
    hexColor.slice(0, 2),
    hexColor.slice(2, 4),
    hexColor.slice(4, 6),
  ];

  if (!(hexColor.length === 6)) return;

  const rgbValue = hexArray.map((hex, i) => {
    let rgb = 0;

    [...hex].reverse().forEach((el, i) => {
      if (el === "a" || el === "A") hexVal = 10;
      else if (el === "b" || el === "B") hexVal = 11;
      else if (el === "c" || el === "C") hexVal = 12;
      else if (el === "d" || el === "D") hexVal = 13;
      else if (el === "e" || el === "E") hexVal = 14;
      else if (el === "f" || el === "F") hexVal = 15;
      else hexVal = +el;

      rgb = rgb + hexVal * 16 ** i;
    });

    return rgb;
  });

  document.getElementById("hexCOut").textContent = `rgb(${rgbValue})`;
};

function hexConvbtn() {
  const hexColor = document.getElementById("hexCInp").value;

  hexColor.convertToRGB();
}

function rgbConvbtn() {
  const rcInput = document.getElementById("RCInput").value;
  const gcInput = document.getElementById("GCInput").value;
  const bcInput = document.getElementById("BCInput").value;

  const hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  let hexColor = [];

  function getHexValue(value) {
    let firstInt = Math.floor(value / 16);
    hexColor.push(hexArray[firstInt]);
    let secondInt = value % 16;
    hexColor.push(hexArray[secondInt]);
  }

  getHexValue(rcInput);
  getHexValue(gcInput);
  getHexValue(bcInput);

  console.log(hexColor.join(""));

  document.getElementById("rgbCOut").textContent = `#${hexColor.join("")}`;
}
