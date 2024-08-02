import { data } from "./data.js";

const container = document.createElement("section");
container.className = "container";

data.forEach((gym) => {
  const card = `
      <div class="card">
        <div class="imgBox">
          <img src="${gym.gymPhotoSmall}" alt="">
        </div>
        <span class="info">
        <div class="top-info">
         <p class="type">${gym.tags.join("/")}</p>
          <p class="gymName">${gym.gymName}</p>
          <span class="review">
          <i class="fa-solid fa-star"></i>
          <p class="rate">${gym.review.rate}</p>
          <p class="count">(${gym.review.count})</p>
          </span>
        </div>
        <div class="bottom-info">
          <p class="event"></p>
          <p class="price">${parseInt(gym.price.lowestPrice / 12)}원~</p>
        </div>
        </span>
      </div>
    `;
  container.insertAdjacentHTML("beforeend", card);
  console.log(card);
});
document.body.appendChild(container);
