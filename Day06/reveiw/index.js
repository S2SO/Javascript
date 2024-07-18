// const angle = Number(prompt("각도 입력"))
// if (angle==180){
//     alert("평각입니다.")
// }else if(angle<180 && angle>90){
//     alert("둔각입니다.")
// }else if(angle==90){
//     alert("직각입니다.")
// }else if(angle<90 && angle>0){
//     alert("예각입니다.")
// }else{
//     alert("오류입니다. 1~180도 사이로 입력하세요.")
// }


const password = prompt("비밀번호를 설정해주세요")
const special = password.includes("!"||"@"||"#"||"*")
const startsWithIT = password.startsWith("IT")
const lengthOver6 = password.length > 6
if(!special){
 alert("특수문자(!@#*)가 포함돼야 합니다.")    
}else if(!startsWithIT){
    alert("IT로 시작해야 합니다.")
}else if(!lengthOver6){
    alert("6글자보다 길어야 합니다.")
}else{
    alert("비밀번호 설정 완료!")
}