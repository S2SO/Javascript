const brith = window.prompt("생년 입력");
const age = 2024 - parseInt(brith);
window.alert(`만나이: ${age} 세`);

const side = window.prompt("정사각형의 한 변의 길이 입력");
window.alert(`정사각형 넓이: ${Number(side) * Number(side)}`);

const won = window.prompt("원화 입력");
const yen = parseInt(won) * 0.1156;
window.alert(`엔화: ${yen}엔`);
