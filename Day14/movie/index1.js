const teater = document.createElement("section");
teater.className = "teater";

const seatNumber = [..."ABCDEFGHIJKL"].map((col) =>
  [..."123456789"].map((row) => col + row)
);
console.log(seatNumber);

const seatsLevel = (v) => {
  if ([..."ABCD"].some((x) => v.includes(x))) return `seat front`;
  else if ([..."EFGHI"].some((x) => v.includes(x))) return `seat middle`;
  else if ([..."JKL"].some((x) => v.includes(x))) return `seat back`;
};

const makeSeat = (x) => {
  const seat = document.createElement("div");
  seat.innerText = x;
  seat.className = seatsLevel(x);
  return seat;
};

seatNumber.forEach((col) =>
  col.forEach((row) => teater.appendChild(makeSeat(row)))
);
document.body.appendChild(teater);
