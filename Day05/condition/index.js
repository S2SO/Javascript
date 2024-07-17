// 코드 치면 위에서 아래로 감
// 제어문[코드 컨트롤] - 조건문

// const num = Number(prompt("숫자 입력"))
// if(num % 2){
//     alert(`${num}은 홀수입니다.`)
// }else{
//     alert(`${num}은 짝수입니다.`)
// }

// const num = Number(prompt("숫자 입력"))
// if(num > 0){
//     alert(`${num}은 양수입니다.`)
// }else{
//     alert(`${num}은 양수가 아닙니다.`)
// }

// const seoul = ["마포","강남","신사","압구정","신촌","노원","화곡","화양"]
// const live = prompt("사는 동네 입력")
// if(seoul.includes(live)){
//     alert(`서울에 사시는군요`)
// }else{
//     alert(`촌사람이군요`)
// }

// if(true){

// }else if(true){

// }else if(true){

// }else{

// }

// const num = prompt("정수 입력")

// // if(num > 0 && !(num % 2)){
// //     alert("양의 짝수")
// // }else if(num > 0 && num % 2){
// //     alert("양의 홀수")
// // }else if(num < 0 && !(num % 2)){
// //     alert("음의 짝수")
// // }else if(num < 0 && num % 2){
// //     alert("음의 홀수")
// // }else{
// //     alert("0 입니다")
// // }

// const positive = num>0
// const nagative = num<0
// const odd = num % 2
// const even = !(num % 2)

// if(positive && odd){
//     alert("양의 홀수")
// }else if(positive && even){
//     alert("양의 짝수")
// }else if(nagative && odd){
//     alert("음의 홀수")
// }else if(nagative && even){
//     alert("음의 짝수")
// }else{
//     alert("0 입니다")
// }

// const engScore = Number(prompt("영어 점수 입력"))
// // const perfect = engScore == 100
// // const gradeA = engScore >= 90 && engScore<100
// // const gradeB = engScore >= 80 && engScore<90
// // const gradeC = engScore >= 70&& engScore<80

// // if(perfect){
// //     alert("만점입니다.")
// // }else if(gradeA){
// //     alert("A입니다.")
// // }else if(gradeB){
// //     alert("B입니다.")
// // }else if(gradeC){
// //     alert("C입니다.")
// // }else{
// //     alert("F입니다.")
// // }

// if(engScore==100){
//     alert("만점입니다.")
// }else if(engScore>=90){
//     alert("A입니다.")
// }else if(engScore>=80){
//     alert("B입니다.")
// }else if(engScore>=70){
//     alert("C입니다.")
// }else{
//     alert("F입니다.")
// }



const angle = Number(prompt("각도 입력"))
if(angle==90){
    alert("직각입니다.")
}else if(angle==180){
    alert("평각입니다.")
}else if(angle<90 && angle>0){
    alert("예각입니다.")
}else if(angle>90 && angle<180){
    alert("둔각입니다.")
}else{
    alert("오류")
}

const height = Number(prompt("키 입력(cm)")) * 0.01
const weight = Number(prompt("몸무게 입력(kg)")) 
const bmi = weight/(height**2)
if(bmi>25){
    alert("비만입니다.")
}else if(bmi<=25 && bmi>23){
    alert("과체중입니다.")
}else if(bmi<=23 && bmi>18.5){
    alert("정상입니다.")
}else if(bmi<=18.5 && bmi>0){
    alert("저체중입니다.")
}else{
    alert("오류")
}