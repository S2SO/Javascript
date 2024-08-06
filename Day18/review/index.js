const [fName, sName, tName, fPrice, sPrice, tPrice] =
  prompt("품목 3개와 가격 입력").split(" ");

const makeItem = (name, price) => {
  const itemName = document.createElement("div");
  const itemPrice = document.createElement("div");
  const number = document.createElement("span");
  const plus = document.createElement("button");
  const minus = document.createElement("button");

  itemName.innerText = name;
  itemPrice.innerText = price;
  number.innerText = "0";
  plus.innerText = "+";
  minus.innerText = "-";

  plus.addEventListener("click", () => {
    number.innerText = Number(number.innerText) + 1;
    total.innerText = Number(total.innerText) + Number(itemPrice.innerText);
  });
  minus.addEventListener("click", () => {
    if (Number(number.innerText) == 0) {
      number.innerText = 0;
    } else {
      number.innerText = Number(number.innerText) - 1;
      total.innerText = Number(total.innerText) - Number(itemPrice.innerText);
    }
    // number.innerText =
    //   Number(number.innerText) == 0
    //     ? total.innerText
    //     : Number(number.innerText) - 1;
    // total.innerText =
    //   number.innerText === "0"
    //     ? total.innerText
    //     : Number(total.innerText) - Number(itemPrice.innerText);
  });
  document.body.appendChild(itemName);
  document.body.appendChild(itemPrice);
  document.body.appendChild(minus);
  document.body.appendChild(number);
  document.body.appendChild(plus);
};

makeItem(fName, fPrice);
makeItem(sName, sPrice);
makeItem(tName, tPrice);

const total = document.createElement("div");
total.innerText = "0";
document.body.appendChild(total);
