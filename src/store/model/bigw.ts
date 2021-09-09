import {Store} from './store';

export const BigW: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: 'button.Button',
      text: ['Add to cart'],
    },
    maxPrice: {
      container: '.price',
      euroFormat: false,
    },
  },
  links: [
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url:
        'https://www.bigw.com.au/product/xbox-series-x-1tb-console/p/124385/',
    },
  ],
  name: 'bigw',
  waitUntil: 'domcontentloaded',
};
