"use strict";

(function () {
  "use strict";

  document.querySelector(".nav__menu").addEventListener("click", function () {
    document.querySelector(".menu").classList.add("opened");
  }), document.querySelector(".menu__button").addEventListener("click", function () {
    document.querySelector(".menu").classList.remove("opened");
  });
})();