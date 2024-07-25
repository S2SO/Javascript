// 기본 타입: 넘버, 스트링, 불리언, 언디파인, 널
// 참조 타입: 어레이 -> [], 오브젝트 -> {}, ...
const book = Object();
const pizza = Array(10).fill("🍕");
const arr = Array(10)
  .fill("")
  .map((x) => !!x); //false 10개

const arr1 = Array(1001)
  .fill(0)
  .map((x, i) => i);

const arr2 = Array(1001)
  .fill(null)
  .map((x, i) => (i % 2 ? i : "🍕"));

const arr3 = Array(1000)
  .fill(null)
  .map((x, i) =>
    String(i + 1).includes("3") ||
    String(i + 1).includes("6") ||
    String(i + 1).includes("9")
      ? "👏"
      : i + 1
  );
console.log(arr3);
