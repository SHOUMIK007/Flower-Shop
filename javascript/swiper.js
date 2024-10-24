// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-bttn-next",
      prevEl: ".swiper-bttn-prev",
    },
    mousewheel: true,
    keyboard: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 40,
      },
    },
  });