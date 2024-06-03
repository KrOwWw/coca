import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useMissionSlider = () => {
  new Swiper('.software-development__slider', {
    // slidesPerView: 2.5,
    spaceBetween: 30,
    centeredSlides: false,
    breakpoints: {
      768: {
        slidesPerView: 2.5,
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
export const useArticlesSlider = () => {
  new Swiper('.__slider', {
    // slidesPerView: 2.5,
    spaceBetween: 30,
    centeredSlides: false,
    breakpoints: {
      768: {
        slidesPerView: 2.5,
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
