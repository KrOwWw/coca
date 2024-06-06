import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useMissionSlider = () => {
  new Swiper('.software-development__slider', {
    spaceBetween: 30,
    centeredSlides: false,
    slidesPerView: 2.5,
    breakpoints: {
      576: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 3,
      },
    },
  });
};
export const useArticlesSlider = () => {
  new Swiper('.articles__slider', {
    modules: [Navigation],
    spaceBetween: 30,
    slidesPerView: 1,
    loop: true,
    centeredSlides: false,
    navigation: {
      prevEl: '.articles__btn--prev',
      nextEl: '.articles__btn--next',
    },
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      576: {
        spaceBetween: 15,
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 3,
      },
    },
  });
};
