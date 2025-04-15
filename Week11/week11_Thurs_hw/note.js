const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const forOfResult = document.getElementById("for-of-result");
for (const cat of cats) {
  const li = document.createElement("li");
  li.textContent = cat;
  forOfResult.appendChild(li);
}

const doWhileResult = document.createElement("pre");
let i = 0;
let doWhileText = "";
do {
  if (i === cats.length - 1) {
    doWhileText += `and ${cats[i]}.`;
  } else {
    doWhileText += `${cats[i]}, `;
  }
  i++;
} while (i < cats.length);
document.body.appendChild(document.createElement("h2")).textContent = "do...while loop";
document.body.appendChild(doWhileResult).textContent = doWhileText;
