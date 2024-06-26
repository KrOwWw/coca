import '/scss/about.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { useAgencySlider } from './components/about/slider.js';
import { useMeetingSlider } from './components/about/slider.js';

useTheme();
useBurger();
useAgencySlider();
useMeetingSlider();
