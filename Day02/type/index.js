// 문자 -> 숫자
// Number("문자"), parseInt("문자")

// const num = Number("100");
const num1 = window.prompt("첫 번째 숫자 입력");
const num2 = window.prompt("두 번째 숫자 입력");
const sum = Number(num1) + Number(num2);
window.alert(`두 수의 합: ${sum}`);

// const first = parseInt("180");

// 숫자 -> 문자
// 1. String(숫자)
const str = String(100);

// 2. "" + anyType
const str1 = 100 + "";

//불리언 타입(true or false)
const bool = true;
const bool1 = false;
const bool2 = "true";
const bool3 = "false";

// truly value: falsy 빼고 다
// falsy value: "", 0, -0, null, undefind
const i = Boolean(""); //false

// Null 타입(비어있음)
// Undefind 타입(정의 되지 않음)
