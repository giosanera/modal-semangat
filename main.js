const ctaBtn = document.querySelector("#cta");

ctaBtn.addEventListener("click", () => {
  location.href = "card.html";
});

// slector

const img1 = document.querySelector("#hero");

const assetDefault = "assets/2 1.png";
const assetImg1 = "assets/4 1.png";
const assetImg2 = "assets/3 1.png";
const assetImg3 = "assets/5 1.png";

window.addEventListener("load", (event) => {
  setTimeout(function () {
    // document.body.style.backgroundColor = "red";
    img1.src = assetImg1;
    img1.classList.add("pinjol");
  }, 4000);
  setTimeout(function () {
    // document.body.style.backgroundColor = "green";
    img1.src = assetImg2;
    img1.classList.add("pinjol2");
  }, 8000);
  setTimeout(function () {
    // document.body.style.backgroundColor = "blue";
    img1.src = assetImg3;
    img1.classList.add("pinjol3");
  }, 12000);
  setTimeout(function () {
    // document.body.style.backgroundColor = "blue";
    img1.src = assetDefault;
    img1.classList.add("pinjol4");
  }, 16000);
});
