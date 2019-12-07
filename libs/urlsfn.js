'use strict';

const connector = require('./connector');

const { url, sku } = require('./callbacks.js');

const getparameters = (param, table, callback) =>
  connector('database', table, callback.bind(param));

const urlsFn = {
  'main': page => {
    const data = getparameters({ url: page.url }, 'pages', url)[0];
    page.parameters['title'] = data.title;
  },
  'catalog': page => {
    const data = getparameters({ url: page.url }, 'categories', url)[0];
    page.parameters['title'] = data.title;
    page.parameters['categoryName'] = data.name;
    const goods = [];
    for (const good of data.goods) {
      const data = getparameters({ sku: good }, 'goods', sku)[0];
      goods.push(data);
    }
    page.parameters['categoryGoods'] = goods;
  },
  'good': () => 'hello',
};

module.exports = urlsFn;
