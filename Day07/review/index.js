const bigger = (x, y) => {
  return x > y ? x : y;
};

const oddOrEven = (x) => {
  return x % 2 == 0 ? "짝수" : "홀수";
};

const squareOrDouble = (x) => {
  return x % 2 == 0 ? x * 2 : x ** 2;
};

const lengthOver6 = (x) => {
  return String(x).length > 6 ? "🥕" : "🍅";
};

console.log(bigger(2, 10));
console.log(oddOrEven(6));
console.log(squareOrDouble(4));
console.log(lengthOver6("hello"));
