import Swiper, { Autoplay, EffectCards, EffectFade, Navigation, Pagination } from 'swiper';

export function init() {
  if (window.matchMedia("(max-width: 992px)").matches) {
    const swiper = new Swiper('.aboutSwiper',{
      modules: [Pagination, Autoplay],
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: true,
      spaceBetween: 30,
      speed: 600,
      watchSlidesProgress: true,
      initialSlide: 0,
      loop: true,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      autoplay: {
          disableOnInteraction: false,
          delay: 2000
      }
  });
  } else {
    const swiper = new Swiper('.aboutSwiper',{
      modules: [EffectFade, EffectCards, Pagination, Autoplay],
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 600,
      watchSlidesProgress: true,
      effect: 'fade',
      effect: 'cards',
      initialSlide: 0,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
      },
      autoplay: {
          disableOnInteraction: false,
          delay: 2000
      }
  });
  }

    (function swiperConsultation() {
        document
          .querySelectorAll(".consultation .swiper")
          .forEach(function (el, index) {
            const swiper= new Swiper(el, {
              modules: [Pagination],
              slidesPerView: 1,
              spaceBetween: 30,
              // Pagination arrows
              pagination: {
                el: ".consultation .swiper-pagination",
                clickable: true,
                dynamicBullets: true,
              },
            });
          });
      })();
}