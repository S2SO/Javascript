// ... 연산자
// 1. spread 연산자
// String
const arr = [..."latte"]; // l, a, t, t, e

// Array
const arr2 = [...arr, "a", "b", "c"]; // l, a, t, t, e, a, b, c

// Object
const obj1 = { a: 1, b: 2, c: 3 };
const obj2 = { ...obj1, d: 4 }; // a: 1, b: 2, c: 3 d:4

// 2. rest 연산자
// Array일 때
// const num = [1,2,3,4,5]
// const [one, ...rest] = num //rest: [2,3,4,5]

// Object일 때
const coffee = { name: "coffee", price: 3000, shot: 2 };
const { price, ...rest } = coffee;
// price->3000 / rest->{name:"coffee" ,shot:2}
