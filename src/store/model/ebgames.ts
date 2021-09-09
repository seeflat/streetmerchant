import {Store} from './store';

export const EbGames: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: 'button#addToCartButton span',
      text: ['Add to cart'],
    },
    maxPrice: {
      container: 'span[itemprop="price"]',
    },
    outOfStock: {
      container: '.error-panel h5',
      text: ['The page may have been moved or deleted'],
    },
  },
  links: [
    {
      brand: 'microsoft',
      model: 'xbox series x',
      series: 'xboxsx',
      url:
        'https://www.ebgames.com.au/product/xbox-series-x/267773-xbox-series-x-console',
    },
    {
      brand: 'microsoft',
      model: 'xbox series s',
      series: 'xboxss',
      url:
        'https://www.ebgames.com.au/product/xbox-series-x/267774-xbox-series-s-console',
    },
  ],
  name: 'ebgames',
};
