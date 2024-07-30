function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min); // 최댓값은 제외, 최솟값은 포함
}
// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }
// const colors = Array(200)
//   .fill()
//   .map((x) => getRandomColor());
// console.log(colors);

const hex = [..."123456789abcdef"];
const makeColor = () =>
  "#" +
  Array(6)
    .fill()
    .map((v) => hex[getRandomInt(0, hex.length)])
    .join("");
const colors = Array(200)
  .fill()
  .map((x) => makeColor());
const container = document.querySelector(".container");
colors.forEach((x) => {
  const div = document.createElement("div");
  div.className = "box";
  div.style.backgroundColor = x;
  container.appendChild(div);
});
