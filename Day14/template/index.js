const box = document.createElement("div");

// const name = "장원영";
// const paragraph = "럭키비키";
// box.innerHTML = `
// <div>
//   <h1>${name}</h1>
//   <p>${paragraph}<p>
//   </div>
// `;
// document.body.appendChild(box);

const data = [
  { name: "장원영", logo: "럭키비키" },
  { name: "안유진", logo: "지락실" },
  { name: "레이", logo: "엠지" },
];
data.forEach(({ name, logo }) => {
  const box = document.createElement("div");
  box.innerHTML = `
  <div>
    <h1>${name}</h1>
    <p>${logo}<p>
    </div>
  `;
  document.body.appendChild(box);
});
