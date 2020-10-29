// put your js here

// Initialize Swiper
let homeSwiper = new Swiper(".home-carousel", {
  centeredSlides: true,
  spaceBetween: 30,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Initialize Swiper
let promoSwiper = new Swiper(".promo-carousel", {
  slidesPerView: 1,
  spaceBetween: 10,
  preventClicksPropagation: true,
  speed: 1000,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15,
    },
    "@0.75": {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 15,
    },
    "@1.00": {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 15,
    },
  },
});
