const menu = [["아아","라떼","아이스티"],["초코","녹차","마카다미아"]];
// const price = {
//     아아: 2000,
//     라떼: 3000,
//     아이스티: 2500,
//     초코: 2500,
//     녹차: 2500,
//     마카다미아: 3000
// }
// const kcal = {
//     아아: 5,
//     라떼: 150,
//     아이스티: 150,
//     초코: 300,
//     녹차: 300,
//     마카다미아: 400
// }
// const coffee = window.prompt(`커피 선택: ${menu[0]}`)
// const cookie = window.prompt(`쿠키 선택: ${menu[1]}`)
// console.log(`구매한 메뉴: ${coffee}와 ${cookie}`)
// console.log(`구매한 가격: ${price[coffee]+price[cookie]} 원`)
// console.log(`총 칼로리: ${kcal[coffee]+kcal[cookie]} kcal`)

const coffee = window.prompt(`커피 선택: ${menu[0]}`)
const cookie = window.prompt(`쿠키 선택: ${menu[1]}`)
const coffeeMenu = {
    아아: {
        price:2000,
        kcal:5
    },
    라떼: {
        price:3000,
        kcal:150
    },
    아이스티: {
        price:2500,
        kcal:150
    }
}
const cookieMenu = {
    초코: {
        price:2500,
        kcal:300
    },
    녹차: {
        price:2500,
        kcal:300
    },
    마카다미아: {
        price:3000,
        kcal:400
    }
}
window.alert(`선택한 메뉴: ${coffee}와 ${cookie}
    가격: ${coffeeMenu[coffee][price]+cookieMenu[coffee][price]} 원
    칼로리: ${coffeeMenu[coffee][kcal]+cookieMenu[coffee][kcal]} kcal`)
