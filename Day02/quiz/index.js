const coffee = window.prompt("무슨 커피?");
const shot = window.prompt("몇 샷?");
const density = parseInt(shot) >= 3 ? `진하게` : `연하게`;
window.alert(`${coffee} 커피가 ${density} 나왔습니다.`);

const num = window.prompt("정수 입력");
const isOdd = parseInt(num) % 2 == 0 ? "짝수" : "홀수";
window.alert(`${isOdd}`);
