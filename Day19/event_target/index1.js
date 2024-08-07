// const button = document.createElement("button");
// button.innerText = "tlswl";
// button.addEventListener("click", (e) => {
//   console.log(e.target.innerText);
// });
// document.body.append(button);

//      1
// const textInput = document.createElement("input");
// textInput.addEventListener("input", (e) => {
//   e.target.style.color = e.target.value.length >= 10 ? "red" : "black";
// });
// document.body.append(textInput);

//      2
// const textInput = document.createElement("input");
// textInput.addEventListener("input", (e) => {
//   e.target.value =
//     e.target.value.length > 10 ? e.target.value.slice(0, 10) : e.target.value;
// });
// document.body.append(textInput);

//      3
const idInput = document.createElement("input");
const lengthCount = document.createElement("div");
const button = document.createElement("button");
lengthCount.innerText = `0/20`;
button.innerText = "확인";
button.style.color = "lightgrey";
button.style.borderColor = "lightgrey";

idInput.addEventListener("input", (e) => {
  //   const length = e.target.value.length;
  const { length } = e.target.value;

  lengthCount.innerText = `${length}/20`;
  lengthCount.style.color = length > 20 || length < 6 ? "red" : "black";
  e.target.value = length >= 20 ? e.target.value.slice(0, 19) : e.target.value;

  button.style.color = length >= 6 && length <= 20 ? "black" : "lightgrey";
  button.style.borderColor = length >= 6 && length <= 20 ? "grey" : "lightgrey";
});
document.body.append(idInput);
document.body.append(lengthCount);
document.body.append(button);
