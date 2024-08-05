const number = document.createElement("span");
const plus = document.createElement("button");
const minus = document.createElement("button");

number.innerText = "0";
plus.innerText = "+";
minus.innerText = "-";

plus.addEventListener("click", () => {
  number.innerText =
    Number(number.innerText) == 10
      ? Number(number.innerText)
      : Number(number.innerText) + 1;
  number.style.color = Number(number.innerText) === 10 ? "red" : "black";
});
minus.addEventListener("click", () => {
  number.innerText =
    Number(number.innerText) > 0
      ? Number(number.innerText) - 1
      : Number(number.innerText);
  number.style.color = Number(number.innerText) === 10 ? "red" : "black";
});

document.body.appendChild(minus);
document.body.appendChild(number);
document.body.appendChild(plus);
