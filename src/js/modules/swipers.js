import Swiper, { EffectCards, EffectFade, Navigation, Pagination } from 'swiper';

export function init() {
    const swiper = new Swiper('.aboutSwiper',{
        modules: [EffectFade, EffectCards, Pagination],
        slidesPerView: 1,
        slidesPerGroup: 1,
        speed: 600,
        watchSlidesProgress: true,
        effect: 'fade',
        effect: 'cards',
        initialSlide: 1,
        pagination: {
            el: ".swiper-pagination",
        },
    });
}