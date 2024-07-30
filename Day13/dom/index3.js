const colors = [
  "#1abc9c",
  "#1a459c",
  "#14bc9c",
  "#1a345c",
  "#1abfgc",
  "#2bbc9c",
  "#1a56gc",
];
// 컨테이너 새로 만들기 or
// const container = document.createElement("div")
// 만든 컨테이너 가져오기
const container = document.querySelector(".container");
colors.forEach((x) => {
  const div = document.createElement("div");
  div.className = "box";
  div.style.backgroundColor = x;
  container.appendChild(div);
});
