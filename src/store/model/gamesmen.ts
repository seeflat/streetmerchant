import {Store} from './store';

export const Gamesmen: Store = {
  currency: '$',
  labels: {
    inStock: [
      {
        container: 'button.btn-cart span span',
        text: ['Add to Cart'],
      },
    ],
    outOfStock: {
      container: '.add-to-cart',
      text: ['not available'],
    },
  },
  links: [
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url: 'https://www.gamesmen.com.au/xbox-series-x-console',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url: 'https://www.gamesmen.com.au/xbox-series-s-console',
    },
  ],
  name: 'gamesmen',
};
