const coffee = "americano"

// 포함 유무
coffee.includes("ri") //true
// 몇 번째, 없으면 -1
coffee.indexOf("r") // 3 
// "a" -> "z" 바꿔줌
coffee.replace("a","z")
// "ame"로 시작하는지
coffee.startsWith("ame") //true
// "cano"로 끝나는지
coffee.endsWith("cano") //true
// 0~5 잘라서 주기
coffee.slice(0,5) //"ameri"
// 대문자화
coffee.toUpperCase()
// 소문자화
coffee.toLowerCase()
// i기준으로 배열화[타입 변환]
coffee.split("i")
// coffee를 3번 반복
coffee.repeat(3) //americanoamericanoamericano

console.log(coffee.slice(0,5))