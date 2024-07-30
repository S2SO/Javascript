const div = document.createElement("div");
// div.innderText or div.textContent
div.innerText = "메가커피 존맛탱";
div.style.backgroundColor = "skyblue";
document.body.appendChild(div);

//      1
// const height = prompt("박스 높이") + "px";
// const width = prompt("박스 너비") + "px";
// const color = prompt("색상");
// const content = prompt("내용");
const [height, width, color, content] = prompt(
  "박스 높이, 너비, 색상, 내용 입력"
).split(" ");
const box = document.createElement("div");
box.textContent = content;
box.style.backgroundColor = color;
box.style.width = width + "px";
box.style.height = height + "px";
document.body.appendChild(box);
