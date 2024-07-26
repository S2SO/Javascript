// reduce: 누적시키다.

// accumulaton: 누적
// current: 원래 x
// 0: acc의 스타트 값
[1, 2, 3, 4].reduce((acc, cur) => {
  return acc + cur;
}, 0);

const sum = Array(101)
  .fill()
  .map((x, i) => i)
  .reduce((acc, cur) => acc + cur, 0);
console.log(sum);

// array -> string
const a = [..."hello"].join();
const b = [..."hello"].join("");

console.log(["AAA", "BBB", "CCC", "DDD"].map((x) => x.toLowerCase()));

const word = "abstract Algebra";
// const result = [...word]
//   .map((x) => (x == "a" || x == "A" ? "A" : x.toLowerCase()))
//   .join("");
const result1 = [...word]
  .map((x) =>
    [..."aA"].some((v) => x === v) ? x.toUpperCase() : x.toLowerCase()
  )
  .join("");
console.log(result1);
