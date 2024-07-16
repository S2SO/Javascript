// short-circuit[단축 평가]
// &&[and] xmr) 모두 참이어야 참
// ||[or] 특) 하나라도 참이면 참
// truthy & falsy["",0 -0,null,undefined,[]]

const a = true || "abc" //true //젤 '먼저' 나오는 truthy 값
const b = false || "xyz" //"xyz"

const useName = window.prompt("손님 이름")
const name = useName || "Guest";
console.log(`${name}님이 들어왔습니다.`)

const c = true && "제로콜라" //"제로콜라" //앞에가 다 true면 '맨 뒤' truthy 값
const d = false && "coke" //false

const isLogin = window.prompt("비밀번호 입력") === "1234"
isLogin && window.alert("로그인 성공")