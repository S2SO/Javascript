const [amount, width, height, color] = prompt(
  "박스 개수, 너비, 높이, 배경색 입력"
).split(" ");
const [column, gap] = prompt("그리드 컬럼 개수, 갭 입력").split(" ");

const container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
container.style.gap = gap + "px";

Array(Number(amount))
  .fill()
  .forEach((x) => {
    const box = document.createElement("div");
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.backgroundColor = color;
    container.appendChild(box);
  });

document.body.appendChild(container);
