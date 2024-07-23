//      1
const coffee = ["americano", "latte", "mint", "choco", "vanila"];

// const lowOrUp = (x) => {
//   console.log(x.length <= 5 ? x.toLowerCase() : x.toUpperCase());
// };
coffee.forEach((x) => {
  const result = x.length <= 5 ? x.toLowerCase() : x.toUpperCase();
  console.log(result);
});

//      2
const result = coffee.some((x) => !(x.length % 2) && x.includes("n"));
console.log(result);
