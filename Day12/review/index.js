import { data } from "./dummy.js";

// {
//     credit_card: "3570226782195338",
//     file_name: "VelEnim.mp3",
//     money: "$474.90",
//     longitude: 16.6565678,
//     latitude: 43.677427,
//   }

//      1
const quiz1 = data.map((x) => {
  const credit_card = [...x.credit_card]
    .map((v, i) => (i >= x.credit_card.length - 4 ? v : "*"))
    .join("");
  const file_name = x.file_name.split(".")[1];
  const money_int = parseInt(x.money.replace("$", ""));
  //   const money =
  //     "$" +
  //     (money_int % 10 >= 5
  //       ? money_int + 10 - (money_int % 10)
  //       : money_int - (money_int % 10));
  const money = "$" + Math.round(money_int * 0.1) * 10;

  return { credit_card, file_name, money };
});
console.log(quiz1);

//      2
const quiz2 = data.map((x) => {
  x.area = "";
  if (
    x.latitude >= 10 &&
    x.latitude <= 70 &&
    x.longitude >= -30 &&
    x.longitude <= 60
  ) {
    x.area = "유럽";
  } else if (
    x.latitude >= 10 &&
    x.latitude <= 80 &&
    x.longitude >= 60 &&
    x.longitude <= 180
  ) {
    x.area = "아시아";
  } else if (
    x.latitude >= -60 &&
    x.latitude <= 60 &&
    x.longitude >= -170 &&
    x.longitude <= -30
  ) {
    x.area = "아메리카";
  } else {
    x.area = "아몰랑";
  }
  return x.area;
});
console.log(quiz2);
