// map: 새롭게 바꿀게
const arr = [1, 2, 3, 4, 5];
const allOneArr = arr.map(() => 1); // 다 1
const restArr = arr.map((x) => x % 2); // 나머지
const chickOrHam = arr.map((x) => (x % 2 ? "🍔" : "🍗")); // 홀수면 햄버거 짝수면 치킨

const menu = ["toast", "sanadwich", "taco", "pizza", "ramen", "cookie"];
//      1
const newMenu = menu.map((x) =>
  x.startsWith("t") ? x.length : x.toUpperCase()
);
console.log(newMenu);
//      2
const eggOrUp = menu.map((x) =>
  x[0] == x[x.length - 1] ? "🥚" : x.toUpperCase()
);
console.log(eggOrUp);

// filter: 걸러주기
// return값이 true이면 남고 false이면 없어짐
const arr1 = [1, 2, 3, 4, 5];
const under3 = arr1.filter((x) => x < 3);
const oddArr = arr1.filter((x) => x % 2);
console.log(oddArr);

// sort
const arr2 = [5, 2, 12, 7, 3, 9];
console.log(arr2.sort((x, y) => x - y));
