const oder = prompt("음료 입력")
const isAde = oder.includes("에이드")
isAde ? alert("에이드 주문!") : window.alert("음료 주문!")

const word = prompt("영단어 입력")
// const indexOfE = word.includes("e") ? (word.indexOf("e")+1+"번째") : "없음"
const indexOfE = word.indexOf() +1 || "없음"
alert(`알파벳 e는 ${indexOfE}`)

const sentence = prompt("영어 문장 입력")
console.log(sentence.split(" "))

const word1 = prompt("영단어 입력")
const alphabet = prompt("알파벳 입력")
const num = prompt("숫자 입력")
// alert((word1.split(alphabet))[0].repeat(num))
alert(word1.slice(0,word1.indexOf(alphabet)).repeat(num))