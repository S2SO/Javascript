const pwInput = document.createElement("input");
const eyeButton = document.createElement("button");
const openEye = `<i class="fa-solid fa-eye"></i>`;
const closedEye = `<i class="fa-solid fa-eye-slash"></i>`;
eyeButton.innerHTML = openEye;
pwInput.type = "password";

eyeButton.addEventListener("click", () => {
  if (pwInput.type === "password") {
    eyeButton.innerHTML = closedEye;
    pwInput.type = "text";
  } else {
    pwInput.type = "password";
    eyeButton.innerHTML = openEye;
  }
});

document.body.appendChild(pwInput);
document.body.appendChild(eyeButton);
