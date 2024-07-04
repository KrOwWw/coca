import '/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useAgencySlider,
  useMeetingSlider,
} from './components/about/slider.js';
import { useToggle } from './components/about/toggleGetInTouch.js';

useTheme();
useBurger();
useAgencySlider();
useMeetingSlider();
useToggle();
