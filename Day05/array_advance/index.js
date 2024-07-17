const stocks = ["samsung","kakao","apple","evidia"]

// 변형자 기능들(함수)
stocks.push("hybe") // 뒤에 추가
stocks.pop() // 뒤에서 하나 빼기
stocks.unshift("deawoo") // 앞에 추가
stocks.shift() // 앞에서 하나 뺴기
stocks.reverse() // 순서 뒤집기
// console.log(stocks)

// 접근자 기능들
const a = stocks.indexOf("kakao") // 몇 번째인지 찾기
stocks.includes("hybe") // 존재 유무
// console.log(a)

const news = prompt("뉴스 기사 스크랩 입력").split(" ")
const word = prompt("찾고 싶은 단어 입력")
alert(news.includes(word) ? "있음" : "없음")

alert(`찾는 단어는 ${news.indexOf(word)+1}번째`)
