import { trainer } from "./trainer.js";

const contianer = document.createElement("section");
contianer.style.display = "grid";
contianer.style.gridTemplateColumns = "repeat(2,1fr)";
contianer.style.gap = "10px";

trainer.forEach((x) => {
  const tag = `
        <div class="trainer">
        <div class="imageBox">
            <img src="${x.profileImage}" alt="">
        </div>
        <div class="info">
            <div class="title">
                <span class="name">${x.name}</span>
                <span class="position">${x.position}</span>
                <span class="location">${x.gymName}</span>
            </div>
            <div class="address">
                <span>${x.gymAddress}</span>
            </div>
            <div class="type"></div>
        </div>
    </div>
    `;
  contianer.insertAdjacentHTML("beforeend", tag);
});
document.body.appendChild(contianer);
