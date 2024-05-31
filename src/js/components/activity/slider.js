import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';
import 'swiper/css';

export const useMissionSlider = () => {
  new Swiper('.mission__slider', {
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
