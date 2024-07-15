// const base = Number(window.prompt("정삼각형 밑변 입력"))
// const height = Number(window.prompt("정삼각형 높이 입력"))
// window.alert(`정삼각형의 넓이: ${base * height * 0.5}`)

// const num = Number(window.prompt("정수 입력"))
// const plusOrMinus = num = 0 ? "양수" : "0 또는 음수"
// window.alert(`${num}은 ${plusOrMinus}!`)

// const num1 = Number(window.prompt("10000~99999 사이의 정수 입력"));
// const tenThou = parseInt(num1 / 10000);
// const thou = parseInt((num1 % 10000) / 1000);
// const hund = parseInt((num1 % 1000) / 100);
// const ten = parseInt((num1 % 100) / 10);
// const one = parseInt(num1 % 10);
// window.alert(`${tenThou}만 ${thou}천${hund}백${ten}십${one}`);

const num2 = Number(window.prompt("10000~99999 사이의 정수 입력"));
// const result = (num2%1000)-(num2%100)
// window.alert(`${result}`)
const result = parseInt((num2%1000)/100)
window.alert(`${result*100}`)