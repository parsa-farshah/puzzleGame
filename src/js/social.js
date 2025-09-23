let btnMenu = document.querySelector("#btnMenu");
let subMenu = document.querySelector("#subMenu");
btnMenu.addEventListener("click", () => {
  subMenu.classList.toggle("hidden");
  subMenu.classList.toggle("flex");
});
