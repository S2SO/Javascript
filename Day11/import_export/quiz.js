import { data } from "../review/index.js";

data.map(({ full_name, money }) => {
  const a = [...full_name].map((x) =>
    x === x.toLowerCase() ? x.toUpperCase : x.toLowerCase()
  );
  const b = Number(money.replace("$", "")) * 154.3 + " yen";
  return { full_name: a, money: b };
});

const quiz2 = data.map((x) => {
  const a = [...x.credit_card].map((v, i) => (i < 4 ? v : "*")).join("");
  return { ...x, credit_card: a };
});
console.log(quiz2);
