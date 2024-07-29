function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min); // 최댓값은 제외, 최솟값은 포함
}

const userNumbers = prompt("숫자 6개 입력")
  .split(" ")
  .map((x) => Number(x));
// const lottoNumbers = Array(6)
//   .fill()
//   .map((x) => getRandomInt(1, 46));
const lottoNumbers = [1, 2, 3, 4, 5, 6];

const result = userNumbers.filter((x) => lottoNumbers.some((v) => v == x));
const prize = {
  0: "1등",
  1: "2등",
  3: "3등",
};
console.log(`${prize[result.length] || "꽝"}입니다`);
console.log(userNumbers);
console.log(lottoNumbers);
