const headerEl = document.querySelector(".header");
const burgerEl = document.getElementById("burger");
const menuEl = document.querySelector(".menu-list");

document.addEventListener("DOMContentLoaded", function () {
    burgerEl.addEventListener("click", function () {
      headerEl.classList.toggle("open");
      if (headerEl.classList.contains("open")) {
        document.documentElement.style.overflow = "hidden";
      } else {
        document.documentElement.style.overflow = "auto";
      }
    });
  });
  
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      headerEl.classList.remove("open");
      document.documentElement.style.overflow = "auto";
    }
  });
  
  burgerEl.addEventListener("click", (event) => {
    event._isClickWithInMenu = true;
  });
  
  menuEl.addEventListener("click", (e) => {
    headerEl.classList.remove("open");
    document.documentElement.style.overflow = "auto";
  });
  
  document.body.addEventListener("click", (event) => {
    if (event._isClickWithInMenu) return;
    headerEl.classList.remove("open");
    document.documentElement.style.overflow = "auto";
  });

window.addEventListener("resize", () => {
    if (window.innerWidth >= 1280) {
        headerEl.classList.remove("open");
        document.documentElement.style.overflow = "auto";
    }
}); 