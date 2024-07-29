const now = new Date();
const minutes = now.getMinutes();

const isWeekDay = now.getDay() != 0 && now.getDay() != 6;
const hasClassDate = [19, 20, 21].some((v) => v == now.getHours);
const isBreakTime = now.getMinutes >= 50;
const isValid = isBreakTime && isWeekDay && hasClassDate;
const b = isValid ? "수업시간" : "쉬는시간";

// if (isWeekDay && hasClassDate && isBreakTime) {
//   console.log("쉬는 시간입니다.");
// } else if (isWeekDay && hasClassDate && !isBreakTime) {
//   console.log("수업 시간입니다.");
// } else if (!(isWeekDay && hasClassDate)) {
//   console.log("지금은 수업시간이 아닙니다.");
// }

console.log(`${b}입니다.`);
