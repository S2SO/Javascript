// .클래스  #아이디
const pwInpun = document.querySelector("#pwInput");
const eyeButton = document.querySelector("#eyeButton");
// const eyeIcon = document.querySelector(".fa-eye");

const openEye = `<i class="fa-solid fa-eye"></i>`;
const closedEye = `<i class="fa-solid fa-eye-slash"></i>`;

eyeButton.addEventListener("click", () => {
  if (pwInput.type === "password") {
    eyeButton.innerHTML = closedEye;
    pwInput.type = "text";
  } else {
    pwInput.type = "password";
    eyeButton.innerHTML = openEye;
  }
});
