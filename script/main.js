function openMenu() {
  document.querySelector("header ul").classList.remove("hide-nav");
  document.querySelector(".overlay").classList.remove("hidden");
}

function closeMenu() {
  document.querySelector("header ul").classList.add("hide-nav");
  document.querySelector(".overlay").classList.add("hidden");
}
