const ctaBtn = document.querySelector("#cta");

ctaBtn.addEventListener("click", () => {
  location.href = "card.html";
});

// slector

const img1 = document.querySelector("#hero");

const assetDefault = "assets/2 1.png";
const assetImg1 = "https://firebasestorage.googleapis.com/v0/b/listening-app-e843d.appspot.com/o/listening-apps%2Fimage%2Fstory1%2F1.png?alt=media&token=27d9966c-a3e4-4092-be90-2a8eff881a50";
const assetImg2 = "https://firebasestorage.googleapis.com/v0/b/listening-app-e843d.appspot.com/o/listening-apps%2Fimage%2Fstory2%2F1.png?alt=media&token=4a750534-36bc-47ed-bd9b-2791e3ff5ad2";
const assetImg3 = "https://firebasestorage.googleapis.com/v0/b/listening-app-e843d.appspot.com/o/listening-apps%2Fimage%2Fstory3%2F3.png?alt=media&token=c2d46a69-67d3-4df1-9bc9-bf4c83e58b7f";
const assetImg4 = "https://firebasestorage.googleapis.com/v0/b/listening-app-e843d.appspot.com/o/listening-apps%2Fimage%2Fstory5%2F2.png?alt=media&token=b8d1c6a7-6cc5-4c52-9879-1d3ef2b7d9fd";

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
    img1.src = assetImg4;
    img1.classList.add("pinjol4");
  }, 16000);
});
