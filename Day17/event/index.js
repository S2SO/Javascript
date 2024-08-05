const ment = document.createElement("div");
ment.innerText = "아무 버튼 안 누름";
document.body.appendChild(ment);

const makeButton = (color) => {
  const button = document.createElement("button");
  button.innerText = `${color} 버튼`;
  button.addEventListener("click", () => {
    ment.innerText = `${color} 버튼 누름`;
  });
  document.body.appendChild(button);
};
["red", "yellow", "green"].forEach((x) => makeButton(x));

// const color = ["빨간", "노란", "초록"];
// color.forEach((x) => {
//   const button = document.createElement("button");
//   button.innerText = `${x} 버튼`;
//   button.addEventListener("click", () => {
//     ment.innerText = `${x} 버튼 누름`;
//   });
//   document.body.appendChild(button);
//   document.body.appendChild(ment);
// });
