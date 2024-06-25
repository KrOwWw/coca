import '/scss/pricing.scss';

// components
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { annualPricing } from './components/pricing/discount.js';

useTheme();
useBurger();
annualPricing();
