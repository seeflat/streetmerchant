import {Store} from './store';

export const Xbox: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: 'button[prod="Xbox Series X"]',
      text: ['Checkout'],
    },
    outOfStock: {
      container:
        '[class="BundleBuilderHeader-module__checkoutButton___3UyEq w-100 bg-light-green btn btn-primary"]',
      text: ['Out of stock'],
    },
  },
  links: [
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.xbox.com/en-au/configure/8WJ714N3RBTL',
    },
  ],
  name: 'xbox',
};
