const showNav = document.querySelector(".toggle-nav");
const navbar = document.querySelector("nav");

showNav.addEventListener("click", () => {
  navbar.classList.toggle("hide-nav");
  showNav.classList.toggle("changeIcon");
});
