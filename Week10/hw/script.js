// Task 1
alert("Hello World!");
console.log("My first JavaScript assignment");
document.getElementById("output").innerText = "I just modified this element with JavaScript";

// Task 2
let Name = "Yang Zou";
let Age = 20;
let Num = 4.28;
console.log(`Hi I am  ${Name},  ${Age} years old. My favorite number is ${Num} because it is my bithday.`);

// Task 3
function calculate(x, y) {
  console.log(`this is the caculate result of ${x} and ${y}`)
  console.log(`Sum: ${x + y}`);
  console.log(`Difference: ${x - y}`);
  console.log(`Product: ${x * y}`);
  console.log(`Quotient: ${x / y}`);
}
calculate(4, 28);
calculate(6, 8);
calculate(20, 25);

// Task 4
function fahrenheitToCelsius(f) {
  let c = (f - 32) * 5 / 9;
  alert(`${f}°F is ${c}°C`);
}

function celsiusToFahrenheit(c) {
  let f = c * 9 / 5 + 32;
  alert(`${c}°C is ${f}°F`);
}

// Task 5
function strTrans(str) {
  let upperCase = str.toUpperCase();
  let len = str.length;
  alert(`The uppercase of the string: ${upperCase}, and its length is ${len}`)
  return `The uppercase of the string: ${upperCase}, and its length is ${len}`;
}

// Task 6
let isLightOn = true;

function toggleLight() {
    if (isLightOn) {
        isLightOn = false;
        document.getElementById("lightStatus").innerText = "Light is OFF";
      } else {
        isLightOn = true;
        document.getElementById("lightStatus").innerText = "Light is ON";
      }
}

// Task 7
function countByTwo(num) {
  let output = "";
  for (let i = 0; i <= num; i += 2) {
    output += i;
    output += "";
  }
  document.getElementById("loop").innerText = output;
}
