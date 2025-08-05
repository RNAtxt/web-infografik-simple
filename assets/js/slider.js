const gambar = [
  "assets/img/slider/code.png",
  "assets/img/slider/web.png",
  "assets/img/slider/webrobo.png"
];

let index = 0;
const slider = document.getElementById("slider");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  index = (index + 1) % gambar.length;
  slider.src = gambar[index];
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + gambar.length) % gambar.length;
  slider.src = gambar[index];
});
