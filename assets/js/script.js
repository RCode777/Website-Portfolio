var menuBurger = document.querySelector(".burger input");
var navbar = document.querySelector("nav ul");

menuBurger.addEventListener("click", function () {
  navbar.classList.toggle("gerak");
});
