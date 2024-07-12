const coffeeType = window.prompt("무슨 커피?");
const coffeeAmount = window.prompt("몇 샷?");
const result = parseInt(coffeeAmount) >= 3 ? `진하게` : `연하게`;
window.alert(`${coffeeType} 커피가 ${result} 나왔습니다.`);

const num = window.prompt("정수 입력");
const numResult = parseInt(num) % 2 == 0 ? "짝수" : "홀수";
window.alert(`${numResult}`);
