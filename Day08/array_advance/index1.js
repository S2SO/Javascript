// object
const starbucks = [
  { name: "아메리카노", price: 4500, kcal: 1 },
  { name: "카페 라떼", price: 5500, kcal: 180 },
  { name: "카페 모카", price: 6000, kcal: 290 },
  { name: "프라푸치노", price: 6000, kcal: 145 },
  { name: "자바 칩 프라푸치노", price: 5500, kcal: 390 },
];

// // map
// const upThou = starbucks.map((x) => {
//   x.price += 1000;
//   return x;
// });

// // map
// const sale = starbucks.map((x) => {
//   // if(x.name.includes("프라푸치노")){
//   //     x.price = x.price*0.7
//   // }
//   x.price = x.name.includes("프라푸치노") ? x.price * 0.7 : x.price;
//   return x;
// });

// //
// const diet = starbucks.map((x) => {
//   x.price = x.kcal < 200 ? x.price - 1000 : x.price + 1000;
//   return x;
// });

// //
// const zero = starbucks.map((x) => {
//   x.name = "제로 " + x.name;
//   x.kcal = 0;
//   return x;
// });

// filter
const onlyFra = starbucks.filter((x) => x.name.includes("프라푸치노"));
const under5000 = starbucks.filter((x) => x.price <= 5000);
const under200over5000 = starbucks.filter(
  (x) => x.kcal <= 200 && x.price > 5000
);

console.log(under200over5000);
