const hamburger = document.getElementById("hamburger");
const navBar = document.getElementById("header-nav-container");
const overlay = document.getElementById("overlay");
const intro = document.getElementById("intro");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
  overlay.classList.toggle("active");
  intro.classList.toggle("active");
});
