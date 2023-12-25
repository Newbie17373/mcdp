let body = document.querySelector("body");
let burger = document.querySelector(".header__burger");
let nav = document.querySelector(".header__nav ");

burger.addEventListener("click", () => {
  body.classList.toggle("lock");
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});
