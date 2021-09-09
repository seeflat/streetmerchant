import {Store} from './store';

export const JBHiFi: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '#availability span.in-stock',
      text: ['In stock'],
    },
    maxPrice: {
      container: '.price',
      euroFormat: false,
    },
    outOfStock: {
      container: '.content-404 h2',
      text: ['Oops! We can\'t find the page you\'re looking for.'],
    },
  },
  links: [
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url:
        'https://www.jbhifi.com.au/products/xbox-series-x-1tb-console',
    },
  ],
  name: 'jbhifi',
  waitUntil: 'domcontentloaded',
};
