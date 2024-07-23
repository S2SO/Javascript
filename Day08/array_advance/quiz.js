const products = [
  { name: "apple", price: 200 },
  { name: "banana", price: 300 },
  { name: "peach", price: 350 },
];
console.log(
  products.map((x) => {
    x.priceWithTax = 220;
    return x;
  })
);

const starbucks = [
  { name: "아메리카노", price: 4500, kcal: 1 },
  { name: "카페 라떼", price: 5500, kcal: 180 },
  { name: "카페 모카", price: 6000, kcal: 290 },
  { name: "프라푸치노", price: 6000, kcal: 145 },
  { name: "자바 칩 프라푸치노", price: 5500, kcal: 390 },
];
const addMilk = starbucks.map((x) => {
  x.hasMilk =
    x.name.includes("라떼") || x.name.includes("프라푸치노") ? true : false;
  return x;
});

console.log(addMilk);
