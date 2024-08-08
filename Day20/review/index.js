const idInput = document.createElement("input");
const idReInput = document.createElement("input");
const accord = document.createElement("button");

accord.innerText = "일치";
accord.style.color = "lightgrey";

idInput.addEventListener("input", (e) => {
  if (e.target.value == idReInput.value) {
    accord.style.backgroundColor = "green";
    accord.innerText = "일치";
  } else {
    accord.style.backgroundColor = "red";
    accord.innerText = "불일치";
  }
});
idReInput.addEventListener("input", (e) => {
  if (e.target.value == idInput.value) {
    accord.style.backgroundColor = "green";
    accord.innerText = "일치";
  } else {
    accord.style.backgroundColor = "red";
    accord.innerText = "불일치";
  }
});

document.body.appendChild(idInput);
document.body.appendChild(idReInput);
document.body.appendChild(accord);
