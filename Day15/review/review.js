const container = document.createElement("section");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(6, 1fr)";
container.style.gap = "10px";
const col = [..."ABCDEF"];
const row = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16".split(",");

const seatNumber = row.map((x) => col.map((v) => x + v));
console.log(seatNumber);
const seatColor = (v) => {
  if (
    [..."ABC"].some((a) => v == "1" + a) ||
    [..."DEF"].some((a) => v == "2" + a) ||
    (parseInt(v) >= 15 && parseInt(v) <= 16)
  ) {
    return "red";
  } else if (
    [..."ABC"].some((a) => v == "2" + a) ||
    (parseInt(v) >= 3 && parseInt(v) <= 5)
  ) {
    return "blue";
  } else if (parseInt(v) >= 6 && parseInt(v) <= 14) return "yellowgreen";
};

seatNumber.forEach((x) => {
  x.forEach((v) => {
    const seat = document.createElement("div");
    seat.className = "seat";
    seat.innerText = v;
    seat.style.borderColor = seatColor(v);

    container.appendChild(seat);
  });
});
document.body.appendChild(container);
