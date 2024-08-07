const textInput = document.createElement("input");
const specialCha = [..."!#@$*"];
textInput.addEventListener("input", (e) => {
  textInput.style.color = specialCha.some((x) => e.target.value.includes(x))
    ? "red"
    : "black";
});
document.body.append(textInput);
