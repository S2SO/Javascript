const box = document.createElement("div");
box.style.width = "100px";
box.style.height = "100px";
box.style.backgroundColor = "white";
box.style.borderRadius = "0px";
box.style.border = "1px solid black";

const size = document.createElement("button");
size.innerText = "크게";
size.addEventListener("click", () => {
  size.innerText = size.innerText === "크게" ? "작게" : "크게";
  box.style.width = box.style.width === "200px" ? "100px" : "200px";
  box.style.height = box.style.height === "200px" ? "100px" : "200px";
});

const color = document.createElement("button");
color.innerText = "하양";
color.addEventListener("click", () => {
  color.innerText = color.innerText === "검정" ? "하양" : "검정";
  box.style.backgroundColor =
    box.style.backgroundColor === "white" ? "black" : "white";
});

const border = document.createElement("button");
border.innerText = "둥글게";
border.addEventListener("click", () => {
  border.innerText = border.innerText === "둥글게" ? "각지게" : "둥글게";

  box.style.borderRadius = box.style.borderRadius === "0px" ? "50%" : "0px";
});

document.body.appendChild(size);
document.body.appendChild(color);
document.body.appendChild(border);
document.body.appendChild(box);
