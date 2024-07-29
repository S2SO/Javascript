Math.E; // 자연상수
Math.PI; // 파이

Math.ceil(5.1); // 올림
Math.floor(3.7); // 내림

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min); // 최댓값은 제외, 최솟값은 포함
}
