const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
const date = now.getDate();
const hours = now.hours();
const minutes = now.getMinutes();
const seconds = now.setSeconds();
const day = now.getDay(); // 0:일 1:월 2:화 ... 6:토

now.toLocaleString(); // 7/19/2024, 2:23:46 PM (미국 형식)
now.toLocaleDateString(); // 7/19/2024
now.toLocaleTimeString(); // 2:23:46 PM
