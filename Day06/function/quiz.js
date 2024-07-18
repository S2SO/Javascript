// const ticket = () => {
//     movie = prompt("영화 선택")
//     const price = {
//         범죄도시: 10000,
//         인사이드아웃: 11000,
//         핸섬가이즈: 12000
//     }
//     return price[movie]
// }
// alert(ticket())

// const bigger = () => {
//     const x = Number(prompt("첫 번째 수 입력"))
//     const y = Number(prompt("두 번째 수 입력"))
//     // if (x>=y){
//     //     return x
//     // }else{
//     //     return y
//     // }
//     return (x > y ? x : y)
// }
// alert(`더 큰 수: ${bigger()}`)

// const lowOrUp = ()=>{
//     const word = prompt("영단어 입력")
//     // if(word.toLowerCase() == word){
//     //     return (word.toUpperCase())
//     // }else{
//     //     return (word.toLowerCase())
//     // }
//     return word.toLowerCase() == word ? word.toUpperCase() : word.toLowerCase()
// }
// alert(lowOrUp())

// const wordFromNum = () => {
//     const word = prompt("영단어 입력")
//     const num = prompt("숫자 입력")
//     return word.slice(0,num)
// }
// alert(wordFromNum())

const beArray = () => {
    const arr = []
    arr.push(prompt("입력"))
    arr.push(prompt("입력"))
    arr.push(prompt("입력"))
    return arr;
}
console.log(beArray())