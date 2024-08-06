const container = document.createElement("section");
const pallete = document.createElement("div");
const pick = document.createElement("div");

container.style.display = "flex";
container.style.gap = "10px";
container.style.alignItems = "center";
pallete.style.display = "grid";
pallete.style.gridTemplateColumns = "repeat(5,1fr)";
pick.style.width = "100px";
pick.style.height = "100px";
pick.style.border = "2px solid black";

const colors =
  "black grey red orange yellow white lightgrey brown pink skyblue".split(" ");

colors.forEach((color) => {
  const box = document.createElement("span");
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.backgroundColor = color;
  box.style.border = "1px solid black";

  box.addEventListener("click", () => {
    pick.style.backgroundColor = color;
  });
  box.addEventListener("mouseover", () => {});

  pallete.appendChild(box);
});

const scaleUp = document.createElement("button");
const scaleDown = document.createElement("button");
scaleUp.innerText = "+";
scaleDown.innerText = "-";

scaleUp.addEventListener("click", () => {
  pick.style.width =
    parseInt(pick.style.width) == 200
      ? pick.style.width
      : parseInt(pick.style.width) + 10 + "px";
  pick.style.height =
    parseInt(pick.style.height) == 200
      ? pick.style.height
      : parseInt(pick.style.height) + 10 + "px";
});
scaleDown.addEventListener("click", () => {
  pick.style.width =
    parseInt(pick.style.width) == 30
      ? pick.style.width
      : parseInt(pick.style.width) - 10 + "px";
  pick.style.height =
    parseInt(pick.style.height) == 30
      ? pick.style.height
      : parseInt(pick.style.height) - 10 + "px";
});
container.appendChild(scaleUp);
container.appendChild(scaleDown);

container.appendChild(pick);
container.appendChild(pallete);
document.body.appendChild(container);
