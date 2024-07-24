// ... 의 역할
// 1. String -> Array
const a = "coffee".split("");
const b = [..."coffee"];
console.log(b);

const alpha = [..."abCdeFGHijklM"];
const small = alpha.filter((x) => x === x.toLowerCase());
const change = alpha.map((x) =>
  x === x.toLowerCase() ? x.toUpperCase() : x.toLowerCase()
);

console.log(change);

// 2. 배열을 찢음
const fruits = ["tomato", "mango", "melon", "apple"];
const a0 = fruits; // 배열 그대로
const [a1, b1] = fruits; // tomato, mango
const [a2, ...rest] = fruits; //tomato, [mango, melon, apple]
console.log(rest[2]); //apple
