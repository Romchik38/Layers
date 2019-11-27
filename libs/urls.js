'use strict';

const urls = {
  '/': () => 'main.page',
  '/phones': () => 'catalog.page',
  '/phones/samsungA620': '/phones/samsungA620-1',
  '/phones/samsungA620-1': () => 'good.page',
};

module.exports = urls;
