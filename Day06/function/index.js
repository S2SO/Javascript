// 일반 함수 f(x) - function

// 함수 정의
function icecream(x){
    console.log(`${x}맛 아이스크림 꿀맛`)
}

// 함수 실행
// icecream("빨간")
// icecream("녹차")
// icecream("민트")

function oddOrEven(x){
    if(x%2){
        console.log(`${x}은 홀수입니다`)
    }else{
        console.log(`${x}은 짝수입니다`)
    }
}
// oddOrEven(5)
// oddOrEven(8)
// oddOrEven(27)
// oddOrEven(60)

function makeDouble(x){
    return x * 2
}
const a = makeDouble(10)
console.log(a)


function hello(x){
    return `안녕하세요! ${x || "Guest"} 님!`
}

function add(x, y){
    return x+y;
}
const a2 = add(10,20);

function minus(x,y){
    return x-y;
}

function multiply(x,y){
    return x*y;
}

function square(x,y){
    return x**y
}

