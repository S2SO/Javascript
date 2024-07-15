// 기본: 문자열, 숫자, 불리언, 널, 언디파인
// 참조: 배열,

const ages = [18,21,22,31,23,28];
console.log(ages) 
console.log(ages[0]) //18
console.log(ages[3]) //31

const food = ["짜장면","떡볶이","마라탕","마라샹궈","우동","삼계탕"];
console.log(`오늘은 복날이니 ${food[5]}을 먹자`)

const paik = [["아메리카노","라떼","바닐라라떼"],["미숫가루","빽스치노","레몬에이드"]]
console.log(`나는 ${paik[0][1]}랑 ${paik[1][2]} 마실래`)

const coffee = ["메가리카노","꿀아메리카노","카라멜 마끼아또"]
const beverage = ["아이스티","자몽에이드","체리콕"]
const dessert = ["쿠키","마카롱","케이크"]
const megacoffee = [coffee,beverage,dessert]

