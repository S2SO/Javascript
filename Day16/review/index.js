import { data } from "./data.js";

const container = document.createElement("section");
container.className = "container";
document.body.appendChild(container);

const sns = (sns) => {
  const snsMap = {
    instagram: '<i class="fa-brands fa-instagram"></i>',
    facebook: '<i class="fa-brands fa-facebook"></i>',
    tiktok: '<i class="fa-brands fa-tiktok"></i>',
    youtube: '<i class="fa-brands fa-youtube"></i>',
  };
  return snsMap[Object.keys(snsMap).find((v) => v == sns)];
  //   const instagram =
  //     x.sns == "instagram" && '<i class="fa-brands fa-instagram"></i>';
  //   const facebook =
  //     x.sns == "facebook" && '<i class="fa-brands fa-facebook"></i>';
  //   const tiktok = x.sns == "tiktok" && '<i class="fa-brands fa-tiktok"></i>';
  //   const youtube = x.sns == "youtube" && '<i class="fa-brands fa-youtube"></i>';
  //   return instagram || facebook || tiktok || youtube;
};

const time = new Date().getHours() + ":" + new Date().getMinutes();
data.forEach((x) => {
  const card = `
  <div class="card">
    <span class="top-bar">
    <p>${time}</p>
    <p>
    <i class="fa-solid fa-wifi"></i>
    <i class="fa-solid fa-battery-three-quarters"></i>
    </p>
    </span>

    <span class="profile">
        <div class="imgBox"><img src="${x.image}"></div>
        <h2>${x.full_name}</h2>
    </span>

    <span class="info">
        <h5>Company:</h5>
        <p>${x.company_name}</p>
        <h5>Univercity:</h5>
        <p>${x.university}</p>
        <h5>Email:</h5>
        <p>${x.email}</p>
    </span>
    ${sns(x.sns)}    
    </div>
    `;

  container.insertAdjacentHTML("beforeend", card);
});
