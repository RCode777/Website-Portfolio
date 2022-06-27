var menuBurger = document.querySelector(".burger input");
var navbar = document.querySelector("nav ul");

menuBurger.addEventListener("click", function () {
  navbar.classList.toggle("gerak");
});

function modeTerang() {
  var body = document.querySelector("body");
  body.classList.toggle("modeTerang");
}
