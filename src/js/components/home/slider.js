import Swiper from 'swiper';
import { Navigation, Scrollbar, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';

export const useInsightSlider = () => {
  new Swiper('.insight__slider', {
    modules: [Scrollbar],
    slidesPerView: 'auto',
    spaceBetween: 32,
    centeredSlides: true,

    scrollbar: {
      el: '.swiper-scrollbar',
    },

    breakpoints: {
      993: {
        centeredSlides: false,
      },
    },
  });
};

export const useTestimonialsSlider = () => {
  new Swiper('.testimonials__slider', {
    modules: [Navigation],
    slidesPerView: 1,
    spaceBetween: 22,
    // loop: true,
    // crossFade: false,

    effect: 'fade',

    fadeEffect: {
      crossFade: true,
    },

    navigation: {
      prevEl: '.testimonials__btn--prev',
      nextEl: '.testimonials__btn--next',
    },
  });
};
