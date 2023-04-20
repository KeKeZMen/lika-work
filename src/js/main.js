const openMenu = () => {
  document.querySelector(".menu").classList.add("opened");
};
const closeMenu = () => {
  document.querySelector(".menu").classList.remove("opened");
};

document.querySelector(".nav__menu").addEventListener("click", openMenu);
document.querySelector(".menu__button").addEventListener("click", closeMenu);
