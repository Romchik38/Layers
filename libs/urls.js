'use strict';

const { main, catalog, good } = require('./urlsfn');

const urls = {
  '/': main,
  '/*\\.*': {
    '.ico': 'public/img',
    '.jpeg': 'public/img',
    '.jpg': 'public/img',
    '.png': 'public/img',
    '.js': 'public/scripts',
  },
  '/phones': catalog,
  '/cases': catalog,
  '/galaxy-a30s': '/samsung-galaxy-a30s-32gb-black',
  '/samsung-galaxy-a30s-32gb-black': good,
  '/apple-iphone-xr-64gb-white': good,
  '/leather-case-black-perl': good,
  '/ultra-touch-caver-for-iphone-xr': good,
};

const matching = [];
for (const key in urls) {
  if (key.includes('*')) {
    const rx = new RegExp(key.replace(/\*/g, '(.*)'));
    const value = urls[key];
    matching.push([rx, value]);
    delete urls[key];
  }
}

module.exports = { urls, matching };
