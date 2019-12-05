'use strict';

const { main, catalog, good } = require('./urlsfn');

const urls = {
  '/': main,
  '/*\\.*': {
    '.ico': 'img',
    '.jpeg': 'img',
    '.js': 'scripts',
  },
  '/phones': catalog,
  '/A620': '/samsungA620-1',
  '/samsungA620-1': good,
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
