const idInput = document.createElement("input");
idInput.style.width = "500px";

idInput.addEventListener("input", () => {
  console.log(idInput.value);
  idInput.style.color = idInput.value.length >= 10 ? "red" : "black";
});

document.body.appendChild(idInput);
