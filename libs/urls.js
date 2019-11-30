'use strict';

const urls = {
  '/': () => 'main.page',
  '/phones': () => 'catalog.page',
  '/A620': '/samsungA620-1',
  '/samsungA620-1': () => 'good.page',
};

module.exports = urls;
