"use strict";
console.log("hello from js/main.js");

const spaceSwiper = document.querySelector(".spaceSwiper");
if (spaceSwiper) {
  const swiper = new Swiper(".spaceSwiper", {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween:32,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
  });
}
