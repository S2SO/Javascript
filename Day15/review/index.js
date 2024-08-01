const container = document.createElement("section");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(6, 1fr)";
container.style.gap = "10px";

const makeSeats = () =>
  Array(6 * 16)
    .fill()
    .map((v, i) => ({
      col: makeColumn(i),
      row: makeRow(i),
      state: makeState(i),
    }));

const makeColumn = (x) => [..."ABCDEF"][x % 6];
const makeRow = (x) => parseInt(x / 6) + 1;
const makeState = (i) => {
  const x = parseInt(i / 6);
  const stateMap = {
    red: [0, 14],
    blue: [1, 2, 3, 4],
    green: [5, 6, 7, 8, 9, 10, 11, 12, 13],
    pink: [15, 16],
  };
  const color = Object.keys(stateMap).find((v) => stateMap[v].includes(x));
  return color;
};
console.log(makeSeats());

// const makeState = (i) => {
//     const x = parseInt(i / 6);
//     const redLine = (x <= 2 || x >= 15) && "red";
//     const blueLine = x >= 3 && x <= 5 && "blue";
//     const greenLine = x >= 6 && x <= 14 && "yellowgreen";
//     return redLine || blueLine || greenLine;
//   };

// self

// const col = [..."ABCDEF"];
// const row = Array(16)
//   .fill()
//   .map((x, i) => i + 1);

// const seatInfo = row.map((r) => col.map((c) => ({ col: c, row: r })));

// const makeColor = (s) => {
//   if (s.row <= 2 || s.row >= 15) s.color = "Red";
//   else if (s.row >= 3 && s.row <= 5) s.color = "blue";
//   else if (s.row >= 6 && s.row <= 14) s.color = "yellowgreen";

//   return s.color;
// };

// console.log([seatInfo].join(""));

// seatInfo.forEach((x) => {
//   x.forEach((v) => {
//     const seat = document.createElement("div");
//     seat.className = "seat";
//     seat.innerText = v.col + v.row;
//     seat.style.borderColor = makeColor(v);

//     container.appendChild(seat);
//   });
// });
// document.body.appendChild(container);
