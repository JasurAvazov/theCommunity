import Swiper, { Autoplay, EffectCards, EffectFade, Navigation, Pagination } from 'swiper';

export function init() {
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