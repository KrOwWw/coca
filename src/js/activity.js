import '/scss/activity.scss';

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import {
  useMissionSlider,
  useArticlesSlider,
} from './components/activity/slider.js';

useTheme();
useBurger();
useMissionSlider();
useArticlesSlider();
