// Math problem
let x = 10;
let y = 25;

document.getElementById("output").innerText = x + y;

//grocery list
const favFood = ["Burgers", "Milk", "Banana", "Apple", "Fries"];
console.log(favFood);
favFood.shift();
console.log();
const index = favFood.indexOf("Apple");
if (index !== -1) {
    favFood.splice(index, 1); 
  }

  document.getElementById("array").innerText = favFood;
