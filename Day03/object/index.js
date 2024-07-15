// object
const americano = {
    name: "아메리카노",
    price: 3000,
    shot: 2,
    bean: "에티오피아"
}
console.log(americano.name)
console.log(americano.price)
console.log(americano["shot"])
console.log(americano["bean"])

// object 속성 추가
americano.decaffein = false;

// object 속성 삭제
delete americano.shot;
//console.log(!!americano["shot"]) //false

// object에 속성 존재 유무
console.log("price" in americano ? "ok" : "no")