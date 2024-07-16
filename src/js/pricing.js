import '/scss/pricing.scss';

// components
import { hideHeader } from './components/hideHeader.js';
import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { annualPricing } from './components/pricing/discount.js';

hideHeader();
useTheme();
useBurger();
annualPricing();
