const icecream = ["mint", "choco", "banana"];
// const toUpper = (x) => {
//   console.log(x.toUpperCase());
// };
// icecream.forEach(toUpper);

// console.log(
//   icecream.some((x) => {
//     return x.includes("a");
//   })
// );

const fruits = [
  "apple",
  "peach",
  "tomato",
  "plum",
  "pear",
  "durian",
  "grape",
  "lemon",
];
//     1
// const result2 = fruits.some((x) => {
//   return x.length == 4 && x.includes("r");
// });
const result2 = fruits.some((x) => x.length == 4 && x.includes("r"));

//      2
// const result3 = fruits.some((x) => {
//   return x.length % 2 && x.startsWith("p");
// });
const result3 = fruits.some((x) => x.length % 2 && x.startsWith("p"));

const isLength5 = (x) => x.length === 5;

//      3
// const result4 = fruits.some((x) =>
//   x.startsWith("a" || "e" || "i" || "u" || "o")
// );
const vowels = ["a", "e", "i", "u", "o"];
const result4 = fruits.some((fruit) => vowels.some((x) => fruit.startsWith(x)));

//      4
const characters = ["k", "b", "s"];
const result5 = fruits.some((fruit) =>
  characters.some((word) => fruit.includes(word))
);

//      5
// const news = prompt("뉴스 기사 입력").split(" ");
const news =
  `Documentary film "And When the Magnolias Bloom" is about the lives of ex-President Park Chung-hee and First Lady Yuk Young-soo.
`.split(" ");
const words = prompt("찾고 싶은 단어들 입력").split(" ");
const result6 = news.some((newsWord) =>
  words.some((x) => newsWord.includes(x))
);
console.log(`해당 단어를 ${result6 ? "포함합니다." : "포함하지 않습니다."}`);
