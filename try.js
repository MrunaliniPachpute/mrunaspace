const exploreBtn = document.querySelector(".explore-btn");
const popup = document.getElementById("projectPopup");
const closeBtn = document.querySelector(".close-btn");

exploreBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});
