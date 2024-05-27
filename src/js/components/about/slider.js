import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useAgencySlider = () => {
  new Swiper('.agency__slider', {
    slidesPerView: 2.5,
    spaceBetween: 27,
    centeredSlides: false,
    breakpoints: {
      576: {
        spaceBetween: 15,
      },
      320: {
        spaceBetween: 3,
      },
    },
  });
};
