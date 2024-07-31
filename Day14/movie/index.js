// const seatBox = document.createElement("section");

// seatBox.style.display = "grid";
// seatBox.style.gridTemplateColumns = "repeat(10,1fr)";
// const col = [..."ABCDEFGHIJKL"];
// const row = [..."123456789"];
// row.push("10");

// const seatNumber = col.map((alpha) => row.map((num) => alpha + num));

// seatNumber.forEach((arr) =>
//   arr.forEach((v) => {
//     const box = document.createElement("div");
//     box.style.width = "40px";
//     box.style.height = "40px";
//     box.style.display = "flex";
//     box.style.alignItems = "center";
//     box.style.justifyContent = "center";
//     box.innerText = v;

//     if ([..."ABCD"].some((x) => v.includes(x))) {
//       box.style.border = "1px solid orange";
//     } else if ([..."EFGHI"].some((x) => v.includes(x))) {
//       box.style.border = "1px solid lightgreen";
//     } else if ([..."JKL"].some((x) => v.includes(x))) {
//       box.style.border = "1px solid red";
//     }
//     seatBox.appendChild(box);
//   })
// );
// document.body.appendChild(seatBox);

//

const seatBox = document.createElement("section");
const row = [..."ABCDEFGHIJKL"];

Array(row.length)
  .fill()
  .forEach((v, l) => {
    const line = document.createElement("span");
    line.style.display = "flex";
    Array(11)
      .fill()
      .forEach((x, i) => {
        const box = document.createElement("p");
        box.style.width = "17px";
        box.style.height = "17px";
        box.style.textAlign = "center";
        box.innerText = i ? i : row[l];
        box.style.border = "2px solid lightgrey";
        box.style.backgroundColor = i == 0 ? "" : "#555";
        box.style.color = i == 0 ? "" : "white";
        box.style.margin = "1px";

        if (i == 0) {
        } else if (l + 1 < 4) {
          box.style.borderColor = "orange";
        } else if (l + 1 < 9) {
          box.style.borderColor = "lightgreen";
        } else {
          box.style.borderColor = "red";
        }
        line.appendChild(box);
      });
    seatBox.appendChild(line);
  });
document.body.appendChild(seatBox);
