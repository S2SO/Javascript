// 일반 함수: function 이름(매개변수){return}
function greet(x){
    return `${x} 님 안녕하세요!`
}

// 화살표 함수: ()=>{}
const a = (x) => {
    return `${x} 님 안녕하세요!`
}
const b = a("엄준식")
console.log(b)


const square = (x,y) => {
    return x**y;
}
console.log(square(5,2))

const lucky = (x) => {
    return `${x} 완전 럭키비키자나><`;
}
console.log(lucky("비 안 와서"))
