//      2
// const box1 = document.createElement("div");
// const box2 = document.createElement("div");
// box1.style.backgroundColor = "red";
// box2.style.backgroundColor = "yellow";
// box1.style.width = "100px";
// box1.style.height = "100px";
// box2.style.width = "100px";
// box2.style.height = "100px";

// document.body.appendChild(box1);
// document.body.appendChild(box2);

const container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";

["red", "yellow", "green", "blue"].forEach((x) => {
  const box = document.createElement("div");
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.backgroundColor = x;
  container.appendChild(box);
});
document.body.appendChild(container);
