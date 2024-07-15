// // const book = {};
// // book.title = window.prompt("책 제목 입력")
// // book.price = parseInt(window.prompt("가격 입력"))
// // book.publisher = window.prompt("출판사 입력")
// // console.log(book)

// const title = window.prompt("책 제목 입력")
// const price = parseInt(window.prompt("가격 입력"))
// const publisher = window.prompt("출판사 입력")

// // 1번
// const book = {
//     title: title,
//     price: price,
//     publisher: publisher
// }

// // 2번
// book.title = title
// book.price = price
// book.publisher = publisher

// console.log(book)

// ----- mz퀴즈 -----

// // const energy = (window.prompt("I인가요 E인가요?"))=="I"?"내향적":"외향적"
// // const information = window.prompt("N인가요 S인가요?")=="N"?"직관적":"감각적"
// // const decisions = window.prompt("T인가요 F인가요?")=="T"?"이성적":"감정적"
// // const lifestyle = window.prompt("J인가요 P인가요?")=="J"?"계획적":"즉흥적"
// // console.log(`당신은 ${energy}이고 ${information}이고 ${decisions}이고 ${lifestyle}이시네여`)

// const energy = window.prompt("I인가요 E인가요?")
// const information = window.prompt("N인가요 S인가요?")
// const decisions = window.prompt("T인가요 F인가요?")
// const lifestyle = window.prompt("J인가요 P인가요?")

// const mbti = {
//     e: "외향적",
//     i: "내향적",
//     n: "직관적",
//     s: "감각적",
//     t: "이성적",
//     f: "감정적",
//     j: "계획적",
//     p: "즉흥적"
// }

// console.log(`당신은 ${mbti[energy]}, ${mbti[decisions]}, ${mbti[information]}, ${mbti[lifestyle]}`)

// ----- 퀴즈 -----

const birth = Number(window.prompt("태어난 년도 입력"))
const num = birth%12
const zodiac = {
    0: "원숭이",
    1: "닭",
    2: "개",
    3: "돼지",
    4: "쥐",
    5: "소",
    6: "호랑이",
    7: "토끼",
    8: "용",
    9: "뱀",
    10: "말",
    11: "양"
}
console.log(`당신은 ${zodiac[num]}띠입니다.`)