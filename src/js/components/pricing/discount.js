export const annualPricing = () => {
  const discountSwitcher = document.querySelector('[data-price');
  const priceStarter = document.querySelector('[data-price="starter"]');
  const pricePopular = document.querySelector('[data-price="popular"]');
  const priceEnterprise = document.querySelector('[data-price="enterprise"]');

  discountSwitcher.addEventListener('click', () => {
    if (discountSwitcher.dataset.price === 'unactive') {
      discountSwitcher.dataset.price = 'active';
      priceStarter.textContent = '$80';
      pricePopular.textContent = '$1120';
      priceEnterprise.textContent = '$1680';
    } else {
      discountSwitcher.dataset.price = 'unactive';
      priceStarter.textContent = '$100';
      pricePopular.textContent = '$1400';
      priceEnterprise.textContent = '$2100';
    }
  });
};
